"use client";

import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="max-w-3xl mx-auto py-16 border-t border-white/10">
      <div className="flex items-center justify-between text-sm text-white/50">
        <p>© 2026 Bichitra Behera</p>

        <div className="flex gap-4 text-lg">
          <Link
            href="https://github.com/bichitrabehera"
            target="_blank"
            className="hover:text-white transition"
          >
            <BsGithub />
          </Link>

          <Link
            href="https://linkedin.com/in/bichitrabehera"
            target="_blank"
            className="hover:text-white transition"
          >
            <BsLinkedin />
          </Link>

          <Link
            href="mailto:bichitrabehera.345@gmail.com"
            className="hover:text-white transition"
          >
            <MdEmail />
          </Link>
        </div>
      </div>
    </footer>
  );
}
