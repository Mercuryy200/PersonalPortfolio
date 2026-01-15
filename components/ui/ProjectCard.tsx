"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Divider,
  Chip,
} from "@heroui/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
  url: string | null;
};

export default function ProjectCard({
  title,
  description,
  features,
  technologies,
  github,
  url,
}: ProjectCardProps) {
  // Split technologies string into an array for cleaner tagging
  const techList = technologies.split(",").map((tech) => tech.trim());

  return (
    <Card
      className="glassBackground bg-almond/50 h-full border border-sandGold/30 shadow-none hover:border-cartier/40 transition-all duration-500 group"
      isPressable={!!url}
      onPress={() => {
        if (url) window.open(url, "_blank");
      }}
    >
      <CardHeader className="flex-col items-start px-6 pt-6 pb-2">
        <div className="flex justify-between w-full items-start">
          <h4 className="font-serif italic text-2xl text-coffee group-hover:text-cartier transition-colors duration-300">
            {title}
          </h4>
          {url && (
            <ExternalLink
              size={18}
              className="text-sandGold opacity-0 group-hover:opacity-100 transition-opacity"
            />
          )}
        </div>

        {/* Technology Badges */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {techList.map((tech) => (
            <Chip
              key={tech}
              size="sm"
              variant="flat"
              className="bg-cartier/5 text-cartier border border-cartier/10 text-[10px] p-3 font-bold uppercase tracking-wider"
            >
              {tech}
            </Chip>
          ))}
        </div>
      </CardHeader>

      <CardBody className="px-6 py-4 overflow-hidden">
        <p className="text-sm text-coffee/80 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        <ul className="space-y-2">
          {features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-xs text-coffee/70"
            >
              <span className="text-cartier mt-1">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </CardBody>

      <Divider className="bg-sandGold/20 mx-6 w-auto" />

      <CardFooter className="px-6 py-4 flex justify-between items-center">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-sandGold opacity-60">
          Source Code
        </span>
        <Button
          as="a"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          variant="light"
          className="rounded-full border border-coffee/20 text-coffee hover:bg-cartier hover:text-almond hover:border-cartier transition-all duration-300"
          isIconOnly
        >
          <FontAwesomeIcon icon={faGithub} className="text-lg" />
        </Button>
      </CardFooter>
    </Card>
  );
}
