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

function Project() {
  return (
    <section id="projects" className="mx-auto bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl mb-6">/ / Projects</h2>
        <p className="text-foreground/70 my-6 max-w-3xl">
          Selected projects showcasing my work in full-stack development, UI engineering, and problem-driven product building.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-border rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-80"
                />
              </div>

              {/* Footer */}
              <div className="p-3 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-foreground/60 mt-1 leading-snug line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    text-sm px-4 py-2
                    border border-border rounded-lg
                    transition
                    hover:bg-foreground hover:text-background
                    shrink-0
                  "
                  onClick={() =>
                    console.log("navigate to project:", project.slug)
                  }
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Project);
