"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentTheme } = useTheme();

  const navItems = ["Home", "About", "Skills", "Achievements", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Video Background */}
      <div className="relative h-[50px] md:h-[60px] lg:h-[80px] overflow-hidden">
        <video
          src="/videos/background.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-bold"
              style={{ color: currentTheme.primary }}
              whileHover={{ scale: 1.3 }}
            >
              Rashika.dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:text-primary text-sm lg:text-xl transition-colors"
                  style={{ color: currentTheme.primary }}
                  onClick={() => scrollToSection(item)}
                  aria-current={item.toLowerCase() === "home" ? "page" : undefined}
                >
                  {item}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" style={{ color: currentTheme.primary }} />
              ) : (
                <Menu className="h-6 w-6" style={{ color: currentTheme.primary }} />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`md:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm ${
              isMenuOpen ? "block" : "hidden"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isMenuOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial={{ y: "-100%" }}
              animate={{ y: isMenuOpen ? 0 : "-100%" }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-white hover:text-primary text-2xl transition-colors"
                  style={{ color: currentTheme.primary }}
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}

