"use client";

import { useEffect, useMemo, useState } from "react";

const CELL = 12;
const GAP = 3;
const STEP = CELL + GAP;
const DAY_COL_W = 32;

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

const DAY_LABELS = [
  { index: 1, label: "Mon" },
  { index: 3, label: "Wed" },
  { index: 5, label: "Fri" },
];

const COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionResponse = {
  contributions: {
    date: string;
    count: number;
    level: number;
  }[];
  total: Record<string, number>;
};

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}

export default function GithubHeatmap() {
  const [days, setDays] = useState<Map<string, ContributionDay>>(
    () => new Map(),
  );

  const [totalContributions, setTotalContributions] = useState(0);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    setEndDate(new Date());

    async function load() {
      try {
        const username = "bichitrabehera";

        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch contributions");
        }

        const data: ContributionResponse = await res.json();

        console.log("GitHub contributions data:", data);

        const map = new Map<string, ContributionDay>();

        data.contributions.forEach((d) => {
          map.set(d.date, {
            date: d.date,
            count: d.count,
            level: d.level,
          });
        });

        setDays(map);

        // data.total is an object like:
        // { "2025": 123, "2026": 456 }
        const total = Object.values(data.total).reduce(
          (sum, value) => sum + Number(value),
          0,
        );

        setTotalContributions(total);
      } catch (error) {
        console.error("Failed to load GitHub contributions:", error);
      }
    }

    load();
  }, []);

  const { weeks, months } = useMemo(() => {
    if (!endDate) {
      return {
        weeks: [],
        months: [],
      };
    }

    const end = new Date(endDate);

    const start = new Date(end);
    start.setFullYear(start.getFullYear() - 1);
    start.setDate(start.getDate() + 1);

    const gridStart = new Date(start);

    // Start from Sunday so the columns align correctly.
    gridStart.setDate(gridStart.getDate() - gridStart.getDay());

    const weeks: (ContributionDay | null)[][] = [];
    const months: { label: string; week: number }[] = [];

    const cursor = new Date(gridStart);

    let weekIndex = 0;

    while (cursor <= end) {
      const week: (ContributionDay | null)[] = [];

      for (let i = 0; i < 7; i++) {
        if (cursor < start || cursor > end) {
          week.push(null);
        } else {
          const year = cursor.getFullYear();
          const month = String(cursor.getMonth() + 1).padStart(2, "0");
          const day = String(cursor.getDate()).padStart(2, "0");

          const iso = `${year}-${month}-${day}`;

          week.push(
            days.get(iso) ?? {
              date: iso,
              count: 0,
              level: 0,
            },
          );

          if (cursor.getDate() === 1) {
            months.push({
              label: MONTHS[cursor.getMonth()],
              week: weekIndex,
            });
          }
        }

        cursor.setDate(cursor.getDate() + 1);
      }

      weeks.push(week);
      weekIndex++;
    }

    return {
      weeks,
      months,
    };
  }, [days, endDate]);

  if (!endDate) {
    return null;
  }

  return (
    <>
      <section id="github" className="overflow-x-auto pb-8 pt-8">
        <div
          className="relative"
          style={{
            width: DAY_COL_W + weeks.length * STEP,
          }}
        >
          {/* Month labels */}
          {months.map((month, index) => (
            <div
              key={`${month.label}-${index}`}
              className="text-foreground/50 absolute -top-6 text-xs"
              style={{
                left: DAY_COL_W + month.week * STEP,
              }}
            >
              {month.label}
            </div>
          ))}

          {/* Day labels */}
          {DAY_LABELS.map((day) => (
            <div
              key={day.label}
              className="text-foreground/50 absolute left-0 flex h-[12px] w-[28px] items-center justify-end text-xs"
              style={{
                top: day.index * STEP,
              }}
            >
              {day.label}
            </div>
          ))}

          {/* Contribution grid */}
          <div
            className="flex gap-[3px]"
            style={{
              marginLeft: DAY_COL_W,
            }}
          >
            {weeks.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="flex flex-col gap-[3px]"
              >
                {week.map((day, dayIndex) => (
                  <div
                    key={day?.date ?? `${weekIndex}-${dayIndex}`}
                    title={
                      day
                        ? `${day.count} contributions on ${formatDate(day.date)}`
                        : undefined
                    }
                    className="h-[12px] w-[12px] rounded-[2px] transition-colors hover:ring-1 hover:ring-white/30"
                    style={{
                      backgroundColor: day
                        ? COLORS[day.level] ?? COLORS[0]
                        : "transparent",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex overflow-hidden">
        <p className=" text-sm">
          Total Contributions: {totalContributions}
        </p>
      </div>
    </>
  );
}