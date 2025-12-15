"use client";

import { motion } from "framer-motion";

const achievements = [
    {
        "title": "3rd Place – Crack-a-thon",
        "description": "Secured 3rd place at Crack-a-thon, organized by CrackTheCampus in collaboration with the CSE-AIML Department, AMC Engineering College. Built an AI-powered web dashboard in 6 hours for real-time emotion detection, mood-based Spotify recommendations, an emotion-aware chatbot, and interactive mood analytics.",
        "date": "2025",
        "link": ""
    },
    {
        "title": "Top 5 Finalists – HACKABHiGNA National Hackathon",
        "description": "Selected as Top 5 finalists at HACKABHiGNA, a 24-hour national-level hackathon on Fullstack Marketing Analytics & Agentic Flow Platforms. Developed a Predictive Lead & Conversion Optimization Agent using machine learning, automated segmentation, backend workflows, and a data-driven frontend dashboard.",
        "date": "2025",
        "link": ""
    },
    {
        "title": "1st Place – HackVerse Hackathon",
        "description": "Won 1st place at the HackVerse Hackathon, organized by the AI & ML Department in collaboration with Vayu Aarambh Innovations. Contributed to planning, execution, and the successful completion of the project through strong teamwork, leadership, and innovation..",
        "date": "2025",
        "link": ""
    },
    {
        "title": "3rd Place – DecodeX Coding Game",
        "description": "Secured 3rd place in DecodeX, a competitive coding game organized by the ISE Department of AMC Engineering College, showcasing problem-solving skills and coding efficiency.",
        "date": "2025",
        "link": ""
    }
]

export default function Achievements() {
    return (
        <section
            id="achievements"
            className="pt-10 max-w-3xl mx-auto px-6 text-foreground"
        >
            {/* ===== Title ===== */}
            <h2 className="text-3xl underline decoration-wavy mb-6">Achievements</h2>

            <p className="text-foreground/70 mb-10 max-w-3xl">
                Highlights of milestones, recognitions, and accomplishments throughout my journey.
            </p>

            {/* ===== Achievements Grid ===== */}
            <div className="flex-col gap-6">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="
              relative rounded-xl
              bg-background/60 backdrop-blur-sm
              transition-all duration-300
            "
                    >
                        {/* Date */}
                        {item.date && (
                            <span className="text-sm text-foreground/50">
                                {item.date}
                            </span>
                        )}

                        {/* Title */}
                        <h3 className="text-lg text-blue-500 font-semibold mt-1 mb-2">
                            {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground/70 mb-10 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
