import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogIn, LogOut, UserCog } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import logo from "@/assets/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

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
          className="flex items-center"
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="236 метров" className="h-16 w-auto" />
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
                  isActive ? "text-black font-medium" : "text-black"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          {isAdmin && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                cn(
                  "text-base transition-colors hover:text-foreground/80 flex items-center gap-2",
                  isActive ? "text-black font-medium" : "text-black"
                )
              }
            >
              <UserCog className="h-4 w-4" />
              Админ
            </NavLink>
          )}
          <Button
            className="rounded-full px-6 bg-hotel-charcoal text-white hover:bg-hotel-charcoal/90 shadow-md"
            asChild
          >
            <Link to="/rooms">Забронировать</Link>
          </Button>
          {user ? (
            <Button
              variant="outline"
              onClick={() => signOut()}
              className="rounded-full px-6 flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Выход
            </Button>
          ) : (
            <Button
              variant="outline"
              asChild
              className="rounded-full px-6 flex items-center gap-2"
            >
              <Link to="/auth">
                <LogIn className="h-4 w-4" />
                Вход
              </Link>
            </Button>
          )}
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
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )
                }
                onClick={closeMobileMenu}
              >
                {link.label}
              </NavLink>
            ))}
            {isAdmin && (
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  cn(
                    "text-xl transition-colors flex items-center gap-2",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground"
                  )
                }
                onClick={closeMobileMenu}
              >
                <UserCog className="h-5 w-5" />
                Админ панель
              </NavLink>
            )}
            <Button
              className="mt-4 rounded-full bg-hotel-charcoal text-white hover:bg-hotel-charcoal/90 shadow-md"
              onClick={closeMobileMenu}
              asChild
            >
              <Link to="/rooms">Забронировать</Link>
            </Button>
            {user ? (
              <Button
                variant="outline"
                onClick={() => {
                  signOut();
                  closeMobileMenu();
                }}
                className="rounded-full flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Выход
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={closeMobileMenu}
                asChild
                className="rounded-full flex items-center gap-2"
              >
                <Link to="/auth">
                  <LogIn className="h-4 w-4" />
                  Вход
                </Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
