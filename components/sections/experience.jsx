"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Web Developer",
            company: "Nuericorn Syndicate",
            duration: "Sept 2025 – Present",
            description:
                "Designed the foundational REST API architecture and defined MongoDB database workflows for a new SaaS product. Built reusable frontend components using React.js and Tailwind CSS to accelerate development. Led the implementation of functional user interfaces by collaborating closely with designers to translate complex UI/UX wireframes into production-ready features, including Synapse-based workflows.",
            link: ""
        },
        {
            role: "Full Stack Developer",
            company: "Synapse",
            duration: "June 2025 – Present",
            description:
                "Developed and deployed a responsive landing page for Synapse, a digital identity platform that enables users to share all their important links through a single dynamic QR code. Focused on clean UI, performance, and seamless user experience using modern frontend practices.",
            link: "https://synapseeee.vercel.app"
        },
        {
            role: "Open Source Contributor",
            company: "VTUHub.in",
            duration: "Ongoing",
            description:
                "Active open-source contributor to the VTUHub.in repository, focusing on UI improvements and feature enhancements. Collaborated with maintainers to support platform growth and implemented new community-driven features using Synapse, improving scalability and user engagement.",
            link: "https://vtuhub.in"
        }
    ];


    return (
        <section
            id="experience"
            className="pt-10 max-w-3xl mx-auto px-6 text-foreground"
        >
            {/* ===== Title ===== */}
            <h2 className="text-3xl underline decoration-wavy inline underline-offset-8 mb-10">
                Experience
            </h2>

            <p className="text-foreground/70 mb-12 mt-6 max-w-3xl">
                Hands-on experience gained through internships, leadership roles,
                and real-world project development.
            </p>

            {/* ===== Experience List ===== */}
            <div className="space-y-6">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="
    relative
    grid grid-cols-1 md:grid-cols-[150px_1fr]
    gap-4 md:gap-6
    transition-all duration-300
  "
                    >
                        {/* LEFT: Year / Duration */}
                        <div className="md:text-right">
                            <span className="
                            justify-start
      inline-block text-xs px-2 py-1 rounded-md
      bg-foreground/10 text-foreground/70
    ">
                                {item.duration}
                            </span>
                        </div>

                        {/* RIGHT: Content */}
                        <div>
                            <h3 className="text-lg font-semibold">
                                {item.role} <span className="text-blue-900">at</span> {item.company}
                            </h3>

                            <p className="text-foreground/70 text-sm leading-relaxed mt-2">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>

                ))}
            </div>
        </section>
    );
}
