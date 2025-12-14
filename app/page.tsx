// app/page.tsx

import Navbar from "@/components/Navbar";
import Home from "@/components/sections/Home";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Project";
import Experience from "@/components/sections/experience";
import Achievements from "@/components/sections/achievments";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Backtotop from "@/components/Backtotop";

export default function Page() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <Footer />
      <Backtotop />
    </>
  );
}
