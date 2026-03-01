"use client";

import { achievements } from "@/data/achievements";

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
      <div className="space-y-2 mb-12">
        <h2 className="text-xl mb-4 font-bold text-white/60 font-mono uppercase">Achievements</h2>

        <p className="text font-light tracking-wide opacity-60 max-w-xl">
          Selected milestones and recognitions from hackathons and competitions.
        </p>
      </div>

      <div className="space-y-8">
        {achievements.map((item, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-base font-light tracking-wide">
              {item.title}
              <span className="opacity-50"> · {item.date}</span>
            </h3>

            <p className="text-sm font-light tracking-wide leading-relaxed opacity-60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
