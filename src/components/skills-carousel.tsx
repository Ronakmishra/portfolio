"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SKILL_GROUPS } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function SkillsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const cardWidth = useRef(0);

  const pause = () => {
    isPaused.current = true;
  };
  const play = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const firstCard = container.querySelector<HTMLElement>(".skill-card");
    if (firstCard) {
      const style = window.getComputedStyle(firstCard);
      cardWidth.current =
        firstCard.offsetWidth + parseInt(style.marginRight || "0");
    }
    const maxScroll = container.scrollWidth / 2;
    container.scrollLeft = maxScroll;
    const step = () => {
      if (!containerRef.current) return;
      if (!isPaused.current) {
        containerRef.current.scrollLeft -= 0.5;
        if (containerRef.current.scrollLeft <= 0) {
          containerRef.current.scrollLeft += maxScroll;
        }
      }
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = containerRef.current?.scrollLeft || 0;
    pause();
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const dx = e.clientX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - dx;
  };

  const endDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    play();
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
    scrollStart.current = containerRef.current?.scrollLeft || 0;
    pause();
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging.current || !containerRef.current) return;
    const dx = e.touches[0].clientX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - dx;
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    play();
  };

  const scrollByCard = (direction: number) => {
    const container = containerRef.current;
    if (!container) return;
    pause();
    const maxScroll = container.scrollWidth / 2;
    let nextScroll = container.scrollLeft + direction * cardWidth.current;
    if (nextScroll < 0) {
      nextScroll += maxScroll;
    } else if (nextScroll >= maxScroll) {
      nextScroll -= maxScroll;
    }
    container.scrollTo({ left: nextScroll, behavior: "smooth" });
    setTimeout(() => play(), 300);
  };

  const duplicated = [...SKILL_GROUPS, ...SKILL_GROUPS];

  return (
    <div className="relative" aria-label="Skills carousel">
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Previous"
          onClick={() => scrollByCard(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          aria-label="Next"
          onClick={() => scrollByCard(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div
        ref={containerRef}
        className="overflow-hidden cursor-grab"
        onMouseEnter={pause}
        onMouseLeave={() => {
          if (isDragging.current) {
            endDrag();
          } else {
            play();
          }
        }}
        onFocusCapture={pause}
        onBlurCapture={play}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex">
          {duplicated.map((group, idx) => (
            <div
              key={idx}
              className="skill-card mr-4 shrink-0 w-64 md:w-72 rounded-lg border bg-card p-4 shadow-sm flex flex-col space-y-3"
            >
              <h3 className="text-sm font-medium">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
