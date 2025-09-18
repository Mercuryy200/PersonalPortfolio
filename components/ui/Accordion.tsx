import { Accordion, AccordionItem } from "@heroui/react";

interface AccordionProps {
  t: {
    accordion1: {
      title: string;
      content: string;
    };
    accordion2: {
      title: string;
      content: string;
    };
    accordion3: {
      title: string;
      content: string;
    };
    accordion4: {
      title: string;
      content: string;
    };
  };
}

export default function AboutMeAccordion({ t }: AccordionProps) {
  const itemClasses = {
    base: "py-0 w-full",
    title: "font-normal text-xl font-bold text-blue-900",
    trigger:
      "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };

  return (
    <Accordion
      variant="shadow"
      selectionMode="multiple"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label={t.accordion1.title}
        title={t.accordion1.title}
      >
        {t.accordion1.content}
      </AccordionItem>

      <AccordionItem
        key="2"
        aria-label={t.accordion2.title}
        title={t.accordion2.title}
      >
        {t.accordion2.content}
      </AccordionItem>

      <AccordionItem
        key="3"
        aria-label={t.accordion3.title}
        title={t.accordion3.title}
      >
        {t.accordion3.content}
      </AccordionItem>

      <AccordionItem
        key="4"
        aria-label={t.accordion4.title}
        title={t.accordion4.title}
      >
        {t.accordion4.content}
      </AccordionItem>
    </Accordion>
  );
}
