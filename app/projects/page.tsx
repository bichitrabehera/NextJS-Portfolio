import ProjectGallery from "@/components/projects/ProjectGallery";
import ReturnButton from "@/components/ui/ReturnButton";

export default function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-6 pb-30">
      <ReturnButton />
      <ProjectGallery />
    </section>
  );
}