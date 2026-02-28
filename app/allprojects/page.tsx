import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default async function Projects() {
  return (
    <>
      <section className="max-w-2xl mx-auto px-6 py-6 mb-30">
        <Link
          href="/"
          className="inline-flex items-center text-sm px-4 py-2 border border-border rounded-full hover:bg-foreground hover:text-background"
        >
          ← return
        </Link>

        <div className="py-10 ">
          <h1 className="text-2xl font-bold">My Projects</h1>
        </div>

        <div className="max-w-3xl mx-auto space-y-20">
          {projects &&
            Object.entries(projects).map(([key, project]) => (
              <div key={key} className="space-y-6">
                <div className=" border border-dashed rounded-full border-foreground/40">
                  <Image
                    src={project.image}
                    alt={`Screenshot of ${project.name}`}
                    width={800}
                    height={400}
                    className=" border border-border/60 rounded-2xl"
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
              px-4 py-2
              border border-border/60
              rounded-full
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
      </section>
    </>
  );
}
