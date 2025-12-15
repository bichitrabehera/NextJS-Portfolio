// app/page.tsx

import Home from "@/components/sections/Home";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Project";
import Experience from "@/components/sections/experience";
import Achievements from "@/components/sections/achievments";
import GithubActivity from "../components/GithubActivity";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <GithubActivity />
      <Footer />
    </>
  );
}
