"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SkillsCarouselProps {
  skills: readonly string[];
}

export default function SkillsCarousel({ skills }: SkillsCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const baseWidthRef = useRef(0);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const wheelTimeout = useRef<NodeJS.Timeout>();

  // Measure width of single set
  useEffect(() => {
    if (trackRef.current) {
      baseWidthRef.current = trackRef.current.scrollWidth / 3;
    }
  }, [skills]);

  const normalize = () => {
    const base = baseWidthRef.current;
    if (!base) return;
    let current = x.get();
    if (current <= -base) {
      current += base;
    } else if (current >= base) {
      current -= base;
    }
    x.set(current);
  };

  // Autoplay left to right
  useAnimationFrame((_, delta) => {
    if (isPaused) return;
    const move = (delta / 1000) * 40; // px per second
    x.set(x.get() + move);
    normalize();
  });

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  const handlePrev = () => {
    pause();
    const width = containerRef.current?.clientWidth ?? 0;
    x.set(x.get() - width);
    normalize();
    resume();
  };

  const handleNext = () => {
    pause();
    const width = containerRef.current?.clientWidth ?? 0;
    x.set(x.get() + width);
    normalize();
    resume();
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      pause();
      x.set(x.get() - e.deltaX);
      normalize();
      clearTimeout(wheelTimeout.current);
      wheelTimeout.current = setTimeout(resume, 200);
    }
  };

  const items = [...skills, ...skills, ...skills];

  return (
    <section
      role="region"
      aria-label="Skills carousel"
      className="relative w-full"
    >
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label="Previous skill"
          onClick={handlePrev}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          aria-label="Next skill"
          onClick={handleNext}
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div
        ref={containerRef}
        className="overflow-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        onWheel={handleWheel}
        tabIndex={0}
      >
        <motion.div
          ref={trackRef}
          className="flex gap-2 cursor-grab active:cursor-grabbing"
          drag="x"
          dragMomentum={false}
          style={{ x }}
          onDragStart={pause}
          onDragEnd={() => {
            resume();
            normalize();
          }}
          onDrag={() => {
            normalize();
          }}
        >
          {items.map((skill, i) => (
            <Badge key={`${skill}-${i}`} className="shrink-0">
              {skill}
            </Badge>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

