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
        <div className="max-w-3xl mx-auto border-x border-foreground/20">
          <Banner />
        </div>

        <div className="px-6 max-w-3xl mx-auto text-foreground bg-neutral-900 ">
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
