"use client"

import React from "react"
import Project from "./project"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { projectHeadingProps, projectsProps } from "@/sanity/lib/interface"

const Projects: React.FC<{heading:projectHeadingProps ,data: projectsProps[]}> = ({ heading, data }) => {
  const { ref } = useSectionInView("Projects", 0.5)

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{heading.title}</SectionHeading>
      {data && (
        <div>
          {data.map((projectItem, index) => (
            <React.Fragment key={index}>
              <Project {...(projectItem as unknown as projectsProps)} />
              </React.Fragment>
          ))}
        </div>
      )}
    </section>
  )
}
export default Projects