type ThemeType = {
  switchTheme: (theme: "light" | "dark") => void;
  currentTheme: "light" | "dark";
};

export type { ThemeType };
