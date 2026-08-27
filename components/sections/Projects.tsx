import { projects } from "@/data/projects";
import Heading from "../ui/Heading";
import ProjectCard from "../projects/ProjectCard";
import Link from "next/link";

export default function Projects() {
  const featuredProjects = Object.entries(projects)
    .filter(([, project]) => !project.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="py-8">
      <Heading heading="Projects" />

      <div className="mx-auto max-w-3xl space-y-4">
        {featuredProjects.map(([key, project]) => (
          <ProjectCard key={key} project={project} variant="compact" />
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