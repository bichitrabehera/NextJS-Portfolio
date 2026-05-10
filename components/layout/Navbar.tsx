"use client";

import { memo, useRef } from "react";
import Link from "next/link";
import { Divider } from "../ui/Divider";

const Navbar = () => {
  const ref = useRef(null);

  return (
    <header id="top" ref={ref}>
      <nav
        className="
          sticky top-0 z-50
          backdrop-blur-xl
          bg-background/80
          max-w-2xl mx-auto mt-6
        "
      >
        <div
          className="
            flex gap-6 md:gap-4
            items-center
            px-6 py-3 hover:shadow-md transition 
          "
        >
          <Link
            href="/"
            className="text-white/50 hover:text-white transition hover:bg-neutral-700 rounded-xl px-2 py-2"
          >
            home
          </Link>
          <Link
            href="/allprojects"
            className="text-white/50 hover:text-white transition hover:bg-neutral-700 rounded-xl px-2 py-2"
          >
            projects
          </Link>
          <Link
            href="/contact"
            className="text-white/50 hover:text-white transition hover:bg-neutral-700 rounded-xl px-2 py-2"
          >
            contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1WjtKJCYhuJ57Fisz69cOJRuGxZvoJORH/view?usp=sharing"
            download="Bichitra_Behera_Resume.pdf"
            className="text-white/50 hover:text-white transition hover:bg-neutral-700 rounded-xl px-2 py-2"
          >
            resume
          </Link>
        </div>

        <div className="px-6">
          <Divider />
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
