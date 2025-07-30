"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  const lightTheme = {
    "--color-background": "#F5F6FB",
    "--color-dark": "#0b0b0b",
    "--color-light": "#efefef",
    "--color-border": "#292929",
    "--color-light-blue": "#0289b6",
    "--color-dark-blue": "#105474",
    "--color-aurora-background": "#0289b6",
    "--color-aurora": "#121212",
    "--color-contact": "#F5F6FB",
    "--color-border-soft": "rgba(0, 0, 0, 0.2)",
  };

  const darkTheme = {
    "--color-background": "#0b0b0b",
    "--color-dark": "#F5F6FB",
    "--color-light": "#121212",
    "--color-border": "#292929",
    "--color-light-blue": "#0289b6",
    "--color-dark-blue": "#105474",
    "--color-aurora-background": "#0b0b0b",
    "--color-aurora": "#0289b6",
    "--color-contact": "#0289b6",
    "--color-border-soft": "rgba(255, 255, 255, 0.2)",
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
      className={`p-2 rounded-full transition-colors duration-300 shadow 
        ${isDark ? "bg-white text-black" : "bg-black text-white"}`}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};
