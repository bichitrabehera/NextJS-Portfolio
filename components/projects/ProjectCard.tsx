import Image from "next/image";
import type { Project } from "@/data/projects";
import { skillMap } from "@/data/skills";

function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2">
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

function FullProjectCard({ project }: { project: Project }) {
  return (
    <div className="mb-10 space-y-3">
      <div className="group overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden rounded">
          <a href={project.link} target="_blank">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              fill
              className="object-cover grayscale-100 opacity-20 hover:opacity-80 hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg">{project.name}</h2>

        <div className="flex items-center gap-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/60 rounded border bg-white/5 px-2 py-1 text-sm text-white transition-colors hover:text-neutral-500"
          >
            preview
          </a>
        </div>
      </div>

      <p className="text-foreground/40 text-[15px]">{project.description}</p>

      <div className="border-foreground/10 flex w-fit items-center gap-2">
        <TechStack techStack={project.techStack} />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return <FullProjectCard project={project} />;
}
