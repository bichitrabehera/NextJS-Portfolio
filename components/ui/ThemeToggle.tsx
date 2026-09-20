"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/components/layout/ThemeProvider";

const options: { value: Theme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light theme", icon: Sun },
  { value: "dark", label: "Dark theme", icon: Moon },
  { value: "system", label: "Use system theme", icon: Monitor },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      aria-label="Color theme"
      className="border-foreground/10 bg-background fixed z-999 inline-flex items-center gap-0.5 rounded-full border border-dashed p-1"
      role="group"
    >
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          type="button"
          aria-label={label}
          aria-pressed={theme === value}
          title={label}
          onClick={() => setTheme(value)}
          className={`flex size-7 items-center justify-center rounded-full transition-colors ${
            theme === value
              ? "bg-background text-foreground border-dashed border-foreground/10 border shadow-sm"
              : "text-foreground/45 hover:text-foreground"
          }`}
        >
          <Icon aria-hidden="true" size={14} strokeWidth={1.8} />
        </button>
      ))}
    </div>
  );
}
