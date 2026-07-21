import { useEffect, useState } from "react";

export type SiteTheme = "dark" | "light";

const THEME_KEY = "socialstack-theme";

function readStoredTheme(): SiteTheme {
  if (typeof window === "undefined") return "dark";
  return window.localStorage.getItem(THEME_KEY) === "light" ? "light" : "dark";
}

export function usePersistentTheme() {
  const [theme, setTheme] = useState<SiteTheme>(readStoredTheme);

  useEffect(() => {
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return [theme, setTheme] as const;
}
