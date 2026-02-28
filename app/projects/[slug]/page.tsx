import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return notFound();
  }

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-6">
        <Link
          href="/#projects"
          className="inline-flex items-center mb-6 text-sm px-4 py-2 border border-border rounded-lg hover:bg-foreground hover:text-background"
        >
          ← return
        </Link>
        <Image
          src={project.image}
          alt={project.name}
          width={800}
          height={400}
          className="rounded-xl mb-8 border"
          loading="eager"
        />

        <div className="flex items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.name}
          </h1>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
      text-sm px-4 py-2
      border border-border rounded-md
      transition
      hover:bg-foreground hover:text-background
    "
          >
            Visit ↗
          </a>
        </div>

        <p className="text-foreground/70 mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm border border-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
