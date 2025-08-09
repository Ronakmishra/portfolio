"use client";

import { useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { SKILLS, type Role } from "@/data/skills";
import { cn } from "@/lib/utils";

const ROLE_TABS: readonly (Role | "All")[] = [
  "All",
  "Data Engineering",
  "Data Analytics",
  "AI Engineering",
] as const;

const HIGHLIGHT_COLOR = "#FFB100";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export default function SkillsGrid() {
  const [role, setRole] = useState<(typeof ROLE_TABS)[number]>("All");

  const skills =
    role === "All" ? SKILLS : SKILLS.filter((s) => s.roles.includes(role as Role));

  return (
    <div>
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2 pt-1 sm:justify-center">
        {ROLE_TABS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            aria-pressed={role === r}
            className={cn(
              "flex-shrink-0 rounded-full px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight)]",
              role === r
                ? "bg-[var(--highlight)] text-black"
                : "bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80",
            )}
            style={{ "--highlight": HIGHLIGHT_COLOR } as CSSProperties}
          >
            {r}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={role}
          variants={container}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={item}
              className={cn(
                "flex h-20 w-full items-center justify-center gap-3 rounded-full px-4 shadow-sm transition-transform",
                "bg-black dark:bg-white",
                role === "All"
                  ? "text-white dark:text-black hover:scale-105"
                  : "text-[var(--highlight)]",
              )}
              style={{ "--highlight": HIGHLIGHT_COLOR } as CSSProperties}
            >
              <skill.icon className="h-10 w-10 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium sm:text-base">
                {skill.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

