"use client";

import { useState, type CSSProperties } from "react";
import { SKILLS, type Role } from "@/data/skills";
import { cn } from "@/lib/utils";

const ROLE_TABS: readonly (Role | "All")[] = [
  "All",
  "Data Engineering",
  "Data Analytics",
  "AI Engineering",
] as const;

const HIGHLIGHT_COLOR = "#FFB100";

export default function SkillsGrid() {
  const [role, setRole] = useState<(typeof ROLE_TABS)[number]>("All");

  return (
    <div>
      <div className="mb-6 flex justify-center gap-2">
        {ROLE_TABS.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            aria-pressed={role === r}
            className={cn(
              "rounded-full px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight)]",
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
      <div className="flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill) => {
          const active = role === "All" || skill.roles.includes(role as Role);
          return (
            <div
              key={skill.id}
              tabIndex={0}
              className={cn(
                "flex h-12 items-center gap-2 rounded-full px-4 text-sm font-medium transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--highlight)]",
                "hover:scale-105 shadow-sm",
                "bg-black text-white dark:bg-white dark:text-black",
              )}
              style={{ "--highlight": HIGHLIGHT_COLOR } as CSSProperties}
            >
              <skill.icon
                className={cn(
                  "h-5 w-5 transition-colors",
                  role === "All"
                    ? ""
                    : active
                      ? "text-[var(--highlight)]"
                      : "text-gray-400 opacity-50",
                )}
                aria-hidden="true"
              />
              <span
                className={cn(
                  "transition-colors",
                  role === "All" ? "" : active ? "" : "text-gray-400 opacity-50",
                )}
              >
                {skill.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

