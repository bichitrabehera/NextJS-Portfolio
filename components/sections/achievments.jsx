"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "🥉 Crack-a-thon",
    description:
      "Built an AI web app in 6 hours featuring emotion detection, Spotify recommendations, a chatbot, and mood analytics.",
    date: "Nov 2025",
  },
  {
    title: "🏅 Top 5 – HACKABHiGNA",
    description:
      "Developed a predictive lead & conversion optimization agent with ML, automated workflows, and analytics dashboard.",
    date: "Oct 2025",
  },
  {
    title: "🥇 HackVerse Hackathon",
    description:
      "Won 1st place for an innovative AI/ML solution through strong teamwork and execution.",
    date: "Dec 2025",
  },
  {
    title: "🥉 DecodeX Coding Game",
    description:
      "Placed 3rd in a competitive coding challenge, showcasing problem-solving and coding speed.",
    date: "2025",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-10 max-w-2xl mx-auto px-6 text-foreground"
    >
      <h2 className="text-lg uppercase text-foreground mb-6">/ / Achievements</h2>

      <p className="text-foreground/70 mb-12 max-w-3xl">
        Highlights of milestones and recognitions across hackathons and
        competitions.
      </p>

      <div className="space-y-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="space-y-2"
          >
            {/* DATE */}
            <span className="text-xs text-foreground/50 tracking-wide">
              {item.date}
            </span>

            {/* TITLE */}
            <h3 className="text-base md:text-lg font-medium">{item.title}</h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-foreground/65 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
