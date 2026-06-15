import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Exp";
// import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import Github from "@/components/sections/Github";
import Banner from "@/components/sections/Banner";
import Achievements from "@/components/sections/Achievements";

export default function Page() {
  return (
    <>
      <>
        <div className="px-6 max-w-3xl mx-auto text-foreground bg-[#08090B] ">
          <Banner />
          <Hero />
          <Github />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Footer />
        </div>
      </>
    </>
  );
}
