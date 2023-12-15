"use client"

import React, { useEffect, useState } from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { getProfileData } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"


export default function Test() {
  const { ref } = useSectionInView("About", 0.6)
  const [ about, setAbout ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
    try{
        const data = await getProfileData()
        setAbout(data.about)
    } catch(error){
        console.error('Error fetching data:', error)
    }
};

fetchData();
}, []); 
if (!about) {
return
}

  return (
    <motion.section
      ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    id="about"
    >
        <SectionHeading>
        {about.title}
        </SectionHeading>

        <PortableText value={about.text} />
        
    </motion.section>
  )
}