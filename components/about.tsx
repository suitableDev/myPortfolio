"use client"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { PortableText } from "@portabletext/react"
import { aboutProps } from "@/sanity/lib/interface"


const About: React.FC<{data: aboutProps}> = ({ data }) => {
  const { ref } = useSectionInView("About", 0.6)
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
        {data.title}
        </SectionHeading>
        <PortableText value={data.text} />
    </motion.section>
  )
}

export default About