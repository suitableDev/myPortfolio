"use client";
import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

import { contactProps } from "@/sanity/lib/interface";

const Contact: React.FC<{ data: contactProps }> = ({ data }) => {
  const { ref } = useSectionInView("Contact");
  const [isDisabled, setIsDisabled] = useState(false);
  const [countdown, setCountdown] = useState(0); 

  const startCountdown = () => {
    setIsDisabled(true);
    setCountdown(30);

    let timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown === 1) {
          clearInterval(timer);
          setIsDisabled(false);
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(timer);
      setIsDisabled(false);
      setCountdown(0);
    }, 30000);
  };

  useEffect(() => {
    if (!isDisabled) {
      setCountdown(0);
    }
  }, [isDisabled]);



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
      <SectionHeading>{data.title}</SectionHeading>

      <p className="text-gray-700 -mt-6">
        Feel free to contact me through this form or directly at{" "}
        <a className="underline" href={`mailto:${data.email}`}>
          {data.email}
        </a>{" "}
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully.");
          startCountdown()
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
        <div className="flex items-center justify-start">
          <SubmitBtn disabled={isDisabled} />
          {isDisabled && (
            <p className="ml-4 text-gray-700">
              {countdown}
            </p>
          )}
        </div>
      </form>
    </motion.section>
  );
};
export default Contact;
