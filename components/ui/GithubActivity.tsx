"use client";

import { memo, useEffect, useState } from "react";

interface Day {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];
const DAY_LABELS: Record<number, string> = { 1: "Mon", 3: "Wed", 5: "Fri" };

const CELL = 13;
const GAP = 3;
const STEP = CELL + GAP;
const DAY_COL_W = 30;

const LIGHT  = ["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"];
const DARK = ["#21262d", "#0e4429", "#006d32", "#26a641", "#39d353"];
const BLUE = ["#21262d", "#a3c9ff", "#5fa3ff", "#2f7bff", "#0b5cff"];
const PURPLE = ["#21262d", "#d8b4ff", "#c084fc", "#a855f7", "#7e22ce"];

const COLOR_MAP = { light: LIGHT, dark: DARK, blue: BLUE, purple: PURPLE };

function toLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 3)  return 1;
  if (count <= 6)  return 2;
  if (count <= 9)  return 3;
  return 4;
}

function buildGrid(dayMap: Map<string, Day>, year: number | "last"): (Day | null)[][] {
  let start: Date;
  let end: Date;

  if (year === "last") {
    end = new Date();
    start = new Date(end);
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() + 1);
  } else {
    start = new Date(year, 0, 1);
    end = year === new Date().getFullYear() ? new Date() : new Date(year, 11, 31);
  }

  start.setDate(start.getDate() - start.getDay());

  const weeks: (Day | null)[][] = [];
  const cur = new Date(start);

  while (cur <= end) {
    const week: (Day | null)[] = [];
    for (let d = 0; d < 7; d++) {
      const iso = cur.toISOString().slice(0, 10);
      if (cur > end) {
        week.push(null);
      } else {
        week.push(dayMap.get(iso) ?? { date: iso, count: 0, level: 0 });
      }
      cur.setDate(cur.getDate() + 1);
    }
    weeks.push(week);
  }
  return weeks;
}

function monthLabels(grid: (Day | null)[][]): { label: string; col: number }[] {
  const out: { label: string; col: number }[] = [];
  let last = -1;
  grid.forEach((week, i) => {
    const first = week.find(Boolean);
    if (!first) return;
    const m = new Date(first.date).getMonth();
    if (m !== last) { out.push({ label: MONTHS[m], col: i }); last = m; }
  });
  return out;
}

