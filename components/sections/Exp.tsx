import Heading from "../ui/Heading";
import { experiences } from "@/data/exp";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <Heading heading="Experience" />

      <div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex items-center justify-between gap-3 border-foreground/10 py-4`}
          >
            <div>
              <h3 className="font-medium">{exp.company}</h3>
              <p className="text-foreground/60 text-sm">{exp.role}</p>
            </div>

            <p className="text-foreground/40 text-sm whitespace-nowrap">
              {exp.duration}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
