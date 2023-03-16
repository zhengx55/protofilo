import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { styles } from "../constant/style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // setLoading(true);
    // emailjs.send();
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name...."
              className="bg-tertiary px-4 py-6 rounded-lg outline-none border-none font-medium text-white placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email...."
              className="bg-tertiary px-4 py-6 rounded-lg outline-none border-none font-medium text-white placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              rows={7}
              value={form.message}
              onChange={handleChange}
              placeholder="Hello!"
              className="resize-none bg-tertiary px-4 py-6 rounded-lg outline-none border-none font-medium text-white placeholder:text-secondary"
            />
          </label>
          <button
            type="submit"
            className="cursor-pointer bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "loading" : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
