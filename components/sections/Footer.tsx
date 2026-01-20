"use client";

import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = useCallback(() => {
    document.getElementById("top")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="
        max-w-2xl mx-auto
        px-6 py-16
        text-foreground
        flex flex-col items-center gap-4
      "
    >
      <p className="text-sm font-light tracking-wide opacity-60 text-center">
        © {currentYear} - Built by{" "}
        <a
          href="https://bichitrabehera-blue.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4"
        >
          Bichitra Behera
        </a>
      </p>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          w-10 h-10
          flex items-center justify-center
          rounded-full
          border border-border
          opacity-60
          transition
          hover:opacity-100
        "
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </motion.footer>
  );
}

export default memo(Footer);
