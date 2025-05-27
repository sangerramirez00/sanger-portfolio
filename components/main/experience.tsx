"use client";

import React, { memo, useMemo } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "@/constants";
import SectionWrapper from "@/components/sub/section-wrapper";
import { textVariant } from "@/lib/motion";
import { IExperience } from "@/types/constants";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type Props = {
  experience: IExperience;
};

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ExperienceCard = memo(({ experience }: Props) => {
  const { date, iconBg, icon, company_name, title, points } = experience;

  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={icon}
            alt={company_name}
            width={50}
            height={50}
            className="object-contain"
            loading="lazy"
          />
        </div>
      }
    >
      <motion.div
        ref={ref}
        variants={contentVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div>
          <h3 className="text-white text-2xl font-bold px-0 xs:px-2.5 magic-tex">
            {title}
          </h3>
          <p className="text-secondary text-base font-semibold px-0 xs:px-2.5 m-0">
            {company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2 px-0 xs:px-2.5">
          {points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-sm xs:text-base pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </VerticalTimelineElement>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

const Experience = () => {
  const memoizedExperiences = useMemo(() => {
    return experiences.map((experience, index) => (
      <ExperienceCard
        key={experience.title + index}
        experience={experience}
      />
    ));
  }, [experiences]);

  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] text-center">
          What I have done so far
        </p>
        <h2 className="text-white font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl text-center magic-tex">
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={false}>
          {memoizedExperiences}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");