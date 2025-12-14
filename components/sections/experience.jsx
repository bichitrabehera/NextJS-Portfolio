"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            role: "Full Stack Developer",
            company: "Synapse",
            duration: "June 2025 – Present",
            description:
                "Developed and deployed a responsive landing page for Synapse, a digital identity platform that enables users to share all their important links through a single dynamic QR code. Focused on clean UI, performance, and seamless user experience using modern frontend practices.",
            link: "https://synapseeee.vercel.app"
        },
        {
            role: "Web Developer",
            company: "Nuericorn Syndicate",
            duration: "Sept 2025 – Present",
            description:
                "Designed the foundational REST API architecture and defined MongoDB database workflows for a new SaaS product. Built reusable frontend components using React.js and Tailwind CSS to accelerate development. Led the implementation of functional user interfaces by collaborating closely with designers to translate complex UI/UX wireframes into production-ready features, including Synapse-based workflows.",
            link: ""
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
            className="pt-20 max-w-4xl mx-auto px-6 text-foreground"
        >
            {/* ===== Title ===== */}
            <h2 className="text-3xl underline mb-6">Experience</h2>

            <p className="text-foreground/70 mb-12 max-w-3xl">
                Hands-on experience gained through internships, leadership roles,
                and real-world project development.
            </p>

            {/* ===== Experience List ===== */}
            <div className="space-y-6">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -4 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="
              relative rounded-2xl border
              bg-background/80

              p-6
              shadow-sm
              transition-all duration-300
            "
                    >
                        {/* Accent Line */}

                        {/* Duration */}
                        <span className="inline-block mb-3 text-xs px-2 py-1 rounded-md bg-foreground/10 text-foreground/70">
                            {item.duration}
                        </span>

                        {/* Role + Company */}
                        <h3 className="text-lg font-semibold">
                            {item.role}
                        </h3>
                        <p className="text-foreground/60 mb-3">
                            {item.company}
                        </p>

                        {/* Description */}
                        <p className="text-foreground/70 text-sm leading-relaxed">
                            {item.description}
                        </p>



                    </motion.div>
                ))}
            </div>
        </section>
    );
}
