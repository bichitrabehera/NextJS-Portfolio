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

// ===== Skills =====
// ===== Skills =====
const skills = [
  { name: "HTML", icon: DiHtml5, color: "#E44D26" },
  { name: "CSS", icon: DiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: DiJavascript1, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: DiReact, color: "#61DAFB" },
  { name: "React Native", icon: DiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#999999" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "Node.js", icon: DiNodejsSmall, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#888888" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: DiDocker, color: "#2496ED" },
  { name: "Vercel", icon: SiVercel, color: "#AAAAAA" },
  { name: "Render", icon: SiRender, color: "#FF3F3F" },
  { name: "npm", icon: SiNpm, color: "#CB3837" },
  { name: "Git", icon: DiGit, color: "#F05032" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

// ===== Currently Learning =====
const learning = [
  { name: "AI Agents (OpenAI)", icon: SiOpenai, color: "#10A37F" },
  { name: "Bash Scripting", icon: DiGit, color: "#4EAA25" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Hack The Box", icon: DiDocker, color: "#9FEF00" },
];


function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="pt-20 max-w-4xl mx-auto px-6 text-foreground"
    >
      {/* ===== Title ===== */}
      <h2 className="text-3xl underline mb-6">Skills</h2>

      <p className="text-foreground/70 mb-10 max-w-3xl">
        Technologies and tools I use regularly to build scalable, performant,
        and user-focused applications.
      </p>

      {/* ===== Skills Grid ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-6 mb-16"
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="
                group relative flex items-center justify-center
                w-14 h-14 md:w-16 md:h-16
                rounded-lg border border-border
                bg-background/50
                hover:scale-105 transition-all duration-200
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
            </div>
          );
        })}
      </motion.div>

      {/* ===== Currently Learning ===== */}
      <h3 className="text-2xl mb-4">Currently Learning</h3>

      <p className="text-foreground/70 mb-6 max-w-3xl">
        Exploring low-level systems, security, and AI-driven automation while
        sharpening my problem-solving skills.
      </p>

      <div className="flex flex-wrap gap-6 pb-10">
        {learning.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="
                group relative flex items-center justify-center
                w-14 h-14 md:w-16 md:h-16
                rounded-lg border border-border
                bg-background/50
                hover:scale-105 transition-all duration-200
              "
            >
              <Icon
                className="text-2xl md:text-3xl transition-colors duration-200"
                style={{ color: item.color }}
              />

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
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Skills);
