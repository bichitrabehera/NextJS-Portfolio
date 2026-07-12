import Heading from "../ui/Heading";
import { experiences } from "@/data/exp";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <Heading heading="Experience" />

      <div className="flex flex-col gap-3">
        {experiences.map((exp, index) => (
          <div key={index} className="h-full">
            <div className="hover:bg-foreground/5 border border-foreground/10 flex min-h-30 flex-1 cursor-pointer flex-col rounded p-4 transition hover:border-neutral-900">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-medium">{exp.company}</h3>
                <p className="text-foreground/60 mt-1 text-sm">
                  {exp.duration}
                </p>
              </div>

              <p className="text-foreground/60 mt-1 text-sm">{exp.role}</p>

              <p className="text-foreground/50 mt-3 text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
