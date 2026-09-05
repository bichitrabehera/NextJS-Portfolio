import Link from "next/link";
import { GitHubLight, LinkedIn, Gmail } from "developer-icons";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl py-20">
      <div className="flex flex-col items-center gap-4 justify-center text-sm text-white/50">
        <p>Designed and developed by <span className="text-white">Bichitra Behera</span>❤️</p>
        <p>Btw i love mountains ⛰️</p>
      </div>
    </footer>
  );
}
