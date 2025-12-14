// app/page.tsx

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Home from "@/components/sections/Home";
import Navbar from "@/components/Navbar";

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Skills = dynamic(() => import("@/components/sections/Skills"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Projects = dynamic(() => import("@/components/sections/Project"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Experience = dynamic(() => import("@/components/sections/experience"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Achievements = dynamic(() => import("@/components/sections/achievments"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import("@/components/sections/Contact"), {
  loading: () => <div className="min-h-[400px]" />,
});
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => null,
});
const Backtotop = dynamic(() => import("@/components/Backtotop"), {
  loading: () => null,
});

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Achievements />
      </Suspense>
      <Suspense fallback={<div className="min-h-[400px]" />}>
        <Contact />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Backtotop />
    </>
  );
}
