"use client"
import React, { useState, useCallback, memo } from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import SectionWrapper from "@/components/sub/section-wrapper";
import { fadeIn, textVariant } from "@/lib/motion";
import { IService } from "@/types/constants";
import { services } from "@/constants";

type Props = {
  index: number;
  title: string;
  icon: string;
  dis: string;
}

const ServiceCard = memo(({ index, title, icon, dis }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="max-w-[250px] w-full cursor-pointer"
    >
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
          transition: { duration: 0.3 },
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered ? (
          <motion.div
            className="bg-tertiary rounded-[20px] p-8 min-h-[280px] flex justify-center items-center flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-white text-[20px] font-bold text-center select-none">
              {dis}
            </p>
          </motion.div>
        ) : (
          <Tilt
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.02}
            transitionSpeed={350}
            className="bg-tertiary rounded-[20px] p-8 min-h-[280px] flex justify-center items-center flex-col overflow-hidden"
          >
            <motion.img
              src={icon}
              alt={`${title} icon`}
              className="w-16 h-16 object-contain mb-4 ico-fun-about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.h3
              className="text-white text-[20px] font-bold text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {title}
            </motion.h3>
          </Tilt>
        )}
      </motion.div>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

const About = () => (
  <>
    <span className="hash-span" id="about-me">&nbsp;</span>
    <motion.div variants={textVariant(0.2)}>
      <p className="sm:text-base text-sm text-secondary uppercase tracking-wider">Welcome to the Journey</p>
      <h2 className="text-white font-bold md:text-4xl sm:text-3xl xs:text-2xl text-xl magic-tex">
        Explore the Overview
      </h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-white text-[16px] leading-[26px] font-light"
    >
      Hey there! 👋 I&apos;m a passionate software engineer with a master&apos;s degree
      in the field. As a versatile full-stack developer, I&apos;m experienced in
      various programming languages and frameworks. My expertise spans both
      front-end and back-end technologies, allowing me to create comprehensive,
      efficient, and user-friendly solutions. While I have a strong background
      in web development, I&apos;m always eager to explore new technologies and adapt
      to different domains. My solid foundation in software engineering
      principles enables me to quickly learn and apply new skills. Whether it&apos;s
      crafting intuitive user interfaces, optimizing backend systems, or diving
      into emerging tech, I&apos;m ready to take on diverse challenges. Let&apos;s
      collaborate to bring your ideas to life and create scalable, innovative
      solutions. Ready for the journey? 🚀
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10 justify-center">
      {services.map((service: IService, index: number) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
