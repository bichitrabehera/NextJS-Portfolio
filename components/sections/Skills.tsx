import { skillStacks } from "@/data/skills";
import type { ElementType } from "react";
import Heading from "../ui/Heading";

function Skills() {
  return (
    <section id="skills" className="py-8">
      <Heading heading="Skills" />

      <div className="mt-6 space-y-6">
        {skillStacks.map((stack, index) => (
          <div key={stack.category}>
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text-foreground font-medium">{stack.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2 space-y-1">
              {stack.skills.map((skill) => {
                const Icon = skill.icon as ElementType<{ size?: number }> | null;

                return (
                  <div
                    key={skill.name}
                    className={`border-foreground/20 bg-foreground/5 text-foreground flex h-9 items-center gap-2 rounded border border-dashed px-4 py-1 text-sm transition-colors`}
                  >
                    {Icon ? <Icon size={18} /> : null}

                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
