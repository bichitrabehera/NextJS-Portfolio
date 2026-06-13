"use client";

import { achievements } from "@/data/achievements";
import Heading from "../ui/Heading";
import { Divider } from "../ui/Divider";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="
        py-8
        text-foreground
      "
    >
      <Heading heading="Achievements" />

      <div className="space-y-8">
        {achievements.map((item, index) => (
          <div key={index} className="space-y-1 border border-foreground/10 rounded p-4 hover:border-neutral-600 transition hover:bg-foreground/5">
            <h3 className="text-base">
              {item.title}
              <span className="opacity-50"> · {item.date}</span>
            </h3>

            <p className="text-sm opacity-60">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
