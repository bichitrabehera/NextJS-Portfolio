"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { skillMap } from "@/data/skills";

import { projects, type Project } from "@/data/projects";
import Heading from "../ui/Heading";
import { HandwrittenArrow, HandwrittenNote } from "../ui/handwritten-note";
import { ArrowRight, CornerDownLeft } from "lucide-react";

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

        <div className="relative mt-10 h-[25rem] overflow-visible md:h-[50rem]">
          {featuredProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setSelectedProject(project)}
              className={`group focus-visible:ring-foreground absolute w-[65%] max-w-3xl text-left transition-transform duration-300 hover:z-50 hover:scale-[1.01] hover:rotate-0 focus-visible:z-50 focus-visible:ring-2 focus-visible:outline-none ${positions[index]}`}
            >
              <div className="border-foreground/20 bg-background/20 overflow-hidden rounded-md border border-dashed p-1 shadow-sm">
                <div className="relative aspect-video overflow-hidden rounded-sm">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    sizes="(max-width: 768px) 90vw, 65vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />

                  <div className="absolute inset-0 flex items-end justify-between bg-black/40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
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
  return (
    <div className="bg-background fixed inset-0 z-[100]">
      <div className="h-full overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-16">
          <button
            type="button"
            onClick={onClose}
            className="text-foreground/50 hover:text-foreground mb-6 flex items-center gap-2 text-sm transition-colors"
          >
            <CornerDownLeft className="h-4 w-4" />
            back
          </button>

          {/* Image */}
          <div className="border-foreground/10 bg-foreground/5 overflow-hidden rounded-lg border border-dashed p-1.5">
            <div className="relative aspect-video overflow-hidden rounded-md">
              <Image
                src={project.image}
                alt={`Screenshot of ${project.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <h2 className="font-display text-2xl tracking-wide md:text-3xl">
              {project.name}
            </h2>

            <div className="flex gap-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border/60 bg-foreground/5 hover:bg-foreground/10 rounded border border-dashed px-2.5 py-1 text-sm"
              >
                Live ↗
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-border/60 bg-foreground/5 hover:bg-foreground/10 rounded border border-dashed px-2.5 py-1 text-sm"
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>

          {/* Case study */}
          {project.caseStudy && (
            <p className="text-foreground/55 mt-6 leading-8">
              {project.caseStudy}
            </p>
          )}

          <div className="mt-8">
            <TechStack techStack={project.techStack} />
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-foreground/50 hover:text-foreground mt-12 flex items-center justify-end gap-2 text-sm"
          >
            <CornerDownLeft className="h-4 w-4" />
            return to projects
          </button>
        </div>
      </div>
    </div>
  );
}

function CaseStudySection({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <section className="max-w-2xl space-y-3">
      <h3 className="text-lg">{title}</h3>

      <p className="text-foreground/50 leading-8">{content}</p>
    </section>
  );
}

function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="border-foreground/10 bg-foreground/5 text-foreground inline-flex flex-wrap items-center gap-2 rounded border border-dashed px-2 py-1">
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