function Tooltip({ day, x, y }: { day: Day; x: number; y: number }) {
  const label = new Date(day.date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
  return (
    <div
      className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full px-2.5 py-1.5 rounded-md text-xs font-mono whitespace-nowrap shadow-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
      style={{ left: x, top: y - 8 }}
    >
      <b>{day.count} contribution{day.count !== 1 ? "s" : ""}</b> · {label}
    </div>
  );
}

function Skeleton() {
  return (
    <div className="flex gap-[3px] animate-pulse opacity-40">
      {Array.from({ length: 53 }).map((_, w) => (
        <div key={w} className="flex flex-col gap-[3px]">
          {Array.from({ length: 7 }).map((_, d) => (
            <div key={d} className="w-[13px] h-[13px] rounded-[3px] bg-neutral-300 dark:bg-neutral-700" />
          ))}
        </div>
      ))}
    </div>
  );
}

function YearPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={[
        "px-2.5 py-0.5 rounded-full text-[11px] font-medium transition-colors duration-150",
        active
          ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
          : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
function GithubActivity({
  username,
  theme = "dark", // ← default is dark
}: {
  username: string;
  theme?: "light" | "dark" | "blue" | "purple";
}) {
  const [allDays, setAllDays]           = useState<Map<string, Day>>(new Map());
  const [years, setYears]               = useState<number[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | "last">("last");
  const [total, setTotal]               = useState<number | null>(null);
  const [bestDay, setBestDay]           = useState<Day | null>(null);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState(false);
  const [tip, setTip]                   = useState<{ day: Day; x: number; y: number } | null>(null);

  // Colors driven entirely by the theme prop — no system detection needed
  const colors = COLOR_MAP[theme];

  useEffect(() => {
    let dead = false;
    setLoading(true);
    setError(false);

    (async () => {
      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=all`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const raw: { date: string; count: number }[] = json.contributions ?? [];
        if (!raw.length) throw new Error("empty");

        const map = new Map<string, Day>();
        const yearSet = new Set<number>();

        raw.forEach((c) => {
          map.set(c.date, { date: c.date, count: c.count, level: toLevel(c.count) });
          yearSet.add(new Date(c.date).getFullYear());
        });

        if (!dead) {
          setAllDays(map);
          setYears(Array.from(yearSet).sort((a, b) => b - a));
          setLoading(false);
        }
      } catch (e) {
        console.warn("GithubActivity error:", e);
        if (!dead) { setError(true); setLoading(false); }
      }
    })();

    return () => { dead = true; };
  }, [username]);

  useEffect(() => {
    if (!allDays.size) return;

    const entries = Array.from(allDays.values()).filter((d) => {
      if (selectedYear === "last") {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        return new Date(d.date) >= oneYearAgo;
      }
      return new Date(d.date).getFullYear() === selectedYear;
    });

    const sum  = entries.reduce((s, d) => s + d.count, 0);
    const best = entries.reduce<Day | null>((b, d) => (!b || d.count > b.count ? d : b), null);

    setTotal(sum);
    setBestDay(best && best.count > 0 ? best : null);
  }, [allDays, selectedYear]);

  const grid   = allDays.size ? buildGrid(allDays, selectedYear) : [];
  const labels = monthLabels(grid);

  const bestDateLabel = bestDay
    ? new Date(bestDay.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : null;

  const periodLabel = selectedYear === "last" ? " in the last year" : ` in ${selectedYear}`;

  // Best-day outline color — light enough to stand out on any palette
  const outlineColor = theme === "light" ? "#333" : "#f0f0f0";

  return (
    <section className="w-full font-mono">
      {/* Stats */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1 mb-4">
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {loading ? "Loading…" : error ? "unavailable" : (
            <>
              <span className="font-semibold text-neutral-700 dark:text-neutral-200">
                {total?.toLocaleString()}
              </span>
              {" contributions"}{periodLabel}
            </>
          )}
        </span>

        {bestDay && !loading && (
          <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1.5">
            <span className="inline-block w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: colors[4] }} />
            Best day:{" "}
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">
              {bestDay.count} contributions
            </span>{" "}
            on {bestDateLabel}
          </span>
        )}
      </div>

      {/* Card */}
      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 bg-white dark:bg-neutral-950">
        {error ? (
          <p className="text-sm italic text-neutral-400">GitHub activity unavailable.</p>
        ) : loading ? (
          <Skeleton />
        ) : (
          <>
            <div className="overflow-x-auto overflow-y-visible pb-1">
              <div className="relative" style={{ minWidth: grid.length * STEP + DAY_COL_W + 8 }}>

                {/* Month labels */}
                <div className="relative h-[18px] mb-1" style={{ marginLeft: DAY_COL_W }}>
                  {labels.map(({ label, col }) => (
                    <span
                      key={`${label}-${col}`}
                      className="absolute text-[11px] select-none text-neutral-500 dark:text-neutral-400"
                      style={{ left: col * STEP }}
                    >
                      {label}
                    </span>
                  ))}
                </div>

                {/* Grid */}
                <div className="flex gap-[3px]">
                  <div className="flex flex-col gap-[3px] pt-px shrink-0" style={{ width: DAY_COL_W - GAP }}>
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="h-[13px] text-[10px] leading-[13px] text-right pr-1.5 select-none text-neutral-500 dark:text-neutral-400">
                        {DAY_LABELS[i] ?? ""}
                      </div>
                    ))}
                  </div>

                  {grid.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day, di) => (
                        <div
                          key={di}
                          className="w-[13px] h-[13px] rounded-[3px] transition-transform duration-100 hover:scale-125"
                          style={{
                            backgroundColor: day ? colors[day.level] : "transparent",
                            cursor: day ? "pointer" : "default",
                            outline: bestDay && day?.date === bestDay.date
                              ? `2px solid ${outlineColor}`
                              : "none",
                            outlineOffset: "1px",
                          }}
                          onMouseEnter={(e) => {
                            if (!day) return;
                            const r = e.currentTarget.getBoundingClientRect();
                            setTip({ day, x: r.left + r.width / 2, y: r.top });
                          }}
                          onMouseLeave={() => setTip(null)}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-start gap-1 mt-3">
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mr-1">Less</span>
              {colors.map((c, i) => (
                <div key={i} className="w-[13px] h-[13px] rounded-[3px]" style={{ backgroundColor: c }} />
              ))}
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400 ml-1">More</span>
            </div>

            {/* Year selector */}
            <div className="flex flex-wrap items-center gap-1.5 mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <span className="text-[11px] text-neutral-400 mr-1">Year:</span>
              <YearPill label="Last year" active={selectedYear === "last"} onClick={() => setSelectedYear("last")} />
              {years.map((y) => (
                <YearPill key={y} label={String(y)} active={selectedYear === y} onClick={() => setSelectedYear(y)} />
              ))}
            </div>
          </>
        )}
      </div>

      {tip && <Tooltip day={tip.day} x={tip.x} y={tip.y} />}
    </section>
  );
}

export default memo(GithubActivity);