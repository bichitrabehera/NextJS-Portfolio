"use client";

import Heading from "../ui/Heading";
import { experiences } from "@/data/exp";

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <Heading heading="Experience" />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div key={index} className="h-full">
            <div className="border-foreground/10 hover:bg-foreground/5 flex flex-1 flex-col min-h-45 rounded border p-4 transition hover:border-neutral-600">
              <h3 className="font-medium">{exp.company}</h3>

              <p className="text-foreground/60 mt-1 text-sm">
                {exp.role} · {exp.duration}
              </p>

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
