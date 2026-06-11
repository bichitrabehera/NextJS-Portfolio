"use client";

import { useEffect, useMemo, useState } from "react";

const CELL = 12;
const GAP = 2;
const STEP = CELL + GAP;
const DAY_COL_W = 30;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const DAY_LABELS: Record<number, string> = {
  1: "Mon",
  3: "Wed",
  5: "Fri",
};

const COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;
  return 4;
}

function buildGrid(dayMap: Map<string, ContributionDay>) {
  const end = new Date();

  const start = new Date(end);
  start.setFullYear(start.getFullYear() - 1);
  start.setDate(start.getDate() + 1);

  const gridStart = new Date(start);
  gridStart.setDate(gridStart.getDate() - gridStart.getDay());

  const weeks: (ContributionDay | null)[][] = [];
  const current = new Date(gridStart);

  while (current <= end) {
    const week: (ContributionDay | null)[] = [];

    for (let i = 0; i < 7; i++) {
      if (current < start || current > end) {
        week.push(null);
      } else {
        const iso = current.toISOString().slice(0, 10);

        week.push(
          dayMap.get(iso) ?? {
            date: iso,
            count: 0,
            level: 0,
          },
        );
      }

      current.setDate(current.getDate() + 1);
    }

    weeks.push(week);
  }

  return weeks;
}

function getMonthLabels(grid: (ContributionDay | null)[][]) {
  const labels: { label: string; col: number }[] = [];
  let previousMonth = -1;

  grid.forEach((week, index) => {
    const first = week.find(Boolean);

    if (!first) return;

    const month = new Date(first.date).getMonth();

    if (month !== previousMonth) {
      labels.push({
        label: MONTHS[month],
        col: index,
      });

      previousMonth = month;
    }
  });

  return labels;
}

export default function GithubHeatmap() {
  const [allDays, setAllDays] = useState<Map<string, ContributionDay>>(
    new Map(),
  );

  useEffect(() => {
    async function fetchData() {
      const username = "bichitrabehera"; // change this

      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      );

      const data = await res.json();

      const map = new Map<string, ContributionDay>();

      data.contributions.forEach((item: { date: string; count: number }) => {
        map.set(item.date, {
          date: item.date,
          count: item.count,
          level: getLevel(item.count),
        });
      });

      setAllDays(map);
    }

    fetchData();
  }, []);

  const grid = useMemo(() => buildGrid(allDays), [allDays]);
  const labels = useMemo(() => getMonthLabels(grid), [grid]);

  return (
    <section className="w-full py-8 overflow-x-auto">
      <div
        className="relative"
        style={{
          minWidth: DAY_COL_W + grid.length * STEP,
        }}
      >
        {/* Months */}
        <div className="relative mb-2 h-4" style={{ marginLeft: DAY_COL_W }}>
          {labels.map(({ label, col }) => (
            <span
              key={`${label}-${col}`}
              className="absolute text-[10px] text-neutral-500"
              style={{ left: col * STEP }}
            >
              {label}
            </span>
          ))}
        </div>

        <div className="flex gap-[3px]">
          {/* Day labels */}
          <div
            className="flex flex-col gap-[3px] text-[10px] text-neutral-500"
            style={{ width: DAY_COL_W }}
          >
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="h-[13px]">
                {DAY_LABELS[index] ?? ""}
              </div>
            ))}
          </div>

          {/* Contribution squares */}
          {grid.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  className="h-[13px] w-[13px] rounded-[2px]"
                  style={{
                    backgroundColor: day ? COLORS[day.level] : "transparent",
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
