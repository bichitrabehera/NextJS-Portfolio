import { projects } from "@/data/projects";
import { skillMap } from "@/data/skills";
import Heading from "../ui/Heading";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = Object.entries(projects).slice(0, 3);

  return (
    <section id="projects" className="py-8">
      <Heading heading="Projects" />

      <div className="mx-auto max-w-3xl space-y-4">
        {featuredProjects.map(([key, project]) => (
          <a
            key={key}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-foreground/10 hover:bg-foreground/5 block rounded border px-4 py-4 transition-all hover:border-neutral-900"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-col space-y-2">
                <div>
                  <h2 className="text-foreground text-base">{project.name}</h2>
                </div>

                <p className="text-foreground/70 text-sm">
                  {project.description}
                </p>

                <div className="mt-2 inline-flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => {
                    const Icon = skillMap[tech];

                    if (!Icon) return null;

                    return (
                      <div
                        key={tech}
                        title={tech}
                        className="flex items-center justify-center"
                      >
                        <Icon size={16} />
                      </div>
                    );
                  })}
                </div>

                <div className="">
                  <p className="text-foreground/50 text-sm">
                    {project.linkUrl}
                  </p>
                </div>
              </div>

              <FaLink className="text-foreground/40 mt-1 h-4 w-4 shrink-0" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          href="/allprojects"
          className="border-foreground/10 text-foreground/70 hover:bg-foreground/5 hover:text-foreground rounded border px-4 py-2 text-sm transition-all hover:border-neutral-600"
        >
          View all {Object.keys(projects).length} projects →
        </Link>
      </div>
    </section>
  );
}
