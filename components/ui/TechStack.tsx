import { Chip } from "@heroui/react";

type TechCardsProps = {
  skill: string;
};
export default function TechCards({ skill }: TechCardsProps) {
  return (
    <div className="flex gap-4">
      <Chip
        size="md"
        variant="shadow"
        className="bg-blue-900 rounded-xl p-3 text-bold text-white hover:scale-105 transition-transform duration-300"
      >
        {skill}
      </Chip>
    </div>
  );
}
