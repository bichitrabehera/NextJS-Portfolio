"use client";

import { memo, useRef } from "react";
import { useInView } from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import TimeLocation from "./TimeLocation";
import Link from "next/link";
import BuyMeaCoffee from "./BuyMeaCoffee";

const Navbar = () => {
  const ref = useRef(null);
  useInView(ref, { once: true, margin: "-100px" });

  return (
    <header id="top" ref={ref}>
      <nav
        className="
          sticky top-0 z-50
          backdrop-blur-xl
          bg-background/80
          border-b border-border
        "
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="
            max-w-2xl mx-auto px-6 mt-10
            flex flex-col gap-1
            md:flex-row md:items-center md:justify-between
            py-4 md:py-3
          "
        >
          {/* LEFT */}
          <div className="flex items-center justify-between md:justify-start">
            <TimeLocation />
          </div>

          {/* RIGHT */}
          <div
            className="
              flex items-center gap-6
              text-sm
              md:gap-8
            "
          >
            <Link
              href="/contact"
              className="
                underline underline-offset-4
                hover:decoration-wavy
                transition
              "
            >
              /contact
            </Link>

            <Link
              href="https://drive.google.com/file/d/1kX3p9az3eeX0Vv47CuvsGWJKuMNc06e0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="
                underline underline-offset-4
                hover:decoration-wavy
                transition
              "
            >
              /resume
            </Link>

            <BuyMeaCoffee />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Navbar);
