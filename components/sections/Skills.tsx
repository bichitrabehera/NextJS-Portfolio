"use client";

import { memo, useRef } from "react";
import { skills } from "@/data/skills";

function Skills() {
  const ref = useRef(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 max-w-2xl mx-auto px-6 text-foreground"
    >
      <h2 className="text-xl mb-4 font-bold text-white/60 font-mono uppercase">
        Skills
      </h2>

      <p className="text-foreground/70 my-6 max-w-3xl">
        Technologies and tools I use regularly to build scalable, performant,
        and user focused applications.
      </p>

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
              px-3 py-1.5
              border border-border rounded-2xl hover:border-blue-600
              hover:bg-foreground/5 transition text           "
            >
              <Icon className="text-2xl" style={{ color: skill.color }} />
              <span className="text">{skill.name}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Skills);
