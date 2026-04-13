"use client";

import { memo, useRef } from "react";
import Link from "next/link";
import BuyMeaCoffee from "@/components/ui/BuyMeaCoffee";
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
            px-6 py-3
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
          <Link
            href="/contact"
            className="text-white/50 hover:text-white transition"
          >
            contact
          </Link>
          <Link
            href="/resume.pdf"
            download="Bichitra_Behera_Resume.pdf"
            className="text-white/50 hover:text-white transition"
          >
            resume
          </Link>
        </div>

        <Divider />
      </nav>
    </header>
  );
};

export default memo(Navbar);
