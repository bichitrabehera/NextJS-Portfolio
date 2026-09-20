import Image from "next/image";
import type { Project } from "@/data/projects";
import { skillMap } from "@/data/skills";

function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="border-foreground/10 bg-foreground/5 text-foreground inline-flex flex-wrap items-center gap-2 rounded border border-dashed px-2 py-1 text-sm">
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
    <div className="mb-10 space-y-6">
      <div className="group border-foreground/10 bg-foreground/5 text-foreground hover:bg-foreground/10 overflow-hidden rounded-lg border border-dashed p-1.5 transition-colors">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <a href={project.link} target="_blank">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              fill
              loading="eager"
              className="object-cover"
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
            className="border-border/60 bg-foreground/5 text-foreground hover:text-foreground/50 rounded border border-dashed px-2 py-1 text-sm transition-colors"
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
