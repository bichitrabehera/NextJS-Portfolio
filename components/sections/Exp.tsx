"use client";

import Heading from "../ui/Heading";
import { experiences } from "@/data/exp";

export default function Experience() {
  return (
    <section id="experience" className=" py-8">
      <Heading heading="Experience" />

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="col-span-2 space-y-1">
              <h3 className="font tracking text-foreground">{exp.company}</h3>

              <p className="text-sm font-light tracking-wide opacity-60">
                {exp.role} , {exp.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
