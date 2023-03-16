import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { styles } from "../constant/style";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (
  Component: React.ComponentType,
  idName: string | undefined
) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer("", "")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span id={idName} className="hash-span">
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
