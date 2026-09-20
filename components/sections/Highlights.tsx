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

      <div className="relative">
        <div className="border-foreground/10 absolute top-0 bottom-0 left-1 border-l border-dashed" />

        <div className="space-y-12">
          {years.map((year) => (
            <div key={year} className="relative">
              <div className="bg-background relative z-10 mb-6 flex items-center gap-4">
                <div className="bg-background border-foreground/30 h-2 w-2 rounded-full border-2" />

                <div>
                  <div className="text-foreground text-sm font-medium">
                    {year}
                  </div>
                </div>
              </div>

              <div className="ml-8 space-y-5">
                {grouped[year].map((highlight, index) => (
                  <div
                    key={`${year}-${index}`}
                    className="text-foreground/70 text-sm leading-6"
                  >
                    {highlight.link ? (
                      <a
                        href={highlight.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground decoration-foreground/50 underline decoration-dashed underline-offset-4"
                      >
                        {highlight.description}
                      </a>
                    ) : (
                      highlight.description
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
