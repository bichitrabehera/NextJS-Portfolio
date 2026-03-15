"use client";

import { memo, useRef } from "react";
// import { useInView } from "framer-motion";

// import ThemeToggle from "./ThemeToggle";
import TimeLocation from "@/components/ui/TimeLocation";
import Link from "next/link";
import BuyMeaCoffee from "@/components/ui/BuyMeaCoffee";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  const ref = useRef(null);
  // useInView(ref, { once: true, margin: "-100px" });

  return (
    <header id="top" ref={ref}>
      <nav
        className="
          sticky top-0 z-50
          backdrop-blur-xl
          bg-background/80
        "
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="
              flex  gap-6
              text  justify-center items-center w-fit mx-auto rounded-2xl px-6
              md:gap-4 border border-foreground/10 py-3
            "
        >
          <Link
            href="/contact"
            className="
                text-white/50 active:bg-white hover:text-white
                transition 
              "
          >
            contact
          </Link>

          <Link
            href="/allprojects"
            className="
                text-white/50 hover:text-white
                transition
              "
          >
            projects
          </Link>

          <Link
            href="/resume.pdf"
            download="Bichitra_Behera_Resume.pdf"
            className="text-white/50 hover:text-white transition"
          >
            resume
          </Link>

          <BuyMeaCoffee />
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
