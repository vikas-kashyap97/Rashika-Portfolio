"use client"

import Link from "next/link"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {"<Rashika/>"}
        </Link>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="#about" className="hover:text-primary">About</Link>
          <Link href="#services" className="hover:text-primary">Services</Link>
          <Link href="#projects" className="hover:text-primary">Projects</Link>
          <Link href="#contact" className="hover:text-primary">Contact</Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

