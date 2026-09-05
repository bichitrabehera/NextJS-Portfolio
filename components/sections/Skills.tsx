import { skillStacks } from "@/data/skills";
import Heading from "../ui/Heading";

function Skills() {
  return (
    <section id="skills" className="py-8">
      <Heading heading="Skills" />

      <div className="mt-8 space-y-8">
        {skillStacks.map((stack, index) => (
          <div key={stack.category}>
            <div className="mb-3 flex items-center gap-3">
              

              <h3
                className="text font-medium text-foreground underline underline-offset-4 decoration-blue-500"

              >
                {stack.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {stack.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors text-foreground`}
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