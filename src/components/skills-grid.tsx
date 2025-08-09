"use client";

import { useState } from "react";
import { SKILLS, type Role } from "@/data/skills";
import { cn } from "@/lib/utils";

const ROLE_TABS: readonly (Role | "All")[] = [
  "All",
  "Data Analyst",
  "Data Engineer",
  "AI Engineer",
] as const;

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
              "px-3 py-1 rounded-full text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              role === r
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            )}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {SKILLS.map((skill) => {
          const active = role === "All" || skill.roles.includes(role as Role);
          return (
            <div
              key={skill.id}
              tabIndex={0}
              className={cn(
                "flex flex-col items-center justify-center gap-2 rounded-lg p-4 text-sm font-medium transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                "hover:scale-105",
                active
                  ? "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/50 shadow-sm"
                  : "border border-muted bg-muted text-muted-foreground opacity-60"
              )}
            >
              <skill.icon className="h-6 w-6" aria-hidden="true" />
              {skill.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}

