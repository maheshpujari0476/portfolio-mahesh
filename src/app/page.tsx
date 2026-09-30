import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import EngineeringHighlights from "@/components/EngineeringHighlights";
import TechnicalSkills from "@/components/TechnicalSkills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <EngineeringHighlights />
      <TechnicalSkills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
