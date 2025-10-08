import { Chip } from "@heroui/react";

type TechCardsProps = {
  language: string;
};
export default function TechCards({ language }: TechCardsProps) {
  return (
    <div className="flex gap-4">
      <Chip
        size="sm"
        variant="shadow"
        className="bg-coffeBean rounded-xl p-3 text-bold text-white hover:scale-105 transition-transform duration-300"
      >
        {language}
      </Chip>
    </div>
  );
}
