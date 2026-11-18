import { experiences, ExperienceTimeline } from "../ui/ExperienceTimeline";
import { HandwrittenArrow, HandwrittenNote } from "../ui/handwritten-note";
import Heading from "../ui/Heading";

function Exp() {
  return (
    <section id="experience" className="py-8">
      <Heading heading="Experience" />
      <div className="flex justify-end pb-20">
        <HandwrittenNote>
          Hold and scroll <HandwrittenArrow />
        </HandwrittenNote>
      </div>
      <div className="border-foreground/20 border-dashed rounded-lg border-y py-2">
        <ExperienceTimeline
        startYear={2025}
        endYear={2028}
        experiences={experiences}
      />
      </div>
    </section>
  );
}

export default Exp;
