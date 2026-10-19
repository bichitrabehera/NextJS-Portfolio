import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/components/ui/handwritten-note";
import Mountain from "../ui/Mountain";
export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl pt-20">
      <div className="flex justify-end">
        <HandwrittenNote>
          I Love Mountains <HandwrittenArrow />
        </HandwrittenNote>
      </div>
      <div className="h-20">
        <Mountain />
      </div>
    </footer>
  );
}
