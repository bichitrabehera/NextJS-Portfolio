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
  },
  {
    id: 2,
    name: "Synapse",
    slug: "synapse",
    image: "/assets/synapse.jpg",
  },
  {
    id: 3,
    name: "Expense Tracker",
    slug: "expense-tracker",
    image: "/assets/clearspend.png",
  },
];

function Project() {
  return (
    <section id="projects" className="mx-auto bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl underline decoration-wavy mb-10">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-40">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover opacity-50 hover:opacity-100"
                />
              </div>

              {/* Footer */}
              <div className="p-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.name}</h3>

                <Link
                  href={`/projects/${project.slug}`}
                  className={
                    "text-sm px-4 py-2 border border-border rounded-lg transition hover:bg-foreground hover:text-background"
                  }
                  onClick={() => console.log("navigate to project:", project.slug)}
                >
                  View More
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
