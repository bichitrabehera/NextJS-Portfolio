import Image from "next/image";
import { projects } from "@/data/projects";
import { skillMap } from "@/data/skills";
import ReturnButton from "@/components/ui/ReturnButton";

export default async function Projects() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-6 pb-30">
        <ReturnButton />
        <div className="mx-auto max-w-3xl space-y-20">
          {projects &&
            Object.entries(projects).map(([key, project]) => (
              <div key={key} className="space-y-6">
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
                  <h2 className="text-xl font-bold tracking-tight">
                    {project.name}
                  </h2>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-border/60 hover:bg-foreground hover:text-background rounded border bg-white/5 px-3 py-1.5 text-sm font-medium transition"
                  >
                    Visit
                  </a>
                </div>

                <p className="text-foreground/70 text-[15px]">
                  {project.description}
                </p>

                <div className="border-foreground/10 flex w-fit items-center gap-2 rounded border-1 px-2 py-2">
                  {project.techStack.map((tech) => {
                    const Icon = skillMap[tech];

                    if (!Icon) return null;

                    return (
                      <div key={tech} title={tech} className="text-foreground">
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
