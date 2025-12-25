"use client";

import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Icons
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiDocker,
} from "react-icons/di";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiExpress,
  SiFigma,
  SiRedis,
  SiRender,
  SiVercel,
  SiNpm,
  SiOpenai,
  SiLinux,
} from "react-icons/si";
import { BiCube } from "react-icons/bi";

// ===== Skills with Links =====
const skills = [
  { name: "HTML", icon: DiHtml5, color: "#E44D26", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: DiCss3, color: "#1572B6", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", link: "https://www.typescriptlang.org/docs/" },
  { name: "React", icon: DiReact, color: "#61DAFB", link: "https://react.dev" },
  { name: "React Native", icon: DiReact, color: "#61DAFB", link: "https://reactnative.dev" },
  { name: "Next.js", icon: SiNextdotjs, color: "#999999", link: "https://nextjs.org/docs" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", link: "https://tailwindcss.com/docs" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF", link: "https://www.framer.com/motion/" },
  { name: "Node.js", icon: DiNodejsSmall, color: "#339933", link: "https://nodejs.org/en/docs" },
  { name: "Express", icon: SiExpress, color: "#888888", link: "https://expressjs.com/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", link: "https://www.mongodb.com/docs/" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", link: "https://redis.io/docs/" },
  { name: "Docker", icon: DiDocker, color: "#2496ED", link: "https://docs.docker.com/" },
  { name: "Vercel", icon: SiVercel, color: "#AAAAAA", link: "https://vercel.com/docs" },
  { name: "Render", icon: SiRender, color: "#FF3F3F", link: "https://docs.render.com/" },
  { name: "npm", icon: SiNpm, color: "#CB3837", link: "https://docs.npmjs.com/" },
  { name: "Git", icon: DiGit, color: "#F05032", link: "https://git-scm.com/doc" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E", link: "https://help.figma.com/" },
  { name: "OpenAI", icon: SiOpenai, color: "#10A37F", link: "https://platform.openai.com/docs" },
  { name: "Bash", icon: DiGit, color: "#4EAA25", link: "https://www.gnu.org/software/bash/manual/bash.html" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", link: "https://www.kernel.org/doc/html/latest/" },
  { name: "Hack The Box", icon: BiCube, color: "#9FEF00", link: "https://www.hackthebox.com/" },
];

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="pt-10 max-w-3xl mx-auto px-6 text-foreground"
    >
      <h2 className="text-3xl">/ / Skills</h2>

      <p className="text-foreground/70 my-6 max-w-3xl">
        Technologies and tools I use regularly to build scalable, performant,
        and user-focused applications.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-4 mb-16"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={skill.name}
              className="
                group relative flex items-center justify-center
                w-14 h-14 md:w-16 md:h-16
                rounded-lg border border-border
                bg-background/50
                hover:scale-105 transition-all duration-200
                cursor-pointer
              "
            >
              <Icon
                className="text-2xl md:text-3xl transition-colors duration-200"
                style={{ color: skill.color }}
              />

              {/* Tooltip */}
              <span
                className="
                  absolute -top-8 left-1/2 -translate-x-1/2
                  opacity-0 group-hover:opacity-100
                  text-xs px-2 py-1 rounded
                  bg-foreground text-background
                  transition-all duration-200
                  whitespace-nowrap pointer-events-none
                "
              >
                {skill.name}
              </span>
            </a>
          );
        })}
      </motion.div>
    </section>
  );
}

export default memo(Skills);
