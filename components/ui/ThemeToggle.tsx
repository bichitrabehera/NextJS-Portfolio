"use client";

import { useTheme } from "@/components/layout/ThemeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className=" fixed text-foreground focus-visible:outline-foreground z-999 flex items-center justify-center rounded-full transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-95"
    >
      <svg
        viewBox="0 0 120 120"
        className="size-5 overflow-visible"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="theme-toggle-clip">
            <ellipse cx="60" cy="60" rx="52" ry="52" />
          </clipPath>

          <pattern
            id="theme-toggle-stripes"
            width="17"
            height="17"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="17" height="17" fill="currentColor" />
            <rect width="6" height="17" fill="var(--background)" />
          </pattern>
        </defs>

        <g clipPath="url(#theme-toggle-clip)">
          <rect x="8" y="8" width="104" height="104" fill="var(--background)" />

          <g
            style={{
              transform: isDark ? "translateX(0px)" : "translateX(-52px)",
              transition: "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <rect
              x="60"
              y="8"
              width="52"
              height="104"
              fill="url(#theme-toggle-stripes)"
            />
          </g>
        </g>

        <ellipse
          cx="60"
          cy="60"
          rx="52"
          ry="52"
          stroke="currentColor"
          strokeWidth="8"
        />
      </svg>
    </button>
  );
}
