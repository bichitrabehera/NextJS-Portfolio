import { memo } from "react";
import { skillStacks } from "@/data/skills";
import Heading from "../ui/Heading";

function Skills() {
  return (
    <section id="skills" className="py-8">
      <Heading heading="Skills" />

      <div className="flex flex-wrap gap-3">
        {skillStacks.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="border-foreground/10 hover:bg-foreground/5 flex cursor-pointer items-center gap-2 border px-4 py-2 transition hover:border-neutral-900"
            >
              <Icon size={24} className="text-xl" />
              <span className="text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Skills);
