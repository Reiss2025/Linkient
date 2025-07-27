"use client";

import { ThemeType } from "@/lib/types";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const _localTheme = localStorage.getItem("theme") as "light" | "dark";
    if (_localTheme) {
      switchTheme(_localTheme);
    }
  });

  const switchTheme = (theme: "light" | "dark") => {
    if (!theme) {
      console.warn("No theme selected");
      return;
    }

    if(theme === 'dark'){
        document.documentElement.classList.add('dark');
    }else{
        document.documentElement.classList.remove('dark');
    }

    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ switchTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be within a ThemeProvider");
  return context;
};

export { ThemeProvider, useTheme };
