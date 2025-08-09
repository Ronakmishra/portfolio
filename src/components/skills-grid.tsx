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

// Soft pink accent used throughout the site
const HIGHLIGHT_COLOR = "rgba(255,110,199,0.7)";

// Staggered animation with blur-to-clear effect
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: 12, filter: "blur(4px)" },
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
              "flex-shrink-0 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--highlight)]",
              role === r
                ? "bg-[var(--highlight)] text-black shadow-[0_0_8px_var(--highlight)]"
                : "bg-white text-black hover:shadow-[0_0_8px_var(--highlight)] dark:bg-black dark:text-white",
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
          className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={item}
              className={cn(
                "flex h-10 w-full items-center justify-center gap-2 rounded-full px-3 transition-shadow",
                role === "All"
                  ? "bg-white text-black hover:shadow-[0_0_8px_var(--highlight)] dark:bg-black dark:text-white"
                  : "bg-[var(--highlight)] text-black shadow-[0_0_8px_var(--highlight)]",
              )}
              style={{ "--highlight": HIGHLIGHT_COLOR } as CSSProperties}
            >
              <skill.icon className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
              <span className="text-sm font-medium">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

