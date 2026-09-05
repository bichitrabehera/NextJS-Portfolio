import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Exp";
import Footer from "@/components/layout/Footer";
import Github from "@/components/sections/Github";
import Banner from "@/components/sections/Banner";
import Highlights from "@/components/sections/Highlights";

export default function Page() {
  return (
    <>
      <>
        <div className="text-foreground mx-auto max-w-3xl px-6 selection:bg-neutral-800 selection:text-neutral-200">
          {/* <Banner /> */}
          <Hero />
          <Github />
          <Featured />
          <Experience />
          <Skills />
          <Highlights/>
          <Footer />
        </div>
      </>
    </>
  );
}
