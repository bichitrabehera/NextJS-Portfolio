import { highlights } from "@/data/highlights";
import Heading from "../ui/Heading";

function Highlights() {
  const grouped = highlights.reduce<Record<string, typeof highlights>>(
    (acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }

      acc[item.date].push(item);

      return acc;
    },
    {},
  );

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="highlights" className="py-8">
      <Heading heading="Highlights" />

      <div className="space-y-6">
        {years.map((year) => (
          <div key={year} className="flex flex-col space-y-6">
            <div className="text-neutral-200">{year}</div>

            <div className="space-y-10">
              {grouped[year].map((item) => (
                <div key={item.title}>
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-base font-medium">{item.title}</h3>

                    {item.stats && (
                      <span className="text-foreground/40 text-xs">
                        {item.stats}
                      </span>
                    )}
                  </div>

                  {item.organization && (
                    <p className="text-foreground/40 mt-1 text-sm">
                      {item.organization}
                    </p>
                  )}

                  {item.description && (
                    <p className="text-foreground/55 mt-2 text-sm leading-6">
                      {item.description}
                    </p>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-foreground/50 mt-2 inline-block rounded border border-neutral-100/20 px-2 py-1 text-sm shadow"
                    >
                      Read more
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
