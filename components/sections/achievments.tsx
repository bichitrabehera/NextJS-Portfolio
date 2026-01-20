"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "Crack-a-thon",
    description:
      "Built an AI web app in 6 hours featuring emotion detection, Spotify recommendations, a chatbot, and mood analytics.",
    date: "Nov 2025",
  },
  {
    title: "Top 5 – HACKABHiGNA",
    description:
      "Developed a predictive lead and conversion optimization agent with ML, automated workflows, and an analytics dashboard.",
    date: "Oct 2025",
  },
  {
    title: "HackVerse",
    description:
      "Won 1st place for an AI/ML solution through strong teamwork and execution.",
    date: "Dec 2025",
  },
  {
    title: "DecodeX",
    description:
      "Placed 3rd in a competitive coding challenge, showcasing problem-solving and coding speed.",
    date: "2025",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="
        max-w-2xl mx-auto
        px-6 py-12
        text-foreground
      "
    >
      {/* Section Header */}
      <div className="space-y-2 mb-12">
        <h2 className="text-lg font-bold">
          Achievements
        </h2>

        <p className="text font-light tracking-wide opacity-60 max-w-xl">
          Selected milestones and recognitions from hackathons and competitions.
        </p>
      </div>

      {/* List */}
      <div className="space-y-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="space-y-1"
          >
            {/* Title */}
            <h3 className="text-base font-light tracking-wide">
              {item.title}
              <span className="opacity-50"> · {item.date}</span>
            </h3>

            {/* Description */}
            <p className="text-sm font-light tracking-wide leading-relaxed opacity-60">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
