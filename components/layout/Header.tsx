import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Language } from "@/lib/translation";

interface Props {
  t: any;
  language: Language;
  setLanguage: (lang: Language) => void;
}
export default function Header({ t, language, setLanguage }: Props) {
  return (
    <div className="w-full flex items-center justify-between fixed top-0 px-8 p-5 bg-white">
      <Link href="/">
        <Image
          src="/images/Letter_R.png"
          alt="Letter R"
          width={75}
          height={75}
        />
      </Link>
      <div className="flex flex-1 justify-evenly text-lg ">
        <Link href="#about"> {t.nav.about}</Link>
        <Link href="#projects">{t.nav.projects}</Link>
        <Link href="#experience">{t.nav.experience}</Link>
        <Link href="#skills">{t.nav.skills}</Link>
        <Link href="#contact">{t.nav.contact}</Link>
        <LanguageSwitcher language={language} setLanguage={setLanguage} />{" "}
      </div>
    </div>
  );
}
