import { create } from "zustand";
import { useEffect } from "react";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme);
    set({ theme: newTheme }); // Update Zustand state
    document.documentElement.setAttribute("data-theme", newTheme);
  },
}));

// Apply theme when the app loads
export const useInitTheme = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
};
