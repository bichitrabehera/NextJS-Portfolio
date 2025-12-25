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
            <h2 className="text-3xl">
                / / Experience
            </h2>

            <p className="text-foreground/70 mb-12 mt-6 max-w-3xl">
                Hands-on experience gained through internships, leadership roles,
                and real-world project development.
            </p>

            {/* ===== Experience List ===== */}
            <div className="space-y-8">
                {experiences.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="space-y-2"
                    >
                        {/* Role */}
                        <h3 className="text-base md:text-lg font-bold leading-snug text-lime-600">
                            {item.role}
                        </h3>

                        {/* Company + Duration */}
                        <div className="flex flex-wrap items-center gap-x-3 text-sm text-foreground/60">
                            <span className="font-medium text-foreground/80">
                                {item.company}
                            </span>
                            <span className="text-xs">
                                {item.duration}
                            </span>
                        </div>

                        {/* Description */}
                        <p className=" text-foreground/70 leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}
