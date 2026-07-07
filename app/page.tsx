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

export default function Page() {
  return (
    <>
      <>
        <div className="text-foreground mx-auto max-w-3xl bg-[#08090B] px-6">
          <Banner />
          <Hero />
          <Github />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Footer />
        </div>
      </>
    </>
  );
}
