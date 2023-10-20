"use client"
import SectionHeading from "./sectionHeading"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section className="mb-28 max--w-[45rem] text-center leading-8 sm:mb-40"
    initial={{opacity: 0, y: 100}}
    animate={{opacity: 1, y: 0}}
    transition={{delay: 0.175}}
    >
        <SectionHeading>
            About me
        </SectionHeading>
        <p className="mb3">
            Despite all my rage I'm still just a rat in a maze
        </p>
        <p className="mb3">
            Despite all my rage I'm still just a rat in a cage...
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </motion.section>
  )
}