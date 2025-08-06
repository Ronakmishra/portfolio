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
  const pageCount = Math.ceil(projects.length / itemsPerPage);
  const totalItems = pageCount * itemsPerPage;
  const [disableTransition, setDisableTransition] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [height, setHeight] = useState<number>();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const carouselRef = useRef<HTMLElement | null>(null);
  const resetPending = useRef(false);
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches;

  const next = useCallback(
    (preserveScroll: boolean = true) => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      let prevTop = 0;
      let savedY = 0;
      if (preserveScroll) {
        prevTop = isMobile
          ? (carouselRef.current?.getBoundingClientRect().top ?? 0) +
            window.scrollY
          : 0;
        savedY = isMobile ? 0 : window.scrollY;
      }
      const newIndex = index + itemsPerPage;
      setIndex(newIndex);
      if (newIndex >= totalItems) {
        resetPending.current = true;
      }
      if (preserveScroll) {
        requestAnimationFrame(() => {
          if (isMobile) {
            const newTop =
              (carouselRef.current?.getBoundingClientRect().top ?? 0) +
              window.scrollY;
            window.scrollBy(0, newTop - prevTop);
          } else {
            window.scrollTo(0, savedY);
          }
        });
      }
    },
    [index, totalItems]
  );

  const prev = (preserveScroll: boolean = true) => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    let prevTop = 0;
    let savedY = 0;
    if (preserveScroll) {
      prevTop = isMobile
        ? (carouselRef.current?.getBoundingClientRect().top ?? 0) +
          window.scrollY
        : 0;
      savedY = isMobile ? 0 : window.scrollY;
    }
    if (index === 0) {
      setDisableTransition(true);
      setIndex(totalItems);
      requestAnimationFrame(() => {
        setDisableTransition(false);
        setIndex(Math.max((pageCount - 1) * itemsPerPage, 0));
        if (preserveScroll) {
          requestAnimationFrame(() => {
            if (isMobile) {
              const newTop =
                (carouselRef.current?.getBoundingClientRect().top ?? 0) +
                window.scrollY;
              window.scrollBy(0, newTop - prevTop);
            } else {
              window.scrollTo(0, savedY);
            }
          });
        }
      });
    } else {
      const newIndex = index - itemsPerPage;
      setIndex(newIndex);
      if (preserveScroll) {
        requestAnimationFrame(() => {
          if (isMobile) {
            const newTop =
              (carouselRef.current?.getBoundingClientRect().top ?? 0) +
              window.scrollY;
            window.scrollBy(0, newTop - prevTop);
          } else {
            window.scrollTo(0, savedY);
          }
        });
      }
    }
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

  const handleTransitionEnd = () => {
    if (resetPending.current) {
      setDisableTransition(true);
      setIndex(0);
      resetPending.current = false;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setDisableTransition(false);
        });
      });
    }
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
        next(false);
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
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const currentPage = Math.floor(index / itemsPerPage);
    if (isMobile) {
      setHeight(pageRefs.current[currentPage]?.offsetHeight);
    } else {
      setHeight(undefined);
    }
  }, [index, itemsPerPage]);

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
            onClick={() => prev()}
            disabled={pageCount <= 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => next()}
            disabled={pageCount <= 1}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div
        className="overflow-hidden"
        style={isMobile && height !== undefined ? { height } : undefined}
      >
        <div
          className={`flex items-start ${disableTransition ? "" : "transition-transform duration-500 ease-in-out"}`}
          style={{
            transform: `translateX(-${(index / itemsPerPage) * 100}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {Array.from({ length: pageCount + 1 }, (_, pageIndex) => {
            const start = pageIndex * itemsPerPage;
            const slice =
              pageIndex === pageCount
                ? projects.slice(0, itemsPerPage)
                : projects.slice(start, start + itemsPerPage);
            const filled: (ProjectProps | null)[] = [...slice];
            while (filled.length < itemsPerPage) {
              filled.push(null);
            }
            return (
              <div
                key={pageIndex}
                ref={(el) => {
                  pageRefs.current[pageIndex] = el;
                }}
                className="min-w-full grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {filled.map((project, idx) =>
                  project ? (
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
                  ) : (
                    <div key={idx} className="hidden md:block" />
                  )
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
