"use client";
import { Accordion, AccordionItem } from "@heroui/react";
import { ChevronRight } from "lucide-react"; // Refined minimalist indicator

interface AccordionProps {
  t: {
    accordion1: { title: string; content: string };
    accordion2: { title: string; content: string };
    accordion3: { title: string; content: string };
    accordion4: { title: string; content: string };
  };
}

export default function AboutMeAccordion({ t }: AccordionProps) {
  // Designer choice: Minimalist item classes to match the "Quiet Luxury" aesthetic
  const itemClasses = {
    base: "py-2 w-full border-b border-sandGold/30 last:border-none",
    title:
      "font-serif italic text-xl md:text-2xl text-coffee group-data-[open=true]:text-cartier transition-colors duration-300",
    trigger:
      "px-4 py-6 data-[hover=true]:bg-cartier/5 rounded-none h-auto flex items-center transition-all duration-300",
    indicator: "text-cartier transition-transform duration-500",
    content:
      "text-base leading-relaxed text-coffee/80 px-4 pb-6 pt-2 font-medium",
  };

  return (
    <div className="w-full bg-almond/30 border-t border-sandGold/30">
      <Accordion
        variant="light"
        selectionMode="single"
        itemClasses={itemClasses}
        showDivider={false}
        // Custom indicator animation
        selectionBehavior="replace"
      >
        <AccordionItem
          key="1"
          aria-label={t.accordion1.title}
          title={t.accordion1.title}
          indicator={({ isOpen }) => (
            <ChevronRight
              size={20}
              className={`transform transition-transform duration-500 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          )}
        >
          {t.accordion1.content}
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label={t.accordion2.title}
          title={t.accordion2.title}
          indicator={({ isOpen }) => (
            <ChevronRight
              size={20}
              className={`transform transition-transform duration-500 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          )}
        >
          {t.accordion2.content}
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label={t.accordion3.title}
          title={t.accordion3.title}
          indicator={({ isOpen }) => (
            <ChevronRight
              size={20}
              className={`transform transition-transform duration-500 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          )}
        >
          {t.accordion3.content}
        </AccordionItem>

        <AccordionItem
          key="4"
          aria-label={t.accordion4.title}
          title={t.accordion4.title}
          indicator={({ isOpen }) => (
            <ChevronRight
              size={20}
              className={`transform transition-transform duration-500 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          )}
        >
          {t.accordion4.content}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
