import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl border-t border-white/10 py-16">
      <div className="flex items-center justify-between text-sm text-white/50">
        <p>© 2026 Bichitra Behera</p>

        <div className="flex gap-4 text-lg">
          <Link
            href="https://github.com/bichitrabehera"
            target="_blank"
            className="transition hover:text-white"
          >
            <BsGithub />
          </Link>

          <Link
            href="https://linkedin.com/in/bichitrabehera"
            target="_blank"
            className="transition hover:text-white"
          >
            <BsLinkedin />
          </Link>

          <Link
            href="mailto:bichitrabehera.345@gmail.com"
            className="transition hover:text-white"
          >
            <MdEmail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
