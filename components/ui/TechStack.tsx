import { Chip } from "@heroui/react";

type TechCardsProps = {
  language: string;
};
export default function TechCards({ language }: TechCardsProps) {
  return (
    <Chip
      size="sm"
      variant="shadow"
      className="bg-coffeBean text-sm rounded-xl p-5 text-bold text-white hover:scale-105 transition-transform duration-300"
    >
      {language}
    </Chip>
  );
}
