import Hero from "@/components/sections/Hero";
import Featured from "@/components/sections/Featured";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/layout/Footer";
import Github from "@/components/sections/Github";
import Highlights from "@/components/sections/Highlights";
import Exp from "@/components/sections/Exp";

export default function Page() {
  return (
    <>
      <div className="text-foreground selection:text-foreground mx-auto max-w-2xl px-6 leading-7 selection:bg-blue-500/50">
        <Hero />
        <Github />
        <Featured />
        <Exp />
        <Skills />
        <Highlights />
        <Footer />
      </div>
    </>
  );
}
