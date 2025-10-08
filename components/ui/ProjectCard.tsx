import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
} from "@heroui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
};

export default function ProjectCard({
  title,
  description,
  features,
  technologies,
  github,
}: ProjectCardProps) {
  return (
    <Card className="glassBackground py-4 max-w-md shadow-lg rounded-2xl border border-default-200">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large mt-1">{title}</h4>
        <small className="text-default-500 mt-1">{technologies}</small>
      </CardHeader>
      <Divider className="my-2" />
      <CardBody className="overflow-visible py-2 px-4">
        <p className="text-sm text-default-700 mb-3">{description}</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-default-600">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="flex justify-end px-4">
        <Button
          as="a"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
          variant="flat"
          className="rounded-md bg-coffeBean text-almond"
        >
          GitHub
          <FontAwesomeIcon icon={faGithub} />
        </Button>
      </CardFooter>
    </Card>
  );
}
