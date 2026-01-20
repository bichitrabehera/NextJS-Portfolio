"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "README.AI",
    slug: "readmeAI",
    image: "/assets/readmeai.png",
    description:
      "AI-powered tool that connects with GitHub to fetch repositories and generate clean, professional README files instantly.",
  },
  {
    id: 2,
    name: "DataVerse",
    slug: "dataverse",
    image: "/assets/dataverse.jpg",
    description:
      "Official department website featuring event management, registrations, and an admin dashboard for streamlined operations.",
  },
  {
    id: 3,
    name: "DevArena",
    slug: "devarena",
    image: "/assets/devarena.jpg",
    description:
      "Full-stack hackathon discovery platform that aggregates events from multiple platforms into one clean interface.",
  },
  {
    id: 4,
    name: "Synapse",
    slug: "synapse",
    image: "/assets/synapse.jpg",
    description:
      "Workflow-based platform exploring AI-driven automation, integrations, and intelligent task orchestration.",
  },
  {
    id: 5,
    name: "Expense Tracker",
    slug: "expense-tracker",
    image: "/assets/clearspend.png",
    description:
      "Personal finance application for tracking expenses, categorizing spending, and visualizing monthly insights.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function Project() {
  return (
    <section id="projects" className="mx-auto  bg-background text-foreground ">
      <div className="max-w-2xl mx-auto py-12 px-6">
        <h2 className="text-lg mb-6 font-bold">What I Built</h2>

        <p className="text-foreground/70 my-6 max-w-3xl">
          Selected projects showcasing my work in full-stack development, UI
          engineering, and problem-driven product building.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          viewport={{ once: true }}
          className="space-y-10 mt-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="group flex items-start justify-between gap-10"
            >
              <div className="flex gap-4">
                <div>
                  <h3 className="mb-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="
                      inline-flex items-center gap-1
                      text-foreground
                      whitespace-nowrap
                      "
                    >
                      {project.name}
                      <span className="p-2 ml-4 border rounded-full">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </h3>

                  <p className="text text-foreground/60 max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Project);
