import { Language } from "@/lib/translation";

interface Props {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export default function LanguageSwitcher({ language, setLanguage }: Props) {
  return (
    <div className="flex rounded-lg overflow-hidden">
      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-2 text-sm font-medium ${
          language === "en"
            ? "bg-cartier text-almond"
            : "bg-almond text-gray-700 hover:bg-gray-50"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-2 text-sm font-medium border-l border-gray-300 ${
          language === "fr"
            ? "bg-cartier text-almond"
            : "bg-almond text-gray-700 hover:bg-gray-50"
        }`}
      >
        FR
      </button>
    </div>
  );
}
