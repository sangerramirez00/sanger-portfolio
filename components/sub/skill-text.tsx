"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        className="w-full flex flex-col justify-center items-center p-8 mr-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          id="Wecom-box"
          className="animate-slidedown12 inline-flex items-center px-4 py-3 border border-[#7042f88b] rounded-full bg-opacity-20 bg-purple-900 hover:bg-opacity-30 transition-all duration-300"
        >
          <SparklesIcon className="h-5 w-5 text-[#b49bff] mr-2" />
          <span id="Wecom-text" className="text-sm 310:text-xs 370:text-sm text-white">
            Experience With Some Technology
          </span>
        </div>
      </motion.div>
    </div>
  );
};
