"use client";

import { ProjectCard } from "./project-card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: string[];
  image?: string;
  video?: string;
  links?: {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

interface CarouselProps {
  projects: ProjectProps[];
}

export default function ProjectCarousel({ projects }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  const next = () => {
    if (index + itemsPerPage < projects.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <section className="w-full py-12 max-w-[800px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="space-x-2">
          <Button variant="outline" size="icon" onClick={prev} disabled={index === 0}>
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={index + itemsPerPage >= projects.length}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.slice(index, index + itemsPerPage).map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            href={project.href}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            image={project.image}
            video={project.video}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
}
