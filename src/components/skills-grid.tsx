"use client";

import { useState, useRef, type CSSProperties } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";

import { SKILLS, type Role } from "@/data/skills";
import { cn } from "@/lib/utils";

const ROLE_TABS: readonly (Role | "All")[] = [
  "All",
  "Data Engineering",
  "Data Analytics",
  "AI Engineering",
] as const;

// Subtle pink-violet accent
const HIGHLIGHT_COLOR = "rgba(255,120,255,0.7)";

export default function SkillsGrid() {
  const [role, setRole] = useState<(typeof ROLE_TABS)[number]>("All");
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const skills =
    role === "All" ? SKILLS : SKILLS.filter((s) => s.roles.includes(role as Role));

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.08, duration: 0.2, ease: "easeOut" }}
        className="mb-6 flex gap-2 overflow-x-auto pb-2 pt-1 sm:justify-center"
      >
        {ROLE_TABS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            aria-pressed={role === r}
            className={cn(
              "flex-shrink-0 rounded-md px-4 py-1.5 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--highlight)]",
              role === r
                ? "bg-[var(--highlight)]/20 text-black dark:text-white border border-[var(--highlight)] shadow-[0_0_8px_var(--highlight)]"
                : "border border-black text-black dark:border-white dark:text-white hover:shadow-[0_0_6px_var(--highlight)]",
            )}
            style={{ "--highlight": HIGHLIGHT_COLOR } as CSSProperties}
          >
            {r}
          </button>
        ))}
      </motion.div>
      <motion.div
        className="grid grid-cols-2 gap-2 justify-items-center sm:grid-cols-3 md:grid-cols-4"
      >
        <AnimatePresence initial={false} mode="wait">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 8,
                filter: prefersReducedMotion ? "none" : "blur(4px)",
              }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 8,
                filter: prefersReducedMotion ? "none" : "blur(4px)",
              }}
              transition={{
                delay: i * 0.05,
                duration: 0.2,
                ease: "easeOut",
              }}
              className={cn(
                "flex items-center gap-1 rounded-full border border-black px-2 py-1 text-xs text-black transition-shadow dark:border-white dark:text-white",
              )}
            >
              <skill.icon
                className={cn(
                  "h-3 w-3 flex-shrink-0",
                )}
                aria-hidden="true"
              />
              <span
                className="text-xs font-medium"
              >
                {skill.label}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

