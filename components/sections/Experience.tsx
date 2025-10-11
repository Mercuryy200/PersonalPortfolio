import { motion } from "framer-motion";
import Info from "@/components/ui/Info";
import ResumeDownload from "@/components/ui/ResumeDownload";
import { Language } from "@/lib/translation";

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
  language: Language;
}

export default function Experience({ t, language }: ExperienceProp) {
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
        <div className="flex flex-col items-center gap-6">
          <Info viewMore={t.viewMore} items={t.items} />
          <ResumeDownload language={language} />
        </div>
      </motion.div>
    </div>
  );
}
