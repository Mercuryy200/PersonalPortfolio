import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { Language, Translation } from "@/lib/translation";

interface Props {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function Header({ t, language, setLanguage }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-almond z-50">
      <div className="mx-auto  sm:px-6 ">
        <div className="relative flex h-20 w-full items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/Letter_R.png"
              alt="Letter R"
              width={75}
              height={75}
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden lg:flex lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg text-gray-700 hover:text-coffeBean hover:scale-110 transition-all duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-coffeBean hover:bg-coffeBean/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-coffeBean transition-colors"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="space-y-1 px-4 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-coffeBean/10 hover:text-coffeBean transition-colors"
            >
              {item.name}
            </Link>
          ))}

          <div className="px-3 py-2">
            <LanguageSwitcher language={language} setLanguage={setLanguage} />
          </div>
        </div>
      </div>
    </nav>
  );
}
