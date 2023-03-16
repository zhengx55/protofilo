import { motion } from "framer-motion";
import { FC } from "react";
import Tilt from "react-tilt";
import { services } from "../constant";
import { styles } from "../constant/style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard: FC<{ index: number; title: string; icon: string }> = ({
  index,
  title,
  icon,
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary min-h-[280px] rounded-[20px] py-5 px-12 flex flex-col items-center justify-evenly"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Introudction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ex
        recusandae iste distinctio eaque possimus optio iure. Deleniti nisi
        doloremque deserunt voluptatibus, quod hic ex eaque. Eos unde possimus
        impedit! &bnsp; Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Doloribus dolor nisi commodi voluptatibus at esse repellendus
        dolore? Assumenda libero, inventore numquam quo officia consequatur
        nostrum nisi unde vero, blanditiis aspernatur.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard index={index} key={service.title} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
