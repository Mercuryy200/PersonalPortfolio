import React from "react";
import { Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { languages, frameworks, databases, IDEs } from "@/lib/data";
const cloud = ["AWS", "Github Action", "Vercel"];
const versionControl = ["GitHub", "Git"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

interface SkillsProp {
  t: {
    title: string;
    languages: string;
    framework: string;
    ides: string;
    cloud: string;
    databases: string;
    versionControl: string;
  };
}

export default function Skills({ t }: SkillsProp) {
  const skillCategories = [
    { title: t.languages, data: languages },
    { title: t.framework, data: frameworks },
    { title: t.databases, data: databases },
    { title: t.versionControl, data: versionControl },
    { title: t.ides, data: IDEs },
    { title: t.cloud, data: cloud },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-4 md:px-10 flex flex-col justify-center max-w-7xl mx-auto"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center glassBackground text-center p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <h3 className="text-xl font-semibold mb-6 text-coffeBean">
              {category.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {category.data.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip
                    size="sm"
                    variant="shadow"
                    classNames={{
                      base: "bg-coffeBean border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-xl cursor-default",
                      content: "text-white text-xs font-semibold px-2 py-1",
                    }}
                  >
                    {skill}
                  </Chip>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
