import { certifications } from "@/data/certifications";
import Heading from "../ui/Heading";

export default function Achievements() {
  return (
    <section id="certifications" className="text-foreground py-6">
      <Heading heading="Certifications" />

      <div className="space-y-4">
        {certifications.map((item, index) => (
          <div
            className="border-foreground/10 flex justify-between items-center  space-y-1 rounded border p-4"
            key={index}
          >
            <h3 className="text-base">{item.title}</h3>

            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground text-sm underline underline-offset-4 transition-colors"
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
