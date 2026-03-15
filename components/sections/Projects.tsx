"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
// import { ArrowUpRight } from "lucide-react";
import Heading from "../ui/Heading";
import { projects } from "@/data/projects";

function Project() {
  return (
    <section id="projects" className="mx-auto  bg-background text-foreground ">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <Heading
          heading="What I Built"
          description="Selected projects showcasing my work in full-stack development, UI
          engineering, and problem-driven product building."
        />

        <div className="space-y-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {projects &&
            Object.entries(projects).slice(0,4).map(([key, project]) => (
              <div key={key} className="space-y-6">
                <div className=" border h-50 border-dashed rounded border-foreground/40">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    fill
                    className=" border border-border/60 rounded opacity-65"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-mono font-bold tracking-tight">
                    {project.name}
                  </h2>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                         text-sm font-medium
                         px-4 py-2
                         border border-border/60
                         rounded
                         bg-white/5
                         transition
                         hover:bg-foreground hover:text-background
                       "
                  >
                    Visit ↗
                  </a>
                </div>

                <p className="text-foreground/70 leading-relaxed text-[15px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="
                           px-3 py-1
                           text-xs sm:text-sm
                           rounded
                           border border-border/60
                           bg-white/5
                           text-foreground/70
                         "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/allprojects"
            className="border px-4 py-2 rounded font-medium transition hover:bg-foreground hover:text-background"
          >
            View More →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default memo(Project);
