import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useScroll } from "../lib/useScroll";

export const ThemeToggle = ({isMenuOpen}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isScrolled } = useScroll(10);   

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);

      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);

      document.documentElement.classList.remove("dark");
    }

    
  }, []);

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isMenuOpen]);

  console.log("isScrolle",isScrolled)

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
      window.location.reload();
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed right-5 z-50 p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none",
        isScrolled ? "top-3 md:top-2" : "top-5 md:top-4 ",
      )}
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
