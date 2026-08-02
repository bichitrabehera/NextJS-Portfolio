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

function getLevel(count: number) {
  if (count === 0) return 0;
  if (count <= 3) return 1;
  if (count <= 6) return 2;
  if (count <= 9) return 3;

  return 4;
}

function formatDate(date: string) {
  const [year, month, day] = date.split("-");

  return `${day}/${month}/${year}`;
}

export default function GithubHeatmap() {
  const [days, setDays] = useState<Map<string, ContributionDay>>(
    () => new Map(),
  );

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

        const data = await res.json();

        const map = new Map<string, ContributionDay>();

        data.contributions.forEach(
          (d: { date: string; count: number }) => {
            map.set(d.date, {
              date: d.date,
              count: d.count,
              level: getLevel(d.count),
            });
          },
        );

        setDays(map);
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
            const monthLabel = MONTHS[cursor.getMonth()];

            if (!months.some((item) => item.label === monthLabel)) {
              months.push({
                label: monthLabel,
                week: weekIndex,
              });
            }
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
    <section id="github" className="overflow-x-auto py-8">
      <div
        className="relative"
        style={{
          width: DAY_COL_W + weeks.length * STEP,
        }}
      >
        {months.map((month) => (
          <div
            key={month.label}
            className="text-foreground/50 absolute -top-6 text-xs"
            style={{
              left: DAY_COL_W + month.week * STEP,
            }}
          >
            {month.label}
          </div>
        ))}

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
                  key={day?.date ?? dayIndex}
                  title={
                    day
                      ? `${day.count} contributions on ${formatDate(day.date)}`
                      : undefined
                  }
                  className="h-[12px] w-[12px] rounded-[2px] transition-all hover:ring-1 hover:ring-white/30"
                  style={{
                    backgroundColor: day
                      ? COLORS[day.level]
                      : "transparent",
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
