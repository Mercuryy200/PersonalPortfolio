"use client";
import { Chip } from "@heroui/react";
import { motion, Variants } from "framer-motion";
import { languages, frameworks, databases, IDEs } from "@/lib/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
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
    { title: t.versionControl, data: ["GitHub", "Git"] },
    { title: t.ides, data: IDEs },
    { title: t.cloud, data: ["AWS", "Vercel", "Github Action"] },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-almond">
      <motion.div
        className="mb-16 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl text-center font-serif italic">
          {t.title}
        </h2>
        <div className="h-1 w-24 bg-cartier mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col bg-almond/40 p-8 rounded-none border border-gold/30 hover:border-cartier/30 transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-8 text-coffee/60 border-b border-gold/20 pb-2">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {category.data.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Chip
                    size="sm"
                    variant="flat"
                    className="bg-cartier/5 p-3 text-cartier border border-cartier/10 text-[10px] font-bold uppercase tracking-wider rounded-full"
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
