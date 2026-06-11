"use client";

import { memo, useRef } from "react";
import { skills } from "@/data/skills";
import Heading from "../ui/Heading";

function Skills() {
  const ref = useRef(null);

  return (
    <section id="skills" ref={ref} className="py-8">
      <Heading
        heading="Skills"
        // description="Technologies and tools I use regularly to build scalable, performant,
        // and user focused applications."
      />

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <a
              key={skill.name}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex items-center gap-2
              px-4 py-2
              border border-border rounded hover:border-neutral-600
              hover:bg-foreground/5 transition text           "
            >
              <Icon className="text-xl" size={20} />
              <span className="text-sm opacity-75">{skill.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Skills);
