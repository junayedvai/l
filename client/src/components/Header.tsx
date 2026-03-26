import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useCms } from "@/contexts/CmsContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useCms();
  const g = content.global;
  const h = content.header;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "IELTS", href: "/ielts" },
    { label: "Japanese", href: "/japanese" },
    { label: "Destinations", href: "/destinations" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Notice Board", href: "/notice-board" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b-4 border-golden shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <img 
              src={h.logo}
              alt={`${g.siteName} Logo`}
              className="h-12 sm:h-14 md:h-16 w-auto"
            />
            <div className="hidden sm:block">
              <p className="font-bold text-sm sm:text-base md:text-lg text-black">{g.siteName}</p>
              <p className="text-xs text-golden font-semibold">{g.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black hover:text-golden font-semibold transition-colors text-xs sm:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href={g.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-golden to-dark-golden text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105 text-xs sm:text-sm"
          >
            {h.registerButtonText}
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden pb-4 border-t-2 border-golden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 sm:py-3 text-black hover:text-golden font-semibold transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={g.registrationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-golden to-dark-golden text-white font-bold rounded-lg text-center text-sm"
            >
              {h.registerButtonText}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
