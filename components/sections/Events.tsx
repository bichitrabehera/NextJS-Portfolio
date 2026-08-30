import Heading from "../ui/Heading";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section id="events" className="py-6">
      <Heading heading="Events" />

      <div className="grid gap-3 sm:grid-cols-2">
        {events.map((exp, index) => (
          <div
            key={index}
            className="border-foreground/10 flex flex-col rounded border p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-medium">{exp.title}</h3>
              {exp.stats && (
                <p className="text-foreground/40 text-xs whitespace-nowrap">
                  {exp.stats}
                </p>
              )}
            </div>

            <p className="text-foreground/50 mt-1 text-xs">{exp.organization}</p>

            <p className="text-foreground/50 mt-3 text-sm">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
