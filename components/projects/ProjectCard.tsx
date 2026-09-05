import Image from "next/image";
import { GitHubIcon } from "../ui/github-icon";
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
    <div className="space-y-3 mb-10">
      <div className="group overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            fill
            className="object-cover opacity-30 transition-all duration-500 group-hover:opacity-80"
          />

        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg ">{project.name}</h2>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code on GitHub`}
              title="Source code"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <GitHubIcon size={16} brandColor={false} animateOnHover={false} />
            </a>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/60 hover:bg-foreground hover:text-background rounded border bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors"
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
