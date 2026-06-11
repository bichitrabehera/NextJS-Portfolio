import { projects } from "@/data/projects";
import { skillMap } from "@/data/skills";
import Heading from "../ui/Heading";
import { FaLink } from "react-icons/fa6";

export default function Projects() {
  return (
    <section className="py-8">
      <Heading heading="Projects" />

      <div className="max-w-3xl mx-auto space-y-6">
        {Object.entries(projects).map(([key, project]) => (
          <a
            key={key}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block rounded
              border border-foreground/10
              px-5 py-4
              transition-all
              hover:border-neutral-600
              hover:bg-foreground/5
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-4 flex-1">
                <h2 className="text-base font-medium text-foreground">
                  {project.name}
                </h2>

                <p className="text-sm text-foreground/70">
                  {project.description}
                </p>

                <p className="text-xs font-mono text-foreground/40 break-all">
                  {project.linkUrl}
                </p>

                {/* Tech icons */}
                <div className="flex w-fit  items-center border-1 border-foreground/10 rounded px-2 py-2 gap-2">
                  {project.techStack.map((tech) => {
                    const Icon = skillMap[tech];

                    if (!Icon) return null;

                    return (
                      <div key={tech} title={tech} className="text-foreground ">
                        <Icon size={16} />
                      </div>
                    );
                  })}
                </div>
              </div>

              <FaLink className="h-4 w-4 shrink-0 text-foreground/40" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
