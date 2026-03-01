"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Web Team Lead/ Full Stack Dev",
      company: "SheBuilds Bangalore",
      duration: "Feb 2026 – Present",
    },
    {
      role: "Web Developer Intern",
      company: "Nuericorn Syndicate",
      duration: "Sept 2025 – Present",
    },
  ];

  return (
    <section
      id="experience"
      className="py-12 max-w-2xl mx-auto px-6 text-foreground "
    >
      <h2 className="text-xl mb-4 font-bold text-white/60 font-mono uppercase">Experience</h2>

      <p className="text-foreground/70 mb-12 max-w-3xl">
        Hands-on experience gained through internships and real-world projects.
      </p>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="col-span-2 space-y-1">
              <h3 className="font-light tracking-wide text-foreground">
                {exp.company}
              </h3>

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
