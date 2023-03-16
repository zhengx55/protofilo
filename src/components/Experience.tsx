import { motion } from "framer-motion";
import { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constant";
import { styles } from "../constant/style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard: FC<{ data: any }> = ({ data }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={data.date}
      iconStyle={{
        background: data.iconBg,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            alt={data.company_name}
            src={data.icon}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{data.title}</h3>
        <p className="text-secondary text-[16px] font-semibold">
          {data.company_name}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {data.points.map((point: string, index: number) => {
          return (
            <li
              className="text-white-100 text-[14px] pl-1 tracking-wider"
              key={`experience-${index}`}
            >
              {point}
            </li>
          );
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((item, index) => (
            <ExperienceCard key={index} data={item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
