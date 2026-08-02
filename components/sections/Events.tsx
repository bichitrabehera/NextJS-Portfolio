import Heading from "../ui/Heading";
import { events } from "@/data/events";

export default function Events() {
  return (
    <section id="events" className="py-8">
      <Heading heading="Events" />

      <div className="flex flex-col gap-3">
        {events.map((exp, index) => (
          <div key={index} className="h-full">
            <div className="hover:bg-foreground/5 border-foreground/10 flex min-h-30 flex-1 cursor-pointer flex-col rounded border p-4 transition hover:border-neutral-900">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-medium">{exp.title}</h3>
              </div>

              <p className="text-foreground/50 mt-3 text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
