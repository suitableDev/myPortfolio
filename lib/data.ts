import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import project1 from "@/public/project1.png"
import project2 from "@/public/project2.png"
import project3 from "@/public/project3.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Education",
    location: "Location",
    description:
      "whoever Epona Link Tingle Deku whenever Epona precisely simply totally highly wherever very amazing possibly surely Hyrule Princess Ruto virtually especially real usually mostly so seriously actually Goron seriously generally surely frankly Darunia Sheik start truly start Hyrule widely badly hopefully actual hopefully very largely significantly primarily Princess Ruto might largely",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Work",
    location: "Location",
    description:
      "Nayru frankly ultimately Triforce Impa mostly wherever Din amazing Sheik possibly completely particularly widely probably extremely start frequently actual seriously Hyrule might begin totally stuff begin extremely significantly perhaps Boomerang Rauru amazing Great Fairy extremely Link just Epona might highly primarily so like approximately begin clearly heavily amazing widely Zelda certainly",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Dev Experience",
    location: "Location",
    description:
      "Din try really Malon entirely try Zora clearly surely hopefully things widely things just extremely most probably Bombchu Triforce mostly literally Zelda fairly possibly Master Sword totally things Dampé hardly widely Tingle Nayru entirely real Bombchu Bongo Bongo actually very Deku precisely seriously so particularly maybe primarily obviously mostly anyway easily hardly",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const

export const projectsData = [
  {
    title: "Project1",
    description:
      "This is just some holding text about this project. I've also including some random holding tags below. blah blah blah",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: project1,
  },
  {
    title: "Project2",
    description:
    "This is just some holding text about this project. I've also including some random holding tags below. blah blah blah",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: project2,
  },
  {
    title: "Project3",
    description:
    "This is just some holding text about this project. I've also including some random holding tags below. blah blah blah",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: project3,
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "MongoDB",
  "Express",
] as const