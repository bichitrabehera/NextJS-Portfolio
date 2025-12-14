"use client";

import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// === Icons ===
import { FaReact, FaNodeJs, FaTerminal } from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiRedis,
  SiClerk,
} from "react-icons/si";

// === Tech → Icon Map ===
const iconMap = {
  React: <FaReact className="text-sky-400 text-xl" />,
  "React Native": <FaReact className="text-sky-400 text-xl" />,
  Nodejs: <FaNodeJs className="text-green-500 text-xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-xl" />,
  Express: <SiExpress className="text-foreground text-xl" />,
  Tailwindcss: <SiTailwindcss className="text-cyan-400 text-xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-xl" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-xl" />,
  Redis: <SiRedis className="text-red-500 text-xl" />,
  Clerk: <SiClerk className="text-purple-400 text-xl" />,
};

// === Project Data ===
const projects = [
  {
    id: 1,
    name: "DataVerse",
    description:
      "A website for the Department of Data Science and Engineering, AMC Engineering College. Includes a modern responsive UI and an admin panel to manage events and registrations.",
    image: "/assets/dataverse.jpg",
    link: "https://dataverseamcec.vercel.app/",
    techStack: ["React", "Nodejs", "Tailwindcss"],
  },
  {
    id: 2,
    name: "Synapse Landing Page",
    description:
      "A landing page for Synapse, a digital identity platform that lets users share all their important links through a single dynamic QR code.",
    image: "/assets/synapse.jpg",
    link: "https://synapseeee.vercel.app",
    techStack: ["Tailwind CSS", "JavaScript", "React"],
  },
  {
    id: 3,
    name: "Expense Tracker App",
    description:
      "A React Native app to securely track income and expenses with email-verified authentication, analytics dashboard, and Redis-powered performance.",
    image: "/assets/clearspend.png",
    link: "https://github.com/bichitrabehera/expense-tracker",
    techStack: ["React Native", "Node.js", "Express", "Clerk", "Redis"],
  },
];

function Project() {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="mx-auto bg-background text-foreground"
    >
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl underline mb-6">Projects</h2>

        <p className="text-foreground/70 max-w-4xl mb-14 text-[16px]">
          Here you’ll find some of my featured projects focused on frontend
          development, clean design, and smooth user experiences.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="
                group
                flex flex-col
                bg-background/80
                border border-border
                rounded-2xl
                overflow-hidden
                shadow-sm
                hover:shadow-[0_0_30px_rgba(255,255,255,0.08)]
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2">
                  {project.name}
                </h3>

                <p className="text-foreground/70 mb-4 text-[15px] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-5 flex flex-wrap gap-3">
                  {project.techStack.map((tech, i) => (
                    <div
                      key={i}
                      className="
                        relative group/tech
                        flex items-center justify-center
                        w-10 h-10
                        rounded-lg
                        border border-border
                        bg-background/60
                        transition-all duration-200
                        hover:scale-110
                      "
                    >
                      {iconMap[tech] ?? (
                        <FaTerminal className="text-foreground text-lg" />
                      )}

                      {/* Tooltip */}
                      <span
                        className="
                          absolute -top-9 left-1/2 -translate-x-1/2
                          opacity-0 group-hover/tech:opacity-100
                          bg-foreground text-background
                          text-xs px-2 py-1 rounded-md
                          shadow
                          transition-all duration-200
                          whitespace-nowrap pointer-events-none
                        "
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View project ${project.name}`}
                  className="
                    mt-auto
                    inline-flex items-center gap-2 text-foreground
                    w-fit
                    px-5 py-2
                    rounded-lg
                    border border-border
                    text-sm
                    transition-all duration-200
                    hover:bg-foreground hover:text-background
                    hover:gap-3
                  "
                >
                  <FaTerminal className="text-foreground" />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default memo(Project);
