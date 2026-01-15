"use client";
import { motion } from "framer-motion";
import AboutMeAccordion from "../ui/Accordion";

interface AboutProps {
  t: {
    title: string;
    accordion1: { title: string; content: string };
    accordion2: { title: string; content: string };
    accordion3: { title: string; content: string };
    accordion4: { title: string; content: string };
  };
}

export default function About({ t }: AboutProps) {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-24 bg-almondBeige overflow-hidden"
    >
      <motion.div
        className="mb-16 space-y-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-7xl font-serif italic text-center">
          {t.title}
        </h2>
        <div className="h-1.5 w-32 bg-cartierRed" />
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AboutMeAccordion t={t} />
      </motion.div>
    </section>
  );
}
