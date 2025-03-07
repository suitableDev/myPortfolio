"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks"
import { PortableText } from "@portabletext/react"
import { introProps } from "@/sanity/lib/interface"

const Intro: React.FC<{data: introProps}> = ({ data }) => {
  const { ref } = useSectionInView("Home", 0.5)
  return (
    <section 
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
        <div className="flex items-center justify-center">
            <div className="relative">
            <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
              <Image 
                src={data.image!}
                alt={data.alt!}
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="rot h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                />
                </motion.div>
                <motion.span 
                className="absolute bottom-0 left-0 text-4xl"
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 0.2,
                }}
                >
                👋
                </motion.span>
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <PortableText value={data.text!}/>
      </motion.h1>
      
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
          href={data.cvURL}
          target="_blank"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
          href={data.url}
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
export default Intro