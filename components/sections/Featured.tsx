import { projects } from "@/data/projects";
import Heading from "../ui/Heading";
import ProjectCard from "../projects/ProjectCard";

export default function Featured() {
  const featuredProjects = Object.entries(projects).filter(
    ([, project]) => project.featured,
  );

  return (
    <section id="featured" className="py-8">
      <Heading heading="Featured" />

      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-2">
        {featuredProjects.map(([key, project]) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>
    </section>
  );
}
