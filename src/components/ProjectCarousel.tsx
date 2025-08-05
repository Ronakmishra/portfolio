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
  const itemsPerPage = 4;
  const [isHovered, setIsHovered] = useState(false);
  const [fade, setFade] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLElement | null>(null);

  const triggerFade = useCallback(() => {
    // Skip fade animation on mobile where slides are used
    if (isMobile) return;
    setFade(true);
    setTimeout(() => setFade(false), 200); // Fade out briefly
  }, [isMobile]);

  const next = useCallback(() => {
    triggerFade();
    const savedY = window.scrollY;
    setIndex((prev) =>
      prev + itemsPerPage >= projects.length ? 0 : prev + itemsPerPage
    );
    requestAnimationFrame(() => {
      window.scrollTo(0, savedY);
    });
  }, [projects.length, triggerFade]);

  const prev = () => {
    triggerFade();
    const savedY = window.scrollY;
    setIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(projects.length - itemsPerPage, 0)
        : prev - itemsPerPage
    );
    requestAnimationFrame(() => {
      window.scrollTo(0, savedY);
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setIsHovered(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartX.current;
    const endX = e.changedTouches[0]?.clientX ?? null;

    if (startX !== null && endX !== null) {
      const diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          next();
        } else {
          prev();
        }
      }
    }

    touchStartX.current = null;
    setIsHovered(false);
  };

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    });

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isInView && !isHovered) {
      intervalRef.current = setInterval(() => {
        next();
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInView, isHovered, next]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);
    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return (
    <section
      ref={carouselRef}
      className="w-full py-12 max-w-[800px] mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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

      {isMobile ? (
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(index / itemsPerPage) * 100}%)`,
            }}
          >
            {Array.from(
              { length: Math.ceil(projects.length / itemsPerPage) },
              (_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="min-w-full grid grid-cols-1 gap-4"
                >
                  {projects
                    .slice(
                      pageIndex * itemsPerPage,
                      pageIndex * itemsPerPage + itemsPerPage
                    )
                    .map((project, idx) => (
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
              )
            )}
          </div>
        </div>
      ) : (
        // 💫 Fade transition wrapper for wider screens
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
      )}
    </section>
  );
}
