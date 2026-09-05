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

    const years = Object.keys(grouped).sort(
        (a, b) => Number(b) - Number(a),
    );

    return (
        <section id="highlights" className="py-12">
            <Heading heading="Highlights" />

            <div className="mt-12 space-y-14">
                {years.map((year) => (
                    <div
                        key={year}
                        className="flex gap-6"
                    >
                        {/* Year */}
                        <div className="text-sm text-blue-500">
                            {year}
                        </div>

                        {/* Highlights */}
                        <div className="space-y-10">
                            {grouped[year].map((item) => (
                                <div key={item.title}>
                                    <div className="flex items-baseline gap-3">
                                        <h3 className="text-base font-medium">
                                            {item.title}
                                        </h3>

                                        {item.stats && (
                                            <span className="text-xs text-foreground/40">
                                                {item.stats}
                                            </span>
                                        )}
                                    </div>

                                    {item.organization && (
                                        <p className="mt-1 text-sm text-foreground/40">
                                            {item.organization}
                                        </p>
                                    )}

                                    {item.description && (
                                        <p className="mt-2 max-w-xl text-sm leading-6 text-foreground/55">
                                            {item.description}
                                        </p>
                                    )}

                                    {item.link && (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block text-sm text-foreground/40 underline underline-offset-4 hover:text-foreground decoration-blue-500"
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