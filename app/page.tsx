import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Exp";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import Github from "@/components/sections/Github";

export default function Page() {
  return (
    <>
      <SmoothScrollProvider>
        <Navbar />
        <Hero />
        <Github />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
