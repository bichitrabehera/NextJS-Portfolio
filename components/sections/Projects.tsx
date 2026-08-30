import { projects } from "@/data/projects";
import Heading from "../ui/Heading";
import ProjectCard from "../projects/ProjectCard";
import Button from "../ui/button";

export default function Projects() {
  const featuredProjects = Object.entries(projects)
    .filter(([, project]) => !project.featured)
    .slice(0, 3);

  return (
    <section id="projects" className="py-8">
      <Heading heading="Projects" />

      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-2">
        {featuredProjects.map(([key, project]) => (
          <ProjectCard key={key} project={project} />
        ))}
      </div>
    </section>
  );
}
