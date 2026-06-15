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

      <div className="space-y-4">
        {achievements.map((item, index) => (
          <div
            className="space-y-1 border border-foreground/10 rounded p-4 hover:border-neutral-600 transition hover:bg-foreground/5"
            key={index}
          >
            <h3 className="text-base">{item.title}</h3>
            <span className="opacity-50">{item.date}</span>
            <p className="text-sm opacity-60">{item.description}</p>
            {item.link && (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:underline">
                View More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
