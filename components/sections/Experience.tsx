import { motion } from "framer-motion";
interface ExperienceProp {
  t: {
    title: string;
  };
}

export default function Experience({ t }: ExperienceProp) {
  return (
    <div id="experience" className=" h-screen flex flex-col justify-center">
      <motion.h2
        className="text-3xl text-center mt-20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
      <motion.div></motion.div>
    </div>
  );
}
