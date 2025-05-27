"use client";

import { useState, useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  textVariant,
} from "@/lib/motion";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    setWindowWidth(window.innerWidth); // Initial set

    const handleResizeThrottled = throttle(handleResize, 200);
    window.addEventListener("resize", handleResizeThrottled);

    return () => window.removeEventListener("resize", handleResizeThrottled);
  }, []);

  return windowWidth;
};

const throttle = (func: { (): void; (arg0: []): void; }, delay: number) => {
  let timeoutId: NodeJS.Timeout | null;
  return (...args: []) => {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = null;
      }, delay);
    }
  };
};

export const HeroContent = () => {
  const windowWidth = useWindowWidth();
  const isPhoneSize = windowWidth ? windowWidth < 640 : false;

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="w-full lg:w-1/2 space-y-8 lg:space-y-12 text-left lg:pr-12 mt-[200px] lg:mt-0">
          <div className="flex items-start space-x-0 lg:space-x-6">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-purple-700" />
              <div className="w-1 h-[400px] sm:h-[500px] bg-gradient-to-b from-purple-500 to-transparent" />
            </div>
            <div className="space-y-4 lg:space-y-6">
              <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 animate-slideleftT2">
                Hi, I&apos;m{" "}
                <span className="magic">
                  <span className="magic-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                    Sanger Ramirez
                  </span>
                </span>
              </h1>

              <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] animate-slideleftT3 leading-relaxed">
                I build bridges between imagination and reality.
                <br className="hidden sm:block" />
                My full stack development skills bring holistic solutions to
                complex digital problems.
              </p>

              <motion.div
                variants={textVariant(2)}
                className="animate-slidedown12 inline-flex items-center px-4 py-3 border border-[#7042f88b] rounded-md bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition-all duration-300"
              >
                <SparklesIcon className="h-5 w-5 text-[#b49bff] mr-2" />
                <span className="text-sm text-purple-200">
                  Driven by Curiosity, Powered by Technology
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          {windowWidth && windowWidth >= 1027 && (
            <Image
              src="/hero-bg.svg"
              width={650}
              height={650}
              alt="Jane Stone"
              className="w-full h-auto max-w-md mx-auto lg:max-w-none lg:ml-auto rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 animate-slideright2 minImg-hover move-right"
            />
          )}
        </div>
      </div>

      {!isPhoneSize && (
        <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
          <a
            href="#about-me"
            aria-label="Learn more about me"
            className="animate-bounce"
          >
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          </a>
        </div>
      )}
    </section>
  );
};
