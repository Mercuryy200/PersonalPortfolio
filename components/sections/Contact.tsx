import { motion } from "framer-motion";
interface ContactProp {
  t: {
    title: string;
  };
}

export default function Projects({ t }: ContactProp) {
  return (
    <div id="contact" className=" h-screen flex flex-col justify-center">
      <motion.h2
        className="text-3xl text-center mt-20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
    </div>
  );
}
