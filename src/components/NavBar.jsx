import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X, Github } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
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
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold text-primary">
          <span className="relative z-10">
            <span className=" text-primary"> JakobNieß</span>
          </span>
        </a>

        {/*Desktop */}

        <div className="hidden md:flex gap-8 space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-secondary hover:text-primary transition-color duration-300 "
            >
              {item.name}
            </a>
          ))}
        </div>
        {/*Mobile */}

        <button
          className="md:hidden p2 z-50"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl h-full align-center justify-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-secondary hover:text-primary transition-color duration-300 "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden md:flex ">
          <Github />
        </div>
      </div>
    </nav>
  );
};
