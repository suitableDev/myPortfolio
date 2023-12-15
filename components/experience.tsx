"use client"
import React, { useEffect, useState } from "react"
import { getProfileData } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./section-heading"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SVG from 'react-inlinesvg'

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3)
  const [ experience, setExperience ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    try{
        const data = await getProfileData()
        setExperience(data.experience)
    } catch(error){
        console.error('Error fetching data:', error)
    }
};
fetchData();
}, []); 
if (!experience) {
return 
}

  return (
    <section
    ref={ref} 
    id="experience"
    className="scroll-mt-28 mb-28 sm:mb-35"
    >
     {experience && <SectionHeading>{experience.title}</SectionHeading>}
          {experience.items && <VerticalTimeline lineColor="">
            {
            experience.items.map((item, index) => (
              <React.Fragment key={index}>
               <VerticalTimelineElement
               contentStyle={{
                 background:"#f3f4f6",
                 boxShadow: "none",
                 border: "1px solid rgba(0, 0, 0, 0.05)",
                 textAlign: "left",
                 padding: "1.3rem 2rem",
               }}
               contentArrowStyle={{
                 borderRight:"0.4rem solid #9ca3af",
               }}
                date={item.date}
                icon={< SVG src={item.icon.svg} style={{ marginLeft: '-12px' }}/>}
               iconStyle={{
                 background: "white" ,
                 fontSize: "1rem",
               }}
             >
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <PortableText value={item.description} />  
              </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>
}
    </section>
  )
}