"use client";

import { memo, useRef } from "react";

import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiDocker,
  DiGithubBadge,
} from "react-icons/di";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiRedis,
  SiRender,
  SiVercel,
  SiNpm,
  SiLinux,
  SiOpenai,
} from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: DiJavascript1,
    color: "#F7DF1E",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    link: "https://www.typescriptlang.org/docs/",
  },
  { name: "React", icon: DiReact, color: "#61DAFB", link: "https://react.dev" },
  {
    name: "React Native",
    icon: DiReact,
    color: "#61DAFB",
    link: "https://reactnative.dev",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#999999",
    link: "https://nextjs.org/docs",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    link: "https://tailwindcss.com/docs",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "#0055FF",
    link: "https://www.framer.com/motion/",
  },
  {
    name: "Node.js",
    icon: DiNodejsSmall,
    color: "#339933",
    link: "https://nodejs.org/en/docs",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "#888888",
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
    link: "https://www.mongodb.com/docs/",
  },
  {
    name: "Redis",
    icon: SiRedis,
    color: "#DC382D",
    link: "https://redis.io/docs/",
  },
  {
    name: "Docker",
    icon: DiDocker,
    color: "#2496ED",
    link: "https://docs.docker.com/",
  },
  {
    name: "Vercel",
    icon: SiVercel,
    color: "#AAAAAA",
    link: "https://vercel.com/docs",
  },
  {
    name: "Render",
    icon: SiRender,
    color: "#FF3F3F",
    link: "https://docs.render.com/",
  },
  {
    name: "npm",
    icon: SiNpm,
    color: "#CB3837",
    link: "https://docs.npmjs.com/",
  },
  {
    name: "Git",
    icon: DiGit,
    color: "#F05032",
    link: "https://git-scm.com/doc",
  },
  {
    name: "Github",
    icon: DiGithubBadge,
    color: "#888888",
    link: "https://git-scm.com/doc",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    color: "#10A37F",
    link: "https://platform.openai.com/docs",
  },
  {
    name: "Bash",
    icon: DiGit,
    color: "#4EAA25",
    link: "https://www.gnu.org/software/bash/manual/bash.html",
  },
  {
    name: "Linux",
    icon: SiLinux,
    color: "#FCC624",
    link: "https://www.kernel.org/doc/html/latest/",
  },
];

function Skills() {
  const ref = useRef(null);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-12 max-w-2xl mx-auto px-6 text-foreground"
    >
      <h2 className="text-xl font-bold text-blue-600">Skills</h2>

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
              border border-border rounded-full hover:border-blue-600
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
