"use client";

import { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="text-foreground/60">Loading calendar...</div>
    ),
  },
);

function GithubActivity() {
  const [total, setTotal] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchData() {
      try {
        const res = await fetch(
          "https://github-contributions-api.jogruber.de/v4/bichitrabehera?y=all",
        );

        if (!res.ok) throw new Error("API failed");

        const data = await res.json();
        if (!data?.contributions) throw new Error("Invalid data");

        const totalCount = data.contributions.reduce(
          (sum: number, item: { count: number }) => sum + (item.count || 0),
          0,
        );

        if (!cancelled) setTotal(totalCount);
      } catch (err) {
        console.warn("GitHub activity unavailable:", err);
        if (!cancelled) setIsError(true);
      }
    }

    fetchData();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-12 px-6 max-w-2xl mx-auto text-foreground">
      <div className="space-y-5">
        <h3 className="text-xl font-bold text-blue-600">GitHub Activity</h3>

        <p className="text-foreground/70">
          Total contributions:{" "}
          <span className="font-semibold">{total ?? "--"}</span>
        </p>

        {!isError ? (
          <div className="mt-6 overflow-x-auto p-2">
            <GitHubCalendar
              username="bichitrabehera"
              blockSize={10}
              blockMargin={5}
              fontSize={12}
              colorScheme={isDark ? "dark" : "light"}
            />
          </div>
        ) : (
          <p className="text-foreground/60 text-sm italic">
            GitHub activity unavailable.
          </p>
        )}
      </div>
    </section>
  );
}

export default memo(GithubActivity);
