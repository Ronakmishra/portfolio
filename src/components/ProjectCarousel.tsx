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
  const itemsPerPage = 4;
  const pageCount = Math.ceil(projects.length / itemsPerPage);
  const [page, setPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const pageRef = useRef(0);
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
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    const prevTop = isMobileView
      ? (carouselRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY
      : 0;
    const savedY = isMobileView ? 0 : window.scrollY;
    if (isMobileView) {
      setMobilePage((prev) => prev + 1);
      setPage((prev) => (prev + 1) % pageCount);
    } else {
      setPage((prev) => (prev + 1) % pageCount);
    }
    requestAnimationFrame(() => {
      if (isMobileView) {
        const newTop =
          (carouselRef.current?.getBoundingClientRect().top ?? 0) +
          window.scrollY;
        window.scrollBy(0, newTop - prevTop);
      } else {
        window.scrollTo(0, savedY);
      }
    });
  }, [pageCount, triggerFade]);

  const prev = useCallback(() => {
    triggerFade();
    const isMobileView = window.matchMedia("(max-width: 767px)").matches;
    const prevTop = isMobileView
      ? (carouselRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY
      : 0;
    const savedY = isMobileView ? 0 : window.scrollY;
    if (isMobileView) {
      setMobilePage((prev) => prev - 1);
      setPage((prev) => (prev - 1 + pageCount) % pageCount);
    } else {
      setPage((prev) => (prev - 1 + pageCount) % pageCount);
    }
    requestAnimationFrame(() => {
      if (isMobileView) {
        const newTop =
          (carouselRef.current?.getBoundingClientRect().top ?? 0) +
          window.scrollY;
        window.scrollBy(0, newTop - prevTop);
      } else {
        window.scrollTo(0, savedY);
      }
    });
  }, [pageCount, triggerFade]);

  const handleTransitionEnd = () => {
    if (!isMobile) return;
    if (mobilePage === pageCount + 1) {
      setTransitionEnabled(false);
      setMobilePage(1);
      setTimeout(() => setTransitionEnabled(true), 0);
    } else if (mobilePage === 0) {
      setTransitionEnabled(false);
      setMobilePage(pageCount);
      setTimeout(() => setTransitionEnabled(true), 0);
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
    pageRef.current = page;
  }, [page]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateIsMobile = () => {
      const matches = mediaQuery.matches;
      setIsMobile(matches);
      if (matches) {
        setMobilePage(pageRef.current + 1);
      }
    };
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
              transform: `translateX(-${mobilePage * 100}%)`,
              transition: transitionEnabled ? undefined : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* Clone of last page at the start */}
            <div key="clone-last" className="min-w-full grid grid-cols-1 gap-4">
              {projects
                .slice((pageCount - 1) * itemsPerPage, pageCount * itemsPerPage)
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

            {Array.from({ length: pageCount }, (_, pageIndex) => (
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
            ))}

            {/* Clone of first page at the end */}
            <div key="clone-first" className="min-w-full grid grid-cols-1 gap-4">
              {projects
                .slice(0, itemsPerPage)
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
          {projects
            .slice(page * itemsPerPage, page * itemsPerPage + itemsPerPage)
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
      )}
    </section>
  );
}
