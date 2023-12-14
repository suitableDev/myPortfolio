"use client"
import React, { useEffect, useState } from "react"
import { getExperienceData } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { useSectionInView } from "@/lib/hooks"
import SectionHeading from "./section-heading"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3)
  const [ experience, setExperience ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
    try{
        const data = await getExperienceData()
        console.log(data)
        setExperience(data)
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
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline lineColor="">
            {
            experience.map((item, index) => (
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
                icon= {
                  <Image 
                  src={item.icon? item.icon:"/me.jpg"}
                  alt='test'
                  width="100"
                  height="100"
                  quality="95"
                  priority={true}
                  />
                }
               iconStyle={{
                 background: "white" ,
                 fontSize: "1.5rem",
               }}
             >
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <PortableText value={item.description} />
                
              </VerticalTimelineElement>
              </React.Fragment>
            ))}
        </VerticalTimeline>

    </section>
  )
}