import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
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
        url: string;
      };
      project2: {
        title: string;
        description: string;
        features: string[];
        technologies: string;
        github: string;
        url: string;
      };
    };
  };
}

export default function Projects({ t }: ProjectsProp) {
  return (
    <div
      id="projects"
      className=" min-h-screen flex flex-col justify-center p-4
      "
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
      <motion.div>
        <div className=" flex justify-center gap-4 mt-4 flex-wrap">
          <ProjectCard {...t.items.project1} />
          <ProjectCard {...t.items.project2} />
        </div>
      </motion.div>
    </div>
  );
}
