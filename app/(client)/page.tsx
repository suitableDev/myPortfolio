import Intro from "@/components/intro"
import SectionDivder from "@/components/section-divder"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import { 
  aboutData, 
  basicFetch, 
  contactData, 
  experienceData, 
  projectHeadingData, 
  introData, 
  projectsData, 
  skillsData, 
  experienceHeadingData 
} from "@/sanity/lib/fetchData"

export const revalidate = 60

export default async function Home() {
  const intro = await basicFetch(introData)
  const about = await basicFetch(aboutData)
  const projectHeading = await basicFetch(projectHeadingData)
  const projects = await basicFetch(projectsData)
  const skills = await basicFetch(skillsData)
  const experienceHeading = await basicFetch(experienceHeadingData)
  const experience = await basicFetch(experienceData)
  const contact = await basicFetch(contactData)

  return (
    <main className="flex flex-col items-center px-4">
      <Intro data={intro}/>
      <SectionDivder />
      <About data={about}/>
      <Projects heading={projectHeading} data={projects} />
      <Skills data={skills}/>
      <Experience heading={experienceHeading} data={experience} />
      <Contact data={contact} />
    </main>
  )
}
