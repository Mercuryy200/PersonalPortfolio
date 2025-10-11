import { motion } from "framer-motion";
import Info from "@/components/ui/Info";

interface ExperienceProp {
  t: {
    title: string;
    viewMore: string;
    items: Array<{
      position: string;
      description: string;
      duration: string;
      company: string;
    }>;
  };
}

export default function Experience({ t }: ExperienceProp) {
  return (
    <div id="experience" className="min-h-screen flex flex-col justify-center">
      <motion.h2
        className="text-3xl text-center mt-20 mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-row ">
          <Info viewMore={t.viewMore} items={t.items} />
        </div>
      </motion.div>
    </div>
  );
}
