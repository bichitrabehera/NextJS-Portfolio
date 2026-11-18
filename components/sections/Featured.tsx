"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { skillMap } from "@/data/skills";
import { projects, type Project } from "@/data/projects";
import Heading from "../ui/Heading";
import { HandwrittenArrow, HandwrittenNote } from "../ui/handwritten-note";
import { CornerDownLeft } from "lucide-react";
import Button from "../ui/button";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = Object.values(projects);

  const featuredProjects = allProjects.filter((project) => project.featured);

  const otherProjects = allProjects.filter((project) => !project.featured);

  return (
    <>
      <section className="py-8">
        <Heading heading="Featured" />

        <div className="flex justify-end pb-12">
          <HandwrittenNote>
            Click on a project to view more details <HandwrittenArrow />
          </HandwrittenNote>
        </div>

        <div className="mt-6">
          <div className="flex flex-col gap-14">
            {featuredProjects.map((project, index) => (
              <div
                key={project.slug ?? project.name}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                className="group border-foreground/20 focus-visible:ring-foreground max-w-2xl cursor-pointer rounded-xl border border-dashed p-6 text-left transition-colors"
              >
                <div className="bg-foreground/5 overflow-hidden rounded-lg">
                  <div className="relative aspect-video overflow-hidden rounded-sm">
                    <Image
                      src={project.image}
                      alt={`Screenshot of ${project.name}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 65vw"
                      loading={index === 0 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-3 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-medium">{project.name}</h4>
                    </div>
                  </div>

                  <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-start">
          <HandwrittenNote>More experiments on GitHub </HandwrittenNote>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="bg-background/80 fixed inset-0 z-[100] overflow-y-auto p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="flex min-h-full items-center justify-center py-8">
        <div className="border-foreground/20 bg-background w-full max-w-2xl rounded-xl border border-dashed p-5 md:p-6">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <span className="text-muted-foreground text-xs">
              Project / {project.name}
            </span>

            <button
              className="bg-foreground/5 hover:bg-foreground/10 rounded px-3 py-1 text-sm transition-colors flex items-center gap-2"
              onClick={onClose}
            >
              <CornerDownLeft className="h-4 w-4" />
              Back
            </button>
          </div>

          {/* Project Image */}
          <div className="bg-foreground/5 overflow-hidden rounded-lg">
            <div className="relative aspect-video overflow-hidden rounded-sm">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                sizes="(max-width: 768px) 90vw, 640px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-4 pt-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-lg font-medium">{project.name}</h2>

              <div className="flex gap-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-foreground/5 hover:bg-foreground/10 rounded px-3 py-1 text-sm transition-colors"
                >
                  Live ↗
                </a>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-foreground/5 hover:bg-foreground/10 rounded px-3 py-2 text-sm transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>

            {project.caseStudy && (
              <p className="text-foreground/80 text-sm leading-relaxed">
                {project.caseStudy}
              </p>
            )}

            {/* Technology Stack */}
            <div className="border-foreground/10 mt-2 border-t border-dashed pt-5">
              <span className="text-muted-foreground mb-3 block text-xs">
                Built with
              </span>

              <TechStack techStack={project.techStack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="border-foreground/10 bg-foreground/5 text-foreground inline-flex flex-wrap items-center gap-2 rounded border px-4 py-2">
      {techStack.map((tech) => {
        const Icon = skillMap[tech];

        if (!Icon) return null;

        return (
          <div
            key={tech}
            title={tech}
            className="flex items-center justify-center"
          >
            <Icon className="h-5 w-5" />
          </div>
        );
      })}
    </div>
  );
}
