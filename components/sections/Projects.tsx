import { motion } from "framer-motion";
interface ProjectsProp {
  t: {
    title: string;
    items: {
      project1: {
        title: string;
        description: string;
        features: string[];
        technologies: string;
        github: string;
      };
    };
  };
}

export default function Projects({ t }: ProjectsProp) {
  return (
    <div id="projects" className=" h-screen flex flex-col justify-center">
      <motion.h2
        className="text-3xl text-center mt-20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
      <motion.div>
        
      </motion.div>
    </div>
  );
}
