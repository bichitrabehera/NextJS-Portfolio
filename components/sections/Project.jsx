"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    name: "DataVerse",
    slug: "dataverse",
    image: "/assets/dataverse.jpg",
    description:
      "Official department website with admin dashboard and event management.",
  },
  {
    id: 2,
    name: "Synapse",
    slug: "synapse",
    image: "/assets/synapse.jpg",
    description:
      "Workflow-driven platform exploring AI-powered automation and integrations.",
  },
  {
    id: 3,
    name: "Expense Tracker",
    slug: "expense-tracker",
    image: "/assets/clearspend.png",
    description:
      "Personal finance tracker for managing expenses and visualizing spending.",
  },
];

/* Animation */
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
    <section
      id="projects"
      className="mx-auto pt-10 bg-background text-foreground"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-lg uppercase mb-6">/ / Projects</h2>

        <p className="text-foreground/70 my-6 max-w-3xl">
          Selected projects showcasing my work in full-stack development, UI
          engineering, and problem-driven product building.
        </p>

        <div
          variants={container}
          initial="hidden"
          viewport={{ once: true }}
          className="space-y-10 mt-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              variants={item}
              className="group flex items-start justify-between gap-10 p-2"
            >
              <div className="flex gap-4">
                <div className="relative w-9 h-9 shrink-0 rounded-md overflow-hidden bg-foreground/10">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-medium group-hover:underline">
                    {project.name}
                  </h3>
                  <p className="text-sm text-foreground/60 max-w-md">
                    {project.description}
                  </p>
                </div>
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="text-foreground/40 transition
                           group-hover:text-foreground
                           group-hover:translate-x-1
                           text-2xl px-2 border
                           "
              >
                ↗
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Project);
