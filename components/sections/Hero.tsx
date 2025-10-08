"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
      className="flex flex-col justify-center min-h-screen items-center p-20"
    >
      <motion.h1
        className="text-5xl"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.intro}{" "}
        <span className="text-coffeBean font-bold font-serif">
          Rima Nafougui
        </span>
      </motion.h1>

      <motion.h2
        className="text-xl mt-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t.description}
        <div id="social-Links" className="flex gap-2 mt-6 justify-center">
          <Link
            href="https://github.com/Mercuryy200"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-800  hover:scale-110 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rima-nafougui-b0434b295"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-gray-800 hover:scale-110 transition-transform duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
        </div>
      </motion.h2>
    </div>
  );
}
