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
    const step = () => {
      if (!containerRef.current) return;
      if (!isPaused.current) {
        containerRef.current.scrollLeft += 0.5;
        const maxScroll = containerRef.current.scrollWidth / 2;
        if (containerRef.current.scrollLeft >= maxScroll) {
          containerRef.current.scrollLeft -= maxScroll;
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
    container.scrollBy({ left: direction * cardWidth.current, behavior: "smooth" });
    setTimeout(() => play(), 300);
  };

  const duplicated = [...SKILL_GROUPS, ...SKILL_GROUPS];

  return (
    <div className="relative" aria-label="Skills carousel">
      <div className="absolute right-0 top-0 flex gap-2">
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
          if (!isDragging.current) play();
        }}
        onFocusCapture={pause}
        onBlurCapture={play}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeaveCapture={endDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex">
          {duplicated.map((group, idx) => (
            <div
              key={idx}
              className="skill-card mr-4 shrink-0 w-64 rounded-lg bg-secondary p-4 flex flex-col gap-2"
            >
              <h3 className="text-sm font-medium">
                <span className="mr-2">{group.emoji}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
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
