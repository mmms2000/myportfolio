import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { useScroll } from "../lib/useScroll";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skill", href: "#skills" },
  { name: "Project", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isScrolled } = useScroll(10);   

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80  shadow-xs  "
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Moses</span>
            Portfolio
          </span>
        </a>

        {/* Deskto Nav */}
        <div className="hidden md:flex  space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Mobile Nav */}

        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="md:fixed md:hidden p-2 text-foreground z-50 pr-9"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop:blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-10 z-10">
              <ThemeToggle isScrolled={isScrolled} isMenuOpen={isMenuOpen} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
