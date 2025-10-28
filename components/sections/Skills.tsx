import { motion } from "framer-motion";
import TechCards from "../ui/TechStack";
import { frameworks, languages, IDEs } from "@/lib/data";

interface SkillsProp {
  t: {
    title: string;
    languages: string;
    frontend: string;
    backend: string;
    others: string;
    framework: string;
    ides: string;
  };
}
export default function Skills({ t }: SkillsProp) {
  return (
    <div id="skills" className=" min-h-screen flex flex-col justify-center p-4">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
      <motion.div
        className="text-lg mx-5 lg:mx-20 mb-20  flex flex-col flex-wrap justify-between items-center "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="text-center">
          <h3>{t.languages} </h3>
          <div className=" flex justify-center gap-4 mt-4 flex-wrap">
            {languages.map((language) => (
              <TechCards key={language} language={language} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3>{t.framework}</h3>
          <div className=" flex justify-center gap-4 mt-4 flex-wrap">
            {frameworks.map((framework) => (
              <TechCards key={framework} language={framework} />
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3>IDEs</h3>
          <div className=" flex justify-center gap-4 mt-4 flex-wrap">
            {IDEs.map((ide) => (
              <TechCards key={ide} language={ide} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
