import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  const currentDate = new Date().getTime();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date).getTime();
  const diff = targetDate - currentDate;
  const isFuture = diff > 0;
  const daysDiff = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));

  const fullDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (daysDiff < 1) {
    return "Today";
  }

  if (isFuture) {
    if (daysDiff < 7) {
      return `${fullDate} (in ${daysDiff}d)`;
    } else if (daysDiff < 30) {
      const weeks = Math.floor(daysDiff / 7);
      return `${fullDate} (in ${weeks}w)`;
    } else if (daysDiff < 365) {
      const months = Math.floor(daysDiff / 30);
      return `${fullDate} (in ${months}mo)`;
    } else {
      const years = Math.floor(daysDiff / 365);
      return `${fullDate} (in ${years}y)`;
    }
  }

  if (daysDiff < 7) {
    return `${fullDate} (${daysDiff}d ago)`;
  } else if (daysDiff < 30) {
    const weeksAgo = Math.floor(daysDiff / 7);
    return `${fullDate} (${weeksAgo}w ago)`;
  } else if (daysDiff < 365) {
    const monthsAgo = Math.floor(daysDiff / 30);
    return `${fullDate} (${monthsAgo}mo ago)`;
  } else {
    const yearsAgo = Math.floor(daysDiff / 365);
    return `${fullDate} (${yearsAgo}y ago)`;
  }
}
