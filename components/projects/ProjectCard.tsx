import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import { skillMap } from "@/data/skills";

type ProjectType = NonNullable<Project["type"]>;

const typeLabels: Record<ProjectType, string> = {
  personal: "Personal",
  client: "Client",
  "open-source": "Open Source",
};

function Meta({ project }: { project: Project }) {
  const items = [
    project.type && typeLabels[project.type],
    project.client && `Client: ${project.client}`,
    project.role && `Role: ${project.role}`,
  ].filter((item): item is string => Boolean(item));

  if (items.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {items.map((item) => (
        <span key={item} className="text-foreground/50 text-xs">
          {item}
        </span>
      ))}
    </div>
  );
}

function TechStack({ techStack }: { techStack: string[] }) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      {techStack.map((tech) => {
        const Icon = skillMap[tech];

        if (!Icon) return null;

        return (
          <div key={tech} title={tech} className="flex items-center justify-center">
            <Icon size={16} />
          </div>
        );
      })}
    </div>
  );
}

function FullProjectCard({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <div className="rounded border border-neutral-800 p-2">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          width={800}
          height={400}
          sizes="(max-width: 768px) 100vw, 800px"
          className="rounded opacity-80"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-bold tracking-tight">{project.name}</h2>

        <div className="flex items-center gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} source code on GitHub`}
              title="Source code"
              className="text-foreground/60 hover:text-foreground transition"
            >
              <FaGithub size={16} />
            </a>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/60 hover:bg-foreground hover:text-background rounded border bg-white/5 px-3 py-1.5 text-sm font-medium transition"
          >
            Visit
          </a>
        </div>
      </div>

      <Meta project={project} />

      <p className="text-foreground/70 text-[15px]">{project.description}</p>

      <div className="border-foreground/10 flex w-fit items-center gap-2 rounded border-1 px-2 py-2">
        <TechStack techStack={project.techStack} />
      </div>
    </div>
  );
}

function CompactProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-foreground/10 hover:bg-foreground/5 block rounded border px-4 py-4 transition-all hover:border-neutral-900"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-col space-y-2">
          <h2 className="text-foreground text-base">{project.name}</h2>

          <Meta project={project} />

          <p className="text-foreground/70 text-sm">{project.description}</p>

          <div className="mt-2">
            <TechStack techStack={project.techStack} />
          </div>

          <div>
            <p className="text-foreground/50 text-sm">{project.linkUrl}</p>
          </div>
        </div>

        <FaLink className="text-foreground/40 mt-1 h-4 w-4 shrink-0" />
      </div>
    </a>
  );
}

function ThumbProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-foreground/10 hover:bg-foreground/5 block rounded border px-4 py-4 transition-all hover:border-neutral-900"
    >
      <div className="flex items-start gap-4">
        <div className="hidden shrink-0 sm:block">
          <div className="overflow-hidden rounded border border-neutral-800">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.name}`}
              width={160}
              height={80}
              className="opacity-80"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-col space-y-1">
              <h2 className="text-foreground text-base">{project.name}</h2>

              <Meta project={project} />
            </div>

            <FaLink className="text-foreground/40 mt-1 h-4 w-4 shrink-0" />
          </div>

          <p className="text-foreground/70 text-sm">{project.description}</p>

          <div className="mt-2">
            <TechStack techStack={project.techStack} />
          </div>

          <div>
            <p className="text-foreground/50 text-sm">{project.linkUrl}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ProjectCard({
  project,
  variant = "full",
}: {
  project: Project;
  variant?: "full" | "compact" | "thumb";
}) {
  if (variant === "compact") {
    return <CompactProjectCard project={project} />;
  }

  if (variant === "thumb") {
    return <ThumbProjectCard project={project} />;
  }

  return <FullProjectCard project={project} />;
}