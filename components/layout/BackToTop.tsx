"use client";

import { memo, useCallback } from "react";
import { ArrowUp } from "lucide-react";

function BackToTop() {
  const scrollToTop = useCallback(() => {
    const el = document.getElementById("top");
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="py-10 left-1/2 -translate-x-1/2">
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          w-12 h-12
          rounded-full
          flex items-center justify-center
          bg-white dark:bg-black
          backdrop-blur-md
          border border-border
          text-foreground dark:text-white
          shadow-lg
          transition-all duration-300
          hover:scale-110
          hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black
          active:scale-95
        "
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
}

export default memo(BackToTop);
