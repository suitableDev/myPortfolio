"use client"

import React, { useEffect, useState } from "react"
import { getProjectsData } from "@/sanity/lib/client"
import { TypedObject } from "sanity"
import Project from "./project"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"


export interface ProjectData {
  title: string
  items: string[]
  name: string
  description: TypedObject[]
  tags: string[]
  image: string
}

export default function Projects() {
  const [project, setProject] = useState<ProjectData | null>(null)
  const { ref } = useSectionInView("Projects", 0.5)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProjectsData()
        setProject(data.projects)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, []) 
  if (!project) {
    return null 
  }

 
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{project.title}</SectionHeading>
      {project.items && (
        <div>
          {project.items.map((projectItem, index) => (
            <React.Fragment key={index}>
              <Project {...(projectItem as unknown as ProjectData)} />
              </React.Fragment>
          ))}
        </div>
      )}
    </section>
  )
}
