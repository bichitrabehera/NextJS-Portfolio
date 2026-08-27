import { achievements, type AchievementKind } from "@/data/achievements";
import Heading from "../ui/Heading";
import { BookOpen, Trophy } from "lucide-react";

const kindMeta: Record<
  AchievementKind,
  { icon: typeof BookOpen; label: string }
> = {
  research: { icon: BookOpen, label: "Published paper" },
  hackathon: { icon: Trophy, label: "Hackathon" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="text-foreground py-8">
      <Heading heading="Achievements" />

      <div className="space-y-4">
        {achievements.map((item, index) => {
          const { icon: Icon, label } = kindMeta[item.kind];

          return (
            <div
              className="border-foreground/10 hover:bg-foreground/5 cursor-pointer space-y-1 rounded border p-4 transition hover:border-neutral-900"
              key={index}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base">{item.title}</h3>

                <div className="flex shrink-0 items-center gap-1.5 pt-1">
                  <Icon size={13} className="text-foreground/40" />
                  <span className="text-foreground/50 text-xs">{label}</span>
                </div>
              </div>

              <p className="text-sm opacity-60">{item.description}</p>

              <div className="flex items-center justify-between pt-1">
                <p className="text-foreground/40 text-xs">{item.date}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    View More
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}