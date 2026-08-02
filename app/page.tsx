import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Exp";
// import Achievements from "@/components/sections/Achievements";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";
import Github from "@/components/sections/Github";
import Banner from "@/components/sections/Banner";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Events from "@/components/sections/Events";

export default function Page() {
  return (
    <>
      <>
        <div className="text-foreground mx-auto max-w-3xl px-6 selection:bg-neutral-800 selection:text-neutral-200">
          {/* <Banner /> */}
          <Hero />
          <Github />
          <Experience />
          <Skills />
          <Projects />
          <Events />
          <Certifications />
          <Achievements />
          <Footer />
        </div>
      </>
    </>
  );
}
