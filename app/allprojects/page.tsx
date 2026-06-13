import Image from "next/image";
import { projects } from "@/data/projects";
import { skillMap } from "@/data/skills";
import ReturnButton from "@/components/ui/ReturnButton";

export default async function Projects() {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-6 pb-30 bg-neutral-900">
        <ReturnButton />
        <div className="max-w-3xl mx-auto space-y-20">
          {projects &&
            Object.entries(projects).map(([key, project]) => (
              <div key={key} className="space-y-6">
                <div className="rounded-2xl border-white">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    width={800}
                    height={400}
                    className="rounded-2xl opacity-50"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-bold tracking-tight">
                    {project.name}
                  </h2>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
              text-sm font-medium
              px-3 py-1.5
              border border-border/60
              rounded
              bg-white/5
              transition
              hover:bg-foreground hover:text-background
            "
                  >
                    Visit
                  </a>
                </div>

                <p className="text-foreground/70 text-[15px]">
                  {project.description}
                </p>

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
            ))}
        </div>
      </section>
    </>
  );
}
