"use client";

import { achievements } from "@/data/achievements";
import Heading from "../ui/Heading";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="
        max-w-3xl mx-auto
        px-6 py-12
        text-foreground
      "
    >
      <Heading heading="Achievements" />

      <div className="space-y-8">
        {achievements.map((item, index) => (
          <div key={index} className="space-y-1">
            <h3 className="text-base tracking-wide">
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
