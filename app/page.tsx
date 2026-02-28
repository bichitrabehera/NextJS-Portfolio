import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import GithubActivity from "@/components/ui/GithubActivity";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export default function Page() {
  return (
    <>
      <SmoothScrollProvider>
        <Navbar />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <GithubActivity />
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
