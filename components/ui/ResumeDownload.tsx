import { Download } from "lucide-react";
import { Language } from "@/lib/translation";

interface ResumeDownloadProps {
  language: Language;
}

export default function ResumeDownload({ language }: ResumeDownloadProps) {
  const handleDownloadResume = () => {
    const resumePath =
      language === "en" ? "/NafouguiRima_EN.pdf" : "/NafouguiRima_FR.pdf";

    const fileName =
      language === "en" ? "NafouguiRima_EN.pdf" : "NafouguiRima_FR.pdf";

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonText =
    language === "en" ? "Download Resume" : "Télécharger le CV";

  return (
    <button
      onClick={handleDownloadResume}
      className="flex items-center gap-2 px-6 py-3 bg-coffeBean text-almond font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg"
    >
      <Download size={20} />
      {buttonText}
    </button>
  );
}
