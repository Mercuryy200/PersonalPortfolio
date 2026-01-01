import { Montserrat } from "next/font/google";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Rima Nafougui",
    default: "Rima Nafougui | Software Engineering Student & Developer'",
  },
  description:
    "Portfolio of Rima Nafougui, a Software Engineering student. Specializing web and mobile development",
  keywords: [
    "Rima Nafougui",
    "Software Engineer",
    "Web Developer",
    "Mobile Developer",
    "Unity Developer",
    "Full Stack",
  ],
};

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
