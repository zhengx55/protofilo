import { technologies } from "../constant";
import { SectionWrapper } from "../hoc";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((item, index) => {
        return (
          <div className="w-28 h-28" key={item.name}>
            <BallCanvas icon={item.icon} />
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
