"use client";

import { useTheme } from "@/components/layout/ThemeProvider";
import { Moon, Sun } from "lucide-react";

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
      className="text-foreground focus-visible:outline-foreground border-foreground/20 fixed z-999 flex items-center justify-center rounded-full border p-1 transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-95"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
