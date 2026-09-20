import { skillStacks } from "@/data/skills";
import Heading from "../ui/Heading";

function Skills() {
  return (
    <section id="skills" className="py-8">
      <Heading heading="Skills" />

      <div className="space-y-6">
        {skillStacks.map((stack, index) => (
          <div key={stack.category}>
            <div className="mb-6 flex items-center gap-3">
              <h3 className="text text-foreground font-medium">
                {stack.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 space-y-1">
              {stack.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className={`border-foreground/10 border-dashed bg-foreground/5 text-foreground flex h-9 items-center gap-2 rounded border px-2 py-1 text-sm transition-colors`}
                  >
                    <Icon size={18} />

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
