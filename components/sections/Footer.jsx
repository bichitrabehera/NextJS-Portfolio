"use client";

import { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function Footer() {
  const scrollToTop = useCallback(() => {
    const el = document.getElementById("top");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        relative w-full mt-4 py-10
        bg-background/50 backdrop-blur-xl
        border-t border-border
        flex flex-col items-center gap-6
        text-foreground
      "
    >
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="
          group
          flex items-center justify-center
          w-12 h-12 rounded-full
          border border-border
          bg-background/60
          shadow-sm
          transition-all duration-300
          hover:scale-110
          hover:bg-foreground hover:text-background
          focus:outline-none focus:ring-2 focus:ring-foreground/30
        "
      >
        <ArrowUp
          className="
            w-5 h-5
            transition-transform duration-300
            group-hover:-translate-y-1
          "
        />
      </button>

      {/* Divider */}
      <div className="w-24 h-px bg-border" />

      {/* Copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm text-foreground/70 text-center"
      >
        © {currentYear} — Built with ❤️ by{" "}
        <a
          href="https://bichitrabehera-blue.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            font-medium text-foreground
            hover:underline underline-offset-4
            transition
          "
        >
          Bichitra Behera
        </a>
      </motion.p>
    </motion.footer>
  );
}

export default memo(Footer);
