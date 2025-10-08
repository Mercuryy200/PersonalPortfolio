import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Language, Translation } from "@/lib/translation";

interface Props {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
}
export default function Header({ t, language, setLanguage }: Props) {
  return (
    <div className="w-min-full flex items-center justify-between fixed top-0 px-8 p-5 bg-[#faf0ca]">
      <Link href="/">
        <Image
          src="/images/Letter_R.png"
          alt="Letter R"
          width={75}
          height={75}
        />
      </Link>
      <div className="flex flex-1 justify-evenly text-lg ">
        <Link
          href="#about"
          className="  hover: text-gray-800 hover:scale-110 transition-transform duration-300"
        >
          {t.nav.about}
        </Link>
        <Link
          href="#projects"
          className="  hover: text-gray-800 hover:scale-110 transition-transform duration-300"
        >
          {t.nav.projects}
        </Link>
        <Link
          href="#experience"
          className="  hover: text-gray-800 hover:scale-110 transition-transform duration-300"
        >
          {t.nav.experience}
        </Link>
        <Link
          href="#skills"
          className="  hover: text-gray-800 hover:scale-110 transition-transform duration-300"
        >
          {t.nav.skills}
        </Link>
        <Link
          href="#contact"
          className="  hover: text-gray-800 hover:scale-110 transition-transform duration-300"
        >
          {t.nav.contact}
        </Link>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />{" "}
      </div>
    </div>
  );
}
