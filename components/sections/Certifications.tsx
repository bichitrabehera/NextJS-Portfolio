import { certifications } from "@/data/certifications";
import Heading from "../ui/Heading";

export default function Achievements() {
  return (
    <section id="certifications" className="text-foreground py-8">
      <Heading heading="Certifications" />

      <div className="space-y-4">
        {certifications.map((item, index) => (
          <div
            className="border-foreground/10 hover:bg-foreground/5 flex justify-between items-center  space-y-1 rounded border p-4 transition hover:border-neutral-900 cursor-pointer"
            key={index}
          >
            <h3 className="text-base">{item.title}</h3>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
              >
                Verify
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
