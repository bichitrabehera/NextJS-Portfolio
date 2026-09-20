"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export type Experience = {
  role: string;
  company?: string;
  duration: string;
  description?: string;
};

const MONTHS: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  sept: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const MONTH_NAMES = [
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

function parseMonthYear(raw: string) {
  const trimmed = raw.trim();

  const match = trimmed.match(/([A-Za-z]+)\.?\s+(\d{4})/);

  if (!match) {
    const yearOnly = trimmed.match(/\d{4}/);

    return {
      year: yearOnly ? Number(yearOnly[0]) : new Date().getFullYear(),
      month: 0,
    };
  }

  const raw3 = match[1].toLowerCase().slice(0, 3);

  const raw4 = match[1].toLowerCase().slice(0, 4);

  const month = MONTHS[raw4] ?? MONTHS[raw3] ?? 0;

  return {
    year: Number(match[2]),
    month,
  };
}

function toDecimalYear(year: number, month: number) {
  return year + month / 12;
}

function parseDuration(
  duration: string,
  currentDate: { year: number; month: number },
) {
  const [startRaw, endRaw = "Present"] = duration
    .split(/[–—-]/)
    .map((part) => part.trim());

  const isPresent = /present|now/i.test(endRaw);

  const start = parseMonthYear(startRaw);

  const end = isPresent ? currentDate : parseMonthYear(endRaw);

  return {
    isPresent,
    startDecimal: toDecimalYear(start.year, start.month),
    endDecimal: toDecimalYear(end.year, end.month),
  };
}

const ROW_HEIGHT = 64;
const HEADER_HEIGHT = 42;

const TOP_PADDING = 22;
const BOTTOM_PADDING = 24;

const NORMAL_YEAR_WIDTH = 120;
const FOCUS_YEAR_WIDTH = 440;
const FOCUS_PADDING = 1;

function getFocusYears(parsed: { startDecimal: number; endDecimal: number }[]) {
  if (!parsed.length) return null;

  const dates = parsed.flatMap((item) => [item.startDecimal, item.endDecimal]);

  const min = Math.floor(Math.min(...dates));
  const max = Math.ceil(Math.max(...dates));

  return {
    start: min - FOCUS_PADDING,
    end: max + FOCUS_PADDING,
  };
}

export function ExperienceTimeline({
  experiences,
  startYear,
  endYear,
}: {
  experiences: Experience[];
  startYear?: number;
  endYear?: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const drag = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  });

  const [isDragging, setIsDragging] = useState(false);

  const [hoverDecimal, setHoverDecimal] = useState<number | null>(null);

  // Use the explicit range for the SSR snapshot, then resolve the real date
  // after hydration so `Present` cannot produce different server/client HTML.
  const [currentDate, setCurrentDate] = useState(() => ({
    year: endYear ?? startYear ?? 0,
    month: 0,
  }));

  useEffect(() => {
    const now = new Date();

    setCurrentDate({
      year: now.getFullYear(),
      month: now.getMonth(),
    });
  }, []);

  /* ------------------------------------------------------------------------ */
  /* Parse experiences                                                        */
  /* ------------------------------------------------------------------------ */

  const parsed = useMemo(() => {
    return experiences
      .map((experience) => ({
        ...experience,
        ...parseDuration(experience.duration, currentDate),
      }))
      .sort((a, b) => b.startDecimal - a.startDecimal);
  }, [currentDate, experiences]);

  const hasCustomRange =
    Number.isFinite(startYear) &&
    Number.isFinite(endYear) &&
    (endYear as number) > (startYear as number);

  const focusYears = useMemo(() => {
    if (hasCustomRange) {
      return { start: startYear as number, end: endYear as number };
    }

    return getFocusYears(parsed);
  }, [endYear, hasCustomRange, parsed, startYear]);

  const widthForYear = (year: number) => {
    if (focusYears && year >= focusYears.start && year < focusYears.end) {
      return FOCUS_YEAR_WIDTH;
    }

    return NORMAL_YEAR_WIDTH;
  };

  /* ------------------------------------------------------------------------ */
  /* Current date                                                             */
  /* ------------------------------------------------------------------------ */

  const nowDecimal = toDecimalYear(currentDate.year, currentDate.month);

  /* ------------------------------------------------------------------------ */
  /* Timeline bounds                                                          */
  /* ------------------------------------------------------------------------ */

  const { minYear, maxYear } = useMemo(() => {
    const starts = parsed.map((item) => item.startDecimal);

    const ends = parsed.map((item) => item.endDecimal);

    const min = hasCustomRange
      ? (startYear as number)
      : parsed.length
        ? Math.floor(Math.min(...starts)) - FOCUS_PADDING
        : Math.floor(nowDecimal) - FOCUS_PADDING;

    const max = hasCustomRange
      ? (endYear as number)
      : parsed.length
        ? Math.ceil(Math.max(...ends)) + FOCUS_PADDING
        : Math.ceil(nowDecimal) + FOCUS_PADDING;

    return {
      minYear: min,
      maxYear: max,
    };
  }, [endYear, hasCustomRange, nowDecimal, parsed, startYear]);

  const years = useMemo(() => {
    const result: number[] = [];

    for (let year = minYear; year < maxYear; year++) {
      result.push(year);
    }

    return result;
  }, [minYear, maxYear]);

  /* ------------------------------------------------------------------------ */
  /* Horizontal positioning                                                   */
  /* ------------------------------------------------------------------------ */

  const xForYear = (year: number) => {
    let x = 0;

    for (let currentYear = minYear; currentYear < year; currentYear++) {
      x += widthForYear(currentYear);
    }

    return x;
  };

  const xFor = (decimal: number) => {
    const year = Math.floor(decimal);
    const fraction = decimal - year;

    return (
      xForYear(year) + fraction * widthForYear(year) + widthForYear(year) / 24
    );
  };
  /* ------------------------------------------------------------------------ */
  /* Convert pointer position into year + month                               */
  /* ------------------------------------------------------------------------ */

  const decimalFromPointer = (clientX: number) => {
    const container = scrollRef.current;

    if (!container) return null;

    const rect = container.getBoundingClientRect();

    /*
     * clientX
     *   ↓
     * viewport position
     *
     * + scrollLeft
     *   ↓
     *
     * timeline position
     */

    const timelineX = clientX - rect.left + container.scrollLeft;

    /*
     * Find which year contains
     * this horizontal position.
     */

    for (let year = minYear; year < maxYear; year++) {
      const startX = xForYear(year);

      const yearWidth = widthForYear(year);

      const endX = startX + yearWidth;

      if (timelineX >= startX && timelineX < endX) {
        let month = Math.floor(((timelineX - startX) / yearWidth) * 12);

        month = Math.max(0, Math.min(11, month));

        /*
         * Snap to the center of the month.
         */

        return year + month / 12;
      }
    }

    return null;
  };

  /* ------------------------------------------------------------------------ */
  /* Dragging                                                                 */
  /* ------------------------------------------------------------------------ */

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !scrollRef.current) {
      return;
    }

    drag.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: scrollRef.current.scrollLeft,
    };

    setIsDragging(true);

    /*
     * Hide month hover guide while grabbing.
     */

    setHoverDecimal(null);

    scrollRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (drag.current.active && scrollRef.current) {
      const delta = e.clientX - drag.current.startX;

      scrollRef.current.scrollLeft = drag.current.startScrollLeft - delta;

      return;
    }

    /*
     * Normal pointer movement:
     * show the month guide.
     */

    if (!isDragging) {
      setHoverDecimal(decimalFromPointer(e.clientX));
    }
  };

  const handlePointerLeave = () => {
    if (!drag.current.active) {
      setHoverDecimal(null);
    }
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || !scrollRef.current) {
      return;
    }

    drag.current.active = false;

    setIsDragging(false);

    setHoverDecimal(null);

    if (scrollRef.current.hasPointerCapture(e.pointerId)) {
      scrollRef.current.releasePointerCapture(e.pointerId);
    }
  };

  /* ------------------------------------------------------------------------ */
  /* Dimensions                                                               */
  /* ------------------------------------------------------------------------ */

  const totalWidth = useMemo(() => {
    let width = 0;

    for (let year = minYear; year < maxYear; year++) {
      width += widthForYear(year);
    }

    return width;
  }, [minYear, maxYear]);

  const totalHeight =
    HEADER_HEIGHT + TOP_PADDING + parsed.length * ROW_HEIGHT + BOTTOM_PADDING;

  /* ------------------------------------------------------------------------ */
  /* Show the experience range on first render                                */
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const experienceStart = focusYears?.start ?? minYear;
    const experienceEnd = focusYears?.end ?? maxYear;
    const experienceCenter =
      (xForYear(experienceStart) + xForYear(experienceEnd)) / 2;

    container.scrollLeft = Math.max(
      0,
      experienceCenter - container.clientWidth / 2,
    );
  }, [focusYears, minYear, maxYear, totalWidth]);

  /* ------------------------------------------------------------------------ */
  /* Hover month information                                                  */
  /* ------------------------------------------------------------------------ */

  const hoverInfo = useMemo(() => {
    if (hoverDecimal === null || isDragging) {
      return null;
    }

    const year = Math.floor(hoverDecimal);

    const month = Math.floor((hoverDecimal - year) * 12);

    return {
      year,
      month: Math.max(0, Math.min(11, month)),
    };
  }, [hoverDecimal, isDragging]);

  /* ------------------------------------------------------------------------ */
  /* Render                                                                   */
  /* ------------------------------------------------------------------------ */

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={handlePointerLeave}
        className={`bg-background w-full overflow-x-auto select-none ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } `}
      >
        <div
          className="relative"
          style={{
            width: totalWidth,
            height: totalHeight,
          }}
        >
          {years.map((year) => {
            const yearX = xForYear(year);

            const yearWidth = widthForYear(year);

            return (
              <div key={year}>
                {/* Year */}

                <div
                  className="text-foreground/50 absolute -top-2 flex h-[28px] items-center text-[11px] font-medium tracking-wide"
                  style={{
                    left: yearX + 10,
                  }}
                >
                  {year}
                </div>

                {/* Month numbers */}

                <div
                  className="pointer-events-none absolute top-[20px] flex h-[15px] w-full items-center"
                  style={{
                    left: yearX,
                    width: yearWidth,
                  }}
                >
                  {Array.from({
                    length: 12,
                  }).map((_, month) => (
                    <div
                      key={month}
                      className="text-foreground/40 flex-1 text-center text-[10px] leading-none"
                    >
                      {month + 1}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="border-foreground/20 absolute top-[40px] right-0 left-0 h-px border border-dashed" />

          <div
            className="absolute z-20 w-px bg-blue-400/90"
            style={{
              left: xFor(nowDecimal),
              top: HEADER_HEIGHT,
              bottom: -3,
            }}
          >
            <div className="absolute -top-[40px] -left-[3px] h-3.5 w-1.5 rounded-full bg-blue-400" />

            <span className="absolute top-1 left-2.5 text-[11px] font-medium whitespace-nowrap text-blue-400">
              Now
            </span>
          </div>

          {hoverDecimal !== null && hoverInfo && (
            <>
              {/* Vertical guide */}

              <div
                className="border-foreground/20 pointer-events-none absolute z-10 w-px border border-dashed"
                style={{
                  left: xFor(hoverDecimal),
                  top: HEADER_HEIGHT,
                  bottom: 0,
                }}
              />

              {/* Month tooltip */}

              <div
                className="bg-foreground text-background pointer-events-none absolute z-30 -translate-x-1/2 rounded-md px-2 py-1 text-[12px] font-medium shadow-sm"
                style={{
                  left: xFor(hoverDecimal),
                  top: 5,
                }}
              >
                {MONTH_NAMES[hoverInfo.month]} {hoverInfo.year}
              </div>
            </>
          )}

          {parsed.map((experience, index) => {
            const left = xFor(experience.startDecimal);

            const end = xFor(experience.endDecimal);

            const width = end - left;

            const top = HEADER_HEIGHT + TOP_PADDING + index * ROW_HEIGHT;

            return (
              <div
                key={`${experience.role}-${experience.company ?? index}`}
                className="bg-foreground/[0.055] hover:bg-foreground/[0.09] border-foreground/10 absolute flex flex-col items-start justify-center gap-0.5 overflow-hidden rounded-sm border border-dashed px-2 py-1 transition-colors"
                style={{
                  left,
                  width,
                  top,
                }}
              >
                <span className="text-foreground w-full text-[12px] leading-4 font-medium">
                  {experience.role}
                </span>

                {experience.company && (
                  <span className="text-foreground/40 w-full text-[11px] leading-4">
                    {experience.company}
                  </span>
                )}
              </div>
            );
          })}

          <div className="border-foreground/10 absolute right-0 bottom-0 left-0 h-px border border-dashed" />
        </div>
      </div>

      <div className="from-background via-background/80 pointer-events-none absolute inset-y-0 left-0 z-30 w-12 bg-linear-to-r to-transparent" />
      <div className="from-background via-background/80 pointer-events-none absolute inset-y-0 right-0 z-30 w-12 bg-linear-to-l to-transparent" />
    </div>
  );
}

export const experiences: Experience[] = [
  {
    role: "Web Lead",
    company: "Compassion Crew",
    duration: "Jun 2026 – Present",
  },
  {
    role: "Full Stack Dev",
    company: "SheBuilds Bangalore",
    duration: "Feb 2026 – Present",
  },
  {
    role: "App Developer",
    company: "Vayu Aarambh",
    duration: "Jan 2026 – May 2026",
  },
  {
    role: "Full Stack Dev",
    company: "Nuericorn Syndicate",
    duration: "Sept 2025 – Jan 2026",
  },
];
