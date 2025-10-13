"use client";
import { motion } from "framer-motion";
import AboutMeAccordion from "../ui/Accordion";

interface AboutProps {
  t: {
    title: string;
    accordion1: {
      title: string;
      content: string;
    };
    accordion2: {
      title: string;
      content: string;
    };
    accordion3: {
      title: string;
      content: string;
    };
    accordion4: {
      title: string;
      content: string;
    };
  };
}

export default function About({ t }: AboutProps) {
  return (
    <div id="about" className="min-h-screen flex flex-col justify-center">
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
        className="text-lg  flex flex-col "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <AboutMeAccordion t={t}></AboutMeAccordion>
      </motion.div>
    </div>
  );
}
