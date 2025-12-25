import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
  url: string;
}

interface ProjectsProp {
  t: {
    title: string;
    items: Record<string, Project>;
  };
}

export default function Projects({ t }: ProjectsProp) {
  const projects = Object.values(t.items);

  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center p-4"
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

      <div className="flex justify-center gap-4 mt-4 flex-wrap">
        {projects.map((project, index) => (
          <motion.div
            key={project.github || index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
