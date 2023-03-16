import { motion } from "framer-motion";
import { FC } from "react";
import { git, github } from "../assets";
import { projects } from "../constant";
import { styles } from "../constant/style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tilt from "react-tilt";

interface Props {
  index: number;
  name: string;
  description: string;
  tags: any[];
  image: string;
  source_code_link: string;
}

const ProjectCard: FC<Props> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute justify-end flex inset-0 m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="flex justify-center cursor-pointer items-center black-gradient w-10 h-10 rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((item) => {
              return (
                <p key={item.name} className={`text-[14px] ${item.color}`}>#{item.name}</p>
              );
            })}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full">
        <motion.div
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          inventore expedita perspiciatis, maiores, natus delectus atque odit ea
          quibusdam aliquid facilis? Dignissimos ut nisi harum cumque illum fuga
          magni quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Cum repudiandae ea odit perspiciatis mollitia eligendi
          blanditiis obcaecati explicabo eveniet quibusdam. A numquam quis error
          tempora! Praesentium temporibus deleniti et suscipit.
        </motion.div>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={`project-${index}`}
              {...item}
              index={index}
            ></ProjectCard>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
