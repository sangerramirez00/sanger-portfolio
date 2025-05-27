import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

// HOC that wraps a component in motion.section with staggered animation
const StarWrapper = <P extends object>(
  Component: React.ComponentType<P>,
  idName?: string
) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="sm:px-8 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0"
      >
        {idName && (
          <span className="hash-span" id={idName}>
            &nbsp;
          </span>
        )}

        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
