"use client";
import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { getProfileData } from "@/sanity/lib/client";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({opacity: 1, y: 0, transition: { delay: 0.05 * index },}),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProfileData();
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  if (!skills) {
    return;
  }

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-35"
    >
      <SectionHeading>{skills.title}</SectionHeading>
      
      {skills.tags && (
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skills.tags.map((skill, index) => (
            <motion.li
              className="bg-white border border-black/[0/1] rounded-xl px-5 py-3"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}
