import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

import { projects } from "@/data/projects";
import Heading from "@/components/ui/Heading";

export default function ProjectsPage() {
  const allProjects = Object.values(projects);

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-24">
      <div className="mb-12">
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <p className="text-muted-foreground max-w-xl leading-relaxed">
            A collection of things I've built, experimented with, and
            contributed to across web development, AI, and open source.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-1">
        {allProjects.map((project, index) => (
          <article key={project.slug ?? project.name} className="group border-foreground/20 rounded-xl border-dashed border p-4 transition-colors">
            <div className=" flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-medium">{project.name}</h2>
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.name} GitHub`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="text-muted-foreground mt-2 line-clamp-2 text-sm leading-relaxed">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
