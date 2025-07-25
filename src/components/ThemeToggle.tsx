"use client";

import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const lightTheme = {
    "--color-background": "#F5F6FB",
    "--color-dark": "#0b0b0b",
    "--color-light": "#efefef",
    "--color-border": "#292929",
    "--color-light-blue": "#0289b6",
    "--color-dark-blue": "#105474",
  };

  const darkTheme = {
    "--color-background": "#0b0b0b",
    "--color-dark": "#F5F6FB",
    "--color-light": "#121212",
    "--color-border": "#292929",
    "--color-light-blue": "#0289b6",
    "--color-dark-blue": "#105474",
  };

  const applyTheme = (theme: Record<string, string>) => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      applyTheme(darkTheme);
      setIsDark(true);
    } else {
      applyTheme(lightTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? lightTheme : darkTheme;
    applyTheme(newTheme);
    setIsDark(!isDark);
    localStorage.setItem("theme", isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 text-sm rounded bg-light-blue text-black font-medium"
    >
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};
