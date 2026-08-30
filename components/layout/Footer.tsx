import Link from "next/link";
import { GitHubLight, LinkedIn, Gmail } from "developer-icons";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl py-16">
      <div className="flex items-center justify-between text-sm text-white/50">
        <p>Made by Bichitra Behera</p>

        <div className="flex gap-4 text-lg">
          <Link
            href="https://github.com/bichitrabehera"
            target="_blank"
            className="transition-colors hover:text-white"
          >
            <GitHubLight className="h-5 w-5" />
          </Link>

          <Link
            href="https://linkedin.com/in/bichitrabehera"
            target="_blank"
            className="transition-colors hover:text-white"
          >
            <LinkedIn className="h-5 w-5" />
          </Link>

          <Link
            href="mailto:bichitrabehera.345@gmail.com"
            className="transition-colors hover:text-white"
            aria-label="Email"
          >
            <Gmail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
