"use client";

import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import TimeLocation from "./TimeLocation";
import Link from "next/link";
import BuyMeaCoffee from "./BuyMeaCoffee";

const Navbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section id="top" ref={ref}>
      <nav
        className="
         top-0 right-0 w-full z-50
        backdrop-blur-[30px]
        bg-background text-foreground
        border-b border-border
      "
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className="
          max-w-3xl mx-auto px-6
          flex flex-col md:flex-row
          items-start
          md:items-center
          md:justify-between
          pb-3
          pt-8
          gap-2 md:gap-0
        "
        >
          <div className="flex justify-center md:justify-start">
            <TimeLocation />
          </div>

          <div className="flex items-center text-sm  justify-end gap-6">
            <Link
              href="/contact"
              className="text underline hover:decoration-wavy underline-offset-4"
            >
              /contact
            </Link>
            <Link
              href="https://drive.google.com/file/d/1kX3p9az3eeX0Vv47CuvsGWJKuMNc06e0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text underline hover:decoration-wavy underline-offset-4"
            >
              /resume
            </Link>
            <BuyMeaCoffee />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </section>
  );
};

export default memo(Navbar);
