"use client";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Divider } from "@heroui/react";
import { useState } from "react";
import { translations, Language } from "@/lib/translation";
import { HeroUIProvider } from "@heroui/react";
import * as React from "react";
import "./globals.css";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const t = translations[language];

  return (
    <>
      <HeroUIProvider>
        <Header t={t} language={language} setLanguage={setLanguage} />
        <Hero t={t.hero} />
        <Divider />
        <About t={t.about} />
        <Divider />
        <Projects t={t.projects} />
        <Divider />
        <Experience t={t.experience} language={language} />
        <Divider />
        <Skills t={t.skills} />
        <Divider />
        <Contact t={t.contact} />
        <Divider />
        <Footer t={t.footer} />
      </HeroUIProvider>
    </>
  );
}
