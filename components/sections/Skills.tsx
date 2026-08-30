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
              className="border-foreground/10 flex items-center gap-2 rounded border px-4 py-2"
            >
              <Icon size={18} className="text-sm" />
              <span className="text-sm">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
