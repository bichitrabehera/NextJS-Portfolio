"use client";

import { useState } from "react";
import type { KeyboardEvent } from "react";
import { projects, type ProjectType } from "@/data/projects";
import { cn } from "@/lib/utils";
import ProjectCard from "./ProjectCard";

type Filter = "all" | ProjectType;

const filters: Array<{ id: Filter; label: string }> = [
  { id: "all", label: "All" },
  { id: "personal", label: "Personal" },
  { id: "client", label: "Client" },
  { id: "open-source", label: "Open Source" },
];

export default function ProjectGallery() {
  const [active, setActive] = useState<Filter>("all");

  const visibleProjects = Object.entries(projects).filter(
    ([, project]) => active === "all" || project.type === active,
  );

  const handleKeyDown =
    (index: number) => (event: KeyboardEvent<HTMLButtonElement>) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + filters.length) % filters.length;
      const next = filters[nextIndex].id;

      setActive(next);
      document.getElementById(`project-tab-${next}`)?.focus();
    };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter projects"
        className="flex flex-wrap gap-2"
      >
        {filters.map((filter, index) => {
          const selected = active === filter.id;

          return (
            <button
              key={filter.id}
              id={`project-tab-${filter.id}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="project-tab-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(filter.id)}
              onKeyDown={handleKeyDown(index)}
              className={cn(
                "border-foreground/10 text-foreground/70 rounded border px-3 py-1.5 text-sm transition-all hover:border-neutral-600 hover:bg-foreground/5 hover:text-foreground",
                selected && "bg-foreground text-background hover:border-foreground",
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div
        id="project-tab-panel"
        role="tabpanel"
        aria-labelledby={`project-tab-${active}`}
        className="mt-10 space-y-20"
      >
        {visibleProjects.map(([key, project]) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>

      {visibleProjects.length === 0 && (
        <p className="text-foreground/50 mt-10 text-sm">
          {active === "client"
            ? "No client projects to display yet."
            : "No projects to display in this category yet."}
        </p>
      )}
    </div>
  );
}