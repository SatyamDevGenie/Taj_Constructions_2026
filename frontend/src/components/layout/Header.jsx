import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { navLinks } from "../../data/navigation";
import Button from "../ui/Button";

function Logo({ className = "" }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <div className="relative">
        <svg viewBox="0 0 48 48" className="w-10 h-10 sm:w-12 sm:h-12" fill="none">
          <path d="M4 22L24 6L44 22V42H4V22Z" stroke="#C9A962" strokeWidth="2" fill="none" />
          <path d="M18 42V28H30V42" stroke="#C9A962" strokeWidth="2" fill="none" />
          <rect x="20" y="14" width="8" height="6" stroke="#C9A962" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <div>
        <span className="block font-display text-lg sm:text-xl font-bold text-white tracking-wide leading-none">
          TAAJ
        </span>
        <span className="block text-[10px] sm:text-xs text-brand-gold font-body font-semibold tracking-[0.25em] uppercase">
          Constructions Ltd
        </span>
      </div>
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-xl shadow-2xl shadow-black/30"
          : "bg-brand-black"
      }`}
    >
      <div className="container-tight flex items-center justify-between py-4 lg:py-5">
        <Logo />

        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-body font-medium uppercase tracking-wider transition-colors duration-300 ${
                  location.pathname === link.path ||
                  (link.children && location.pathname.startsWith(link.path))
                    ? "text-brand-gold"
                    : "text-white/80 hover:text-brand-gold"
                }`}
              >
                {link.label}
                {link.children && <HiChevronDown className="text-xs" />}
              </Link>

              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 pt-2 w-64"
                  >
                    <div className="bg-brand-charcoal border border-white/10 rounded-sm shadow-2xl py-2 overflow-hidden">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-5 py-2.5 text-sm text-white/70 hover:text-brand-gold hover:bg-white/5 transition-all font-body"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button to="/contact" variant="primary" size="sm">
            Get A Quote
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-white p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX className="w-7 h-7" /> : <HiMenu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-brand-charcoal border-t border-white/10 overflow-hidden"
          >
            <nav className="container-tight py-6 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    to={link.path}
                    className="block py-3 text-white font-body font-medium uppercase tracking-wider border-b border-white/5 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 py-2 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2 text-sm text-white/60 hover:text-brand-gold transition-colors font-body"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Button to="/contact" variant="primary" size="md" className="w-full">
                  Get A Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
