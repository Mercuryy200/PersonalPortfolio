import { motion } from "framer-motion";
import TechCards from "../ui/TechStack";
import { skills } from "@/lib/data";

interface SkillsProp {
  t: {
    title: string;
    languages: string;
    frontend: string;
    backend: string;
    others: string;
  };
}
export default function Skills({ t }: SkillsProp) {
  return (
    <div id="skills" className=" h-screen flex flex-col justify-center">
      <motion.h2
        className="text-3xl text-center mt-20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
      <motion.div
        className="text-lg mx-20 mb-20  flex flex-col  justify-center items-center "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3>{t.backend}</h3>
        <div className=" flex justify-around gap-4 mt-4 flex-wrap">
          {skills.map((skill) => (
            <TechCards key={skill} skill={skill} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
