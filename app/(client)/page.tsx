import Intro from "@/components/intro"
import SectionDivder from "@/components/section-divder"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivder />
      <About />
      {/* <Projects />
      <Skills /> */}
      <Experience />
      <Contact />
    </main>
  )
}
