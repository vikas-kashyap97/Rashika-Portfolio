"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import { useTheme } from "@/lib/theme-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { currentTheme } = useTheme()

  const navItems = ["Home", "About", "Skills", "Achievements", "Projects", "Contact"]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold"
            style={{ color: currentTheme.primary }}
            whileHover={{ scale: 1.3 }}
          >
            Rashika.dev
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-white hover:text-primary text-xl transition-colors"
                style={{ '--tw-text-opacity': 1, color: currentTheme.primary }}
                onClick={() => scrollToSection(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden pt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="w-full text-left"
                  onClick={() => scrollToSection(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

