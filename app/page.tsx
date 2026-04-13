import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Exp";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/layout/Footer";
import Github from "@/components/sections/Github";

export default function Page() {
  return (
    <>
        <Hero />
        
        <Experience />
        <Skills />
        <Github />
        <Achievements />
        <Footer />
    </>
  );
}
