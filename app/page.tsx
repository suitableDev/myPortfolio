import Intro from "@/components/intro"
import SectionDivder from "@/components/section-divder"
import About from "@/components/about"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivder />
      <About />
      <Projects />
    </main>
  )
}
