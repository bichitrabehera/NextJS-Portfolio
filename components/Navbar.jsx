"use client";

import { memo } from "react";
import ThemeToggle from "./ThemeToggle";
import TimeLocation from "./TimeLocation";
import Link from "next/link";

const Navbar = () => {
  return (
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

        <div className="flex items-center  justify-end gap-6">
          <Link
            href="/contact"
            className="text underline decoration-wavy underline-offset-4"
          >
            /contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
