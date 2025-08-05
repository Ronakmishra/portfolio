// "use client";

// import { ProjectCard } from "./project-card";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// interface ProjectProps {
//   title: string;
//   href?: string;
//   description: string;
//   dates: string;
//   technologies: string[];
//   image?: string;
//   video?: string;
//   links?: {
//     icon: React.ReactNode;
//     type: string;
//     href: string;
//   }[];
// }

// interface CarouselProps {
//   projects: ProjectProps[];
// }

// export default function ProjectCarousel({ projects }: CarouselProps) {
//   const [index, setIndex] = useState(0);
//   const itemsPerPage = 4;

//   const next = () => {
//     if (index + itemsPerPage < projects.length) {
//       setIndex(index + itemsPerPage);
//     }
//   };

//   const prev = () => {
//     if (index - itemsPerPage >= 0) {
//       setIndex(index - itemsPerPage);
//     }
//   };

//   return (
//     <section className="w-full py-12 max-w-[800px] mx-auto">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold">Projects</h2>
//         <div className="space-x-2">
//           <Button variant="outline" size="icon" onClick={prev} disabled={index === 0}>
//             <ChevronLeft className="w-4 h-4" />
//           </Button>
//           <Button
//             variant="outline"
//             size="icon"
//             onClick={next}
//             disabled={index + itemsPerPage >= projects.length}
//           >
//             <ChevronRight className="w-4 h-4" />
//           </Button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {projects.slice(index, index + itemsPerPage).map((project, idx) => (
//           <ProjectCard
//             key={idx}
//             title={project.title}
//             href={project.href}
//             description={project.description}
//             dates={project.dates}
//             tags={project.technologies}
//             image={project.image}
//             video={project.video}
//             links={project.links}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ProjectCard } from "./project-card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface ProjectProps {
  title: string;
  href?: string;
  description: string;
  dates: string;
  technologies: readonly string[];
  image?: string;
  video?: string;

  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

interface CarouselProps {
  projects: readonly ProjectProps[];
}

export default function ProjectCarousel({ projects }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Determine items per page based on viewport width
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemsPerPage(1);
      } else if (width < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Ensure current index stays in bounds when itemsPerPage changes
  useEffect(() => {
    setIndex((prev) => Math.min(prev, Math.max(projects.length - itemsPerPage, 0)));
  }, [itemsPerPage, projects.length]);

  const triggerFade = useCallback(() => {
    setFade(true);
    setTimeout(() => setFade(false), 200); // Fade out briefly
  }, []);

  const next = useCallback(() => {
    triggerFade();
    setIndex((prev) =>
      prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage
    );
  }, [itemsPerPage, projects.length, triggerFade]);

  const prev = () => {
    triggerFade();
    setIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(projects.length - itemsPerPage, 0)
        : prev - itemsPerPage
    );
  };

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        next();
      }, 5000);
    };

    if (!isHovered) startInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, projects.length, next]);

  return (
    <section
      className="w-full py-12 max-w-[800px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            disabled={projects.length <= itemsPerPage}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={next}
            disabled={projects.length <= itemsPerPage}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* 💫 Fade transition wrapper */}
      <div
        className={clsx(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-500 ease-in-out",
          fade ? "opacity-0" : "opacity-100"
        )}
      >
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
