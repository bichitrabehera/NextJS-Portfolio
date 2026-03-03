"use client";

import { memo, useRef } from "react";
import { skills } from "@/data/skills";
import Heading from "../ui/Heading";

function Skills() {
  const ref = useRef(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 max-w-2xl mx-auto px-6 text-foreground"
    >
      <Heading
        heading="Skills"
        description="Technologies and tools I use regularly to build scalable, performant,
        and user focused applications."
      />

      <div className="flex flex-wrap gap-6">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2
              px-4 py-2
              border border-border rounded hover:border-blue-600
              hover:bg-foreground/5 transition text           "
            >
              <Icon className="text-xl" style={{ color: skill.color }} />
              <span className="text opacity-75">{skill.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Skills);
