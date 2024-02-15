"use client";
import React from "react";
import { PortableText } from "@portabletext/react";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SVG from "react-inlinesvg";
import { experienceHeadingProps, experienceProps } from "@/sanity/lib/interface";

const Experience: React.FC<{heading:experienceHeadingProps ,data: experienceProps[]}> = ({ heading, data }) => {
  const { ref } = useSectionInView("Experience", 0.3);

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-35">
       <SectionHeading>{heading.title}</SectionHeading>
       <div className="text-center mb-8 -mt-4 font-light">
       <PortableText value={heading.description! ?? ''}/>
       </div>

      {data && (
        <VerticalTimeline lineColor="">
          {data.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={
                  <SVG src={item.icon!.svg ?? ''} style={{ marginLeft: "-12px" }} />
                }
                iconStyle={{
                  background: "white",
                  fontSize: "1rem",
                }}
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <h3 className="text-xl">{item.location}</h3>
                <PortableText value={item.description!} />
                <PortableText value={item.text!} />
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      )}
    </section>
  );
}

export default Experience