"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { skillMap } from "@/data/skills";
import { projects, type Project } from "@/data/projects";
import Heading from "../ui/Heading";
import { HandwrittenArrow, HandwrittenNote } from "../ui/handwritten-note";
import { ArrowRight, CornerDownLeft } from "lucide-react";
import Button from "../ui/button";

const positions = [
  "left-[2%] top-[3%] ",
  "right-[2%] top-[23%] ",
  "left-[5%] top-[43%] ",
  "right-[4%] top-[63%] ",
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProjects = Object.values(projects).filter(
    (project) => project.featured,
  );

  return (
    <>
      <section className="py-8">
        <Heading heading="Featured Projects" />
        <div className="flex justify-end py-4">
          <HandwrittenNote>
            Click on a project to view more details <HandwrittenArrow />
          </HandwrittenNote>
        </div>

        <div className="] relative mt-10 grid grid-cols-1 gap-4 overflow-visible md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setSelectedProject(project)}
              className={`group focus-visible:ring-foreground max-w-3xl text-left transition-transform duration-300 hover:z-50 hover:scale-[1.01] hover:rotate-0 focus-visible:z-50 focus-visible:ring-2 focus-visible:outline-none`}
            >
              <div
                className="border-foreground/20 bg-background overflow-hidden rounded-md border p-1 shadow-sm"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-315deg, oklch(27.1% 0 none) 0, oklch(27.1% 0 none) 1px, transparent 1px, transparent 50%)",
                  backgroundSize: "8px 8px",
                  color: "var(--foreground)",
                  opacity: 1,
                }}
              >
                <div className="relative aspect-video overflow-hidden rounded-sm">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 65vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />

                  <div className="absolute inset-0 flex items-end justify-between bg-black/40 p-4 opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium text-white">
                      {project.name}
                    </span>

                    <span className="text-xs text-white/80">
                      View case study
                      <ArrowRight className="ml-1 inline h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
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

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  return (
    <div className="bg-background fixed inset-0 z-[100]">
      <div className="h-full overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-16">
          <Button onClick={onClose} className="mb-6">
            {" "}
            <CornerDownLeft className="h-4 w-4" />
            Back
          </Button>

          <div
            className="border-foreground/10 bg-foreground/5 overflow-hidden rounded-lg border p-1"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-315deg, oklch(37.1% 0 none) 0, oklch(37.1% 0 none) 1px, transparent 1px, transparent 50%)",
              backgroundSize: "8px 8px",
              color: "var(--foreground)",
              opacity: 1,
            }}
          >
            <div className="relative aspect-video overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl tracking-wide md:text-3xl">
              {project.name}
            </h2>

            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/60 bg-foreground/5 hover:bg-foreground/10 rounded border px-2.5 py-1 text-sm"
              >
                Live ↗
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border/60 bg-foreground/5 hover:bg-foreground/10 rounded border px-2.5 py-1 text-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          {project.caseStudy && (
            <p className="text-foreground/55 mt-6 leading-8">
              {project.caseStudy}
            </p>
          )}

          <div className="mt-8">
            <TechStack techStack={project.techStack} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="border-foreground/10 bg-foreground/5 text-foreground inline-flex flex-wrap items-center gap-2 rounded border px-2 py-1">
      {techStack.map((tech) => {
        const Icon = skillMap[tech];

        if (!Icon) return null;

        return (
          <div
            key={tech}
            title={tech}
            className="flex items-center justify-center"
          >
            <Icon className="h-4 w-4" />
          </div>
        );
      })}
    </div>
  );
}
