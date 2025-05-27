"use client";

import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { PinContainer } from "@/components/sub/3d-pin";
import SectionWrapper from "@/components/sub/section-wrapper";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import Image from "next/image";

type Tag = {
  name: string;
  color: string;
};

type Project = {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
};

type ProjectCardProps = Project & {
  index: number;
};

const ProjectCard = React.memo(({ name, description, tags, image, source_code_link, index }: ProjectCardProps) => {
  const handleClick = useCallback(() => {
    window.open(source_code_link, "_blank");
  }, [source_code_link]);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)} onClick={handleClick}>
      <PinContainer className="" containerClassName="">
        <div className="bg-tertiary p-0 rounded-2xl sm:w-[330px] w-full">
          <div className="relative w-full h-full mb-4">
            <img
              loading="lazy"
              src={image}
              alt={`${name} project`}
              className="w-[100%] h-[200px] object-cover rounded-2xl"
            />
          </div>
          <div>
            <h3 className="text-white font-bold text-2xl mb-2">{name}</h3>
            <p className="mt-2 text-secondary text-sm">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const ProjectCardMobile = React.memo(({ name, description, tags, image, source_code_link, index }: ProjectCardProps) => {
  const handleClick = useCallback(() => {
    window.open(source_code_link, "_blank");
  }, [source_code_link]);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.3, 0.75)}>
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img
            loading="lazy"
            src={image}
            alt={`${name} project`}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={handleClick}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                src="/dis/github.webp"
                alt="source code"
                width={30}
                height={30}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-2xl">{name}</h3>
          <p className="mt-2 text-secondary text-sm">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
});

ProjectCardMobile.displayName = "ProjectCardMobile";

const Works: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projectsToShow = useMemo(() => (windowWidth > 1280 ? projects : projects.slice(0, 3)), [windowWidth]);
  const shouldApplyVariants = windowWidth > 768;

  return (
    <>
      <motion.div variants={shouldApplyVariants ? textVariant(0.2) : {}}>
        <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">
          My work
        </p>
        <span className="magic text-transparent bg-clip-text bg-gradient-to-r magic-tex font-semibold text-4xl">
          Projects
        </span>
      </motion.div>

      <motion.p
        variants={shouldApplyVariants ? fadeIn("", "", 0.1, 1) : {}}
        className="mt-3 text-secondary text-lg max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos in it. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
      </motion.p>

      {windowWidth >= 1027 ? (
        <div className="flex flex-wrap justify-center h-[500px] w-full">
          {projectsToShow.map((project, index) => (
            <ProjectCard key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center w-full gap-7 mt-10">
          {projectsToShow.map((project, index) => (
            <ProjectCardMobile key={`project-${index}`} {...project} index={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");
