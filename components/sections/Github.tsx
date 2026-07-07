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

export default function GithubHeatmap() {
  const [days, setDays] = useState<Map<string, ContributionDay>>(new Map());

  useEffect(() => {
    async function load() {
      const username = "bichitrabehera";

      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      );

      const data = await res.json();

      const map = new Map<string, ContributionDay>();

      data.contributions.forEach((d: { date: string; count: number }) => {
        map.set(d.date, {
          date: d.date,
          count: d.count,
          level: getLevel(d.count),
        });
      });

      setDays(map);
    }

    load();
  }, []);

  const { weeks, months } = useMemo(() => {
    const end = new Date();

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
      if (cursor.getDay() === 0) {
        const week: (ContributionDay | null)[] = [];

        for (let i = 0; i < 7; i++) {
          if (cursor < start || cursor > end) {
            week.push(null);
          } else {
            const iso = cursor.toISOString().slice(0, 10);

            week.push(
              days.get(iso) ?? {
                date: iso,
                count: 0,
                level: 0,
              },
            );

            if (
              cursor.getDate() === 1 &&
              !months.some((m) => m.label === MONTHS[cursor.getMonth()])
            ) {
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
    }

    return { weeks, months };
  }, [days]);

  return (
    <section className="overflow-x-auto py-8">
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
          {weeks.map((week, i) => (
            <div key={i} className="flex flex-col gap-[3px]">
              {week.map((day, j) => (
                <div
                  key={j}
                  title={
                    day
                      ? `${day.count} contributions on ${new Date(
                          day.date,
                        ).toLocaleDateString()}`
                      : ""
                  }
                  className="h-[12px] w-[12px] rounded-[2px] transition-all hover:ring-1 hover:ring-white/30"
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
