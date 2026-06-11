"use client";

import { memo, useRef } from "react";
import Link from "next/link";
import { Divider } from "../ui/Divider";

const Navbar = () => {
  const ref = useRef(null);

  return (
    <header id="home" ref={ref}>
      <nav
        className="
          sticky top-0 z-50
          backdrop-blur-xl px-6
          bg-neutral-900
          max-w-3xl mx-auto py-8
        "
      >
        <div
          className="
            flex gap-6 md:gap-4
            items-center
             pt-2 hover:shadow-md transition
          "
        >
          <Link href="/" className="text-white/50 hover:text-white transition">
            home
          </Link>
          <Link
            href="/allprojects"
            className="text-white/50 hover:text-white transition"
          >
            projects
          </Link>
          {/*<Link
            href="/contact"
            className="text-white/50 hover:text-white transition"
          >
            contact
          </Link>*/}
          <Link
            href="/ai"
            className="text-white/50 hover:text-white transition"
          >
            ai
          </Link>
          <Link
            href="https://drive.google.com/file/d/1WjtKJCYhuJ57Fisz69cOJRuGxZvoJORH/view?usp=sharing"
            download="Bichitra_Behera_Resume.pdf"
            className="text-white/50 hover:text-white transition"
          >
            resume
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
