
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? "unset" : "hidden";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navLinks = [
    { to: "/", label: "Главная" },
    { to: "/rooms", label: "Номера" },
    { to: "/about", label: "О нас" },
    { to: "/contact", label: "Контакты" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-serif font-semibold tracking-tight"
          onClick={closeMobileMenu}
        >
          Элегант
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "text-base transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground font-medium" : "text-foreground/60"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button 
            className="rounded-full px-6 bg-hotel-charcoal text-white hover:bg-hotel-charcoal/90 shadow-md" 
            asChild
          >
            <Link to="/rooms">Забронировать</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden bg-hotel-charcoal/10 hover:bg-hotel-charcoal/20"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col pt-20 p-6 h-full">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "text-xl transition-colors",
                    isActive ? "text-foreground font-medium" : "text-muted-foreground"
                  )
                }
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <Button 
              className="mt-4 rounded-full bg-hotel-charcoal text-white hover:bg-hotel-charcoal/90 shadow-md" 
              onClick={closeMobileMenu} 
              asChild
            >
              <Link to="/rooms">Забронировать</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
