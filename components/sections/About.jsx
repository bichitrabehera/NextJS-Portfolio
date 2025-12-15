"use client";

import { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";

const GithubActivity = dynamic(() => import("@/components/GithubActivity"), {
  ssr: false,
  loading: () => <div className="min-h-[300px]" />,
});

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="pt-10 text-foreground">
      <div className="max-w-3xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl underline decoration-wavy inline underline-offset-8 mb-10 bg-blue-500">About Me</h2>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-foreground/80 space-y-6 mt-6 leading-relaxed"
        >
          <p>
            I'm a <span className="text-[#06B6D4] font-semibold">full-stack developer</span> focused on building fast,
            reliable, and user-centric applications. Whether it's{" "}
            <span className="text-[#F97316] font-semibold">web</span> or{" "}
            <span className="text-[#F97316] font-semibold">mobile</span>, I enjoy turning ideas into smooth, intuitive digital experiences.
          </p>

          <p>
            I care deeply about{" "}
            <span className="text-[#10B981] font-semibold">clean architecture</span>,{" "}
            <span className="text-[#A855F7] font-semibold">modern UI/UX</span>, and{" "}
            <span className="text-[#FACC15] font-semibold">scalable backends</span>.
            From MVPs to production apps, I build with performance and long-term maintainability in mind.
          </p>

          <p>
            I specialize in cross-platform development, ensuring consistent high-quality experiences across devices.
            Outside coding, I explore new{" "}
            <span className="text-[#F97316]">technologies</span>, sharpen{" "}
            <span className="text-[#A855F7]">design workflows</span>, and experiment with{" "}
            <span className="text-[#10B981]">innovative architectures</span>.
          </p>
        </motion.div>

        {/* GitHub Activity */}
        <GithubActivity />

      </div>
    </section>
  );
}

export default memo(About);
