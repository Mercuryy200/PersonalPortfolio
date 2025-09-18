"use client";
import { motion } from "framer-motion";
interface HeroProps {
  t: {
    description: string;
    intro: string;
  };
}
export default function Hero({ t }: HeroProps) {
  return (
    <div
      id="hero"
      className="flex flex-col justify-center h-screen items-center p-20"
    >
      <motion.h1
        className="text-5xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.intro} <span className="text-blue-900 font-bold">Rima Nafougui</span>
      </motion.h1>

      <motion.h2
        className="text-xl mt-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.description}
      </motion.h2>
    </div>
  );
}
