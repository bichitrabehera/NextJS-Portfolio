import { achievements } from "@/data/achievements";
import Heading from "../ui/Heading";

export default function Achievements() {
  return (
    <section id="achievements" className="text-foreground py-8">
      <Heading heading="Achievements" />

      <div className="space-y-4">
        {achievements.map((item, index) => (
          <div
            className="border-foreground/10 hover:bg-foreground/5 cursor-pointer space-y-1 rounded border p-4 transition hover:border-neutral-900"
            key={index}
          >
            <h3 className="text-base">{item.title}</h3>
            <span className="opacity-50">{item.date}</span>
            <p className="text-sm opacity-60">{item.description}</p>
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
        ))}
      </div>
    </section>
  );
}
