"use client"

import React, { useEffect, useState } from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { getAboutMeData } from "@/sanity/lib/client"
import { PortableText } from "@portabletext/react"


export default function Test() {
  const { ref } = useSectionInView("About", 0.6)
  const [ testData, setTestData ] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
    try{
        const data = await getAboutMeData()
        setTestData(data)
    } catch(error){
        console.error('Error fetching data:', error)
    }
};

fetchData();
}, []); 
if (!testData) {
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
        {testData.title}
        </SectionHeading>
        <PortableText value={testData.text} />
    </motion.section>
  )
}