"use client";

import { memo, useRef } from "react";
// import { useInView } from "framer-motion";

// import ThemeToggle from "./ThemeToggle";
import TimeLocation from "@/components/ui/TimeLocation";
import Link from "next/link";
import BuyMeaCoffee from "@/components/ui/BuyMeaCoffee";

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
            max-w-2xl mx-auto px-6 
            flex flex-col gap-1
            md:flex-row md:items-center md:justify-between
            pt-6
          "
        >
          <div className="flex items-center justify-between md:justify-start">
            <TimeLocation />
          </div>

          <div
            className="
              flex items-center gap-6
              text
              md:gap-4
            "
          >
            <Link
              href="/contact"
              className="
                text-white/50 hover:text-white
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
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
