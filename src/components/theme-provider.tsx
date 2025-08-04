"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <MobileDarkMode />
      {children}
    </NextThemesProvider>
  );
}

function MobileDarkMode() {
  const { setTheme } = useTheme();

  useEffect(() => {
    const storedTheme =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;

    if (!storedTheme) {
      const isMobile =
        typeof navigator !== "undefined" &&
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );

      const isSmallViewport =
        typeof window !== "undefined" ? window.innerWidth < 768 : false;

      if (isMobile || isSmallViewport) {
        setTheme("dark");
      }
    }
  }, [setTheme]);

  return null;
}
