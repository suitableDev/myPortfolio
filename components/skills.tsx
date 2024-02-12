"use client";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { skillsProps } from "@/sanity/lib/interface";

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({opacity: 1, y: 0, transition: { delay: 0.05 * index },}),
};

const Skills: React.FC<{data: skillsProps}> = ({ data }) => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-20 max-w-[53rem] scroll-mt-28 text-center sm:mb-35"
    >
      <SectionHeading>{data.title}</SectionHeading>
      
      {data.tags && (
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {data.tags.map((skill, index) => (
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
export default Skills