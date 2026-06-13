import { projects } from "@/data/projects";
import { skillMap } from "@/data/skills";
import Heading from "../ui/Heading";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = Object.entries(projects).slice(0, 3);

  return (
    <section className="py-8">
      <Heading heading="Projects" />

      <div className="max-w-3xl mx-auto space-y-6">
        {featuredProjects.map(([key, project]) => (
          <a
            key={key}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              block rounded
              border border-foreground/10
              px-4 py-4
              transition-all
              hover:border-neutral-600
              hover:bg-foreground/5
            "
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-col space-y-4">
                <div>
                  <h2 className="text-base text-foreground">{project.name}</h2>
                </div>

                <p className="text-sm text-foreground/70">
                  {project.description}
                </p>

                <div
                  className="mt-2 inline-flex flex-wrap items-center gap-2 
                          "
                >
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
                  <p className="text-sm text-foreground/50 ">
                    {project.linkUrl}
                  </p>
                </div>
              </div>

              <FaLink className="mt-1 h-4 w-4 shrink-0 text-foreground/40" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-end">
        <Link
          href="/allprojects"
          className="
            rounded
            border border-foreground/10
            px-4 py-2
            text-sm text-foreground/70
            transition-all
            hover:border-neutral-600
            hover:bg-foreground/5
            hover:text-foreground
          "
        >
          View all {Object.keys(projects).length} projects →
        </Link>
      </div>
    </section>
  );
}
