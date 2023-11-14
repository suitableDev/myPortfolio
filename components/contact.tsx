"use client"

import SectionHeading from "./sectionHeading"
import { useSectionInView } from "@/lib/hooks"

export default function Contact() {
    const { ref } = useSectionInView("Contact")
  return (
    <section
    ref={ref}
    id="contact"
    className=""
    >
        <SectionHeading>Contact Me</SectionHeading>
    </section>
  )
}