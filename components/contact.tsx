"use client"
import React, { useEffect, useState } from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"
import { sendEmail } from "@/actions/sendEmail"
import SubmitBtn from "./submit-btn"
import toast from "react-hot-toast"
import { getContactData } from "@/sanity/lib/client"

export default function Contact() {
    const { ref } = useSectionInView("Contact")
    const [contactData, setContactData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getContactData()
          setContactData(data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []); 
  //prevent error on no data being present
    if (!contactData) {
      return
    }

  return (
    <motion.section
    id="contact"
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
  >
    <SectionHeading>Contact me</SectionHeading>

    <p className="text-gray-700 -mt-6">
      Please contact me directly at{" "}
      <a className="underline" href="mailto:example@gmail.com">
        {contactData.email}
      </a>{" "}
      or through this form.
    </p>

    <form
      className="mt-10 flex flex-col"
      action={async (formData) => {
        const { data, error} = await sendEmail(formData)
        if (error) {
          toast.error(error)
          return
        }
        toast.success("Email sent successfully.")
      }}
    >
      <input
        className="h-14 px-4 rounded-lg borderBlack  transition-all"
        name="senderEmail"
        type="email"
        autoComplete="email"
        required
        maxLength={500}
        placeholder="Your email"
      />
      <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 transition-all"
        name="message"
        required
        maxLength={5000}
        placeholder="Your message"
      />
      <SubmitBtn />
    </form>
  </motion.section>
  )
}