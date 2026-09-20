import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";
import Github from "@/components/sections/Github";
import Banner from "@/components/sections/Banner";
import Highlights from "@/components/sections/Highlights";
import Exp from "@/components/sections/Exp";

export default function Page() {
  return (
    <>
      <>
        <div className="text-foreground selection:bg-foreground/15 selection:text-foreground mx-auto max-w-3xl px-6">
          {/* <Banner /> */}
          <Hero />
          <Github />
          <Featured />
          <Exp />
          <Skills />
          <Highlights />
          <Footer />
        </div>
      </>
    </>
  );
}
