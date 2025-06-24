import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Github } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center w-full">
      <nav
        className={cn(
          "fixed w-full py-4 z-40 transition-all duration-300 top-0 max-w-7xl border-white/50 margin-x-auto",
          "md:py-2 md:border-2 md:top-5 md:rounded-lg md:backdrop-blur-[4px] md:bg-black/25"
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            className="text-xl font-bold text-primary flex items-center"
            href="#hero"
          >
            <span className="relative z-10">
              <span className="text-primary"> JakobNieß </span>{" "}
            </span>
          </a>

          {/*Desktop */}

          <div className="hidden md:flex gap-8 space-x-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-text font-bold hover:text-primary transition-color duration-300 dark:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/*Mobile */}

          <button
            className="md:hidden text-text p2 z-50"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu />}
          </button>

          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col space-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-text hover:text-primary transition-color duration-300 "
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <a
            href="https://github.com/Jbob0815"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-text md:flex hover:text-primary transition-color duration-300 cursor-pointer"
          >
            <Github />
          </a>
        </div>
      </nav>
    </div>
  );
};
