import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from "@heroui/react";

type ExperienceItem = {
  position: string;
  description: string;
  duration: string;
  company: string;
};

type InfoProps = {
  viewMore: string;
  items: ExperienceItem[];
};

export default function Info({ viewMore, items }: InfoProps) {
  return (
    <Card className="max-w-md mx-auto my-10 shadow-lg rounded-2xl p-4 glassBackground">
      <CardBody className="space-y-6">
        {items.map((item, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold">{item.position}</h3>
            <p className="text-sm italic">{item.company}</p>
            <p className="text-xs mb-2">{item.duration}</p>
            <p className="text-sm">{item.description}</p>
            {index < items.length - 1 && <Divider className="my-4" />}
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
