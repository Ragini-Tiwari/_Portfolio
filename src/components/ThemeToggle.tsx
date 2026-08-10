"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "govind-portfolio-theme";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const domTheme = document.documentElement.dataset.theme;
  return domTheme === "light" ? "light" : "dark";
}

export default function ThemeToggle({ floating = false }: { floating?: boolean }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDark);
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(storageKey, theme);
  }, [isDark, theme]);

  return (
    <button
      type="button"
      className={floating ? "theme-toggle-floating" : "theme-toggle"}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
