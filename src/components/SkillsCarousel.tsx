"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function SkillsCarousel() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <h2 className="text-xl font-bold mt-8 mb-4 sm:mt-0 sm:mb-0">Skills</h2>
        </BlurFade>
        <div className="overflow-x-auto">
          <div className="flex w-max gap-2 sm:gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
