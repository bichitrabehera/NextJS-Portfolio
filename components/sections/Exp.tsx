"use client";

import Heading from "../ui/Heading";
import { experiences } from "@/data/exp";

export default function Experience() {
  return (
    <section id="experience" className=" py-8">
      <Heading heading="Experience" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, index) => (
          <div key={index} className="h-full">
            <div
              className="
    border border-foreground/10
    rounded
    p-4
    h-50
    flex flex-col hover:border-neutral-600
              hover:bg-foreground/5 transition
  "
            >
              <h3 className="font-medium">{exp.company}</h3>

              <p className="text-sm text-foreground/60 mt-1">
                {exp.role} · {exp.duration}
              </p>

              <p className="text-sm text-foreground/50 mt-3">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
