"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import techFacts from "@/techFacts.json";

const DURATION = 10;

function Footer() {
  const scrollToTop = useCallback(() => {
    document.getElementById("top")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const [fact, setFact] = useState(
    () => techFacts[Math.floor(Math.random() * techFacts.length)]
  );
  const [countdown, setCountdown] = useState(DURATION);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          setFact(
            techFacts[Math.floor(Math.random() * techFacts.length)]
          );
          return DURATION;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <motion.p
        key={fact}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="font-light tracking-wide opacity-50 text-center max-w-xl"
      >
        {fact}
      </motion.p>

      {/* Countdown */}
      <motion.span
        key={countdown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.2 }}
        className="text-xs tracking-widest"
      >
        next fact in {countdown}s
      </motion.span>

      <p className="text-sm font-light tracking-wide opacity-60 text-center">
        © {currentYear} — Built with a focus on performance, accessibility, and
        maintainability by{" "}
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
