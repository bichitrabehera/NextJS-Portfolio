"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "App Developer Intern",
      company: "Vayu Aarambh Innovations",
      duration: "Jan 2026 – Present",
      // description:
      // "Contributing to production-grade applications with a focus on UI improvements, feature development, and scalable workflows.",
    },
    {
      role: "Web Developer Intern",
      company: "Nuericorn Syndicate",
      duration: "Sept 2025 – Present",
      description:
        "Built REST APIs, MongoDB workflows, and reusable React + Tailwind components for a SaaS platform.",
    },
    {
      role: "Full Stack Developer",
      company: "Synapse",
      duration: "June 2025 – Present",
      description:
        "Developed and deployed a high-performance landing page focused on UX, performance, and modern frontend practices.",
    },
  ];

  return (
    <section
      id="experience"
      className="pt-10 max-w-2xl mx-auto px-6 text-foreground"
    >
      <h2 className="text-lg uppercase mb-4">/ / Work Experience</h2>

      <p className="text-foreground/70 mb-12 max-w-3xl">
        Hands-on experience gained through internships and real-world projects.
      </p>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 items-start">
            <p className="text-sm text-foreground/60">{exp.duration}</p>

            <div className="col-span-2">
              <h3 className="font-foreground">
                {exp.role} <span className="text-foreground/50">at </span>
                {exp.company}
              </h3>

              {exp.description && (
                <p className="mt-2 text-sm text-foreground/50">
                  {exp.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
