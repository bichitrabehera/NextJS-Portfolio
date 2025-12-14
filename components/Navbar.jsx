"use client";

import { memo } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 right-0 w-full z-50 backdrop-blur-[30px] bg-background text-foreground py-0 md:p-2 border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full max-w-4xl px-6 md:px-6 py-3 mx-auto flex items-center justify-between relative">
        <div>
          <h1 className="p-0 rounded-full flex gap-5 border-border">
            <p className="font-[pixel] text-xl md:text-2xl">BICHITRA</p>
          </h1>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

export default memo(Navbar);
