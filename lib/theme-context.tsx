"use client"

import { createContext, useContext, useState } from "react"

type Theme = {
  name: string
  primary: string
  secondary: string
  accent: string
  background: string
}

const themes: Theme[] = [
  {
    name: "Red",
    primary: "#FF4545",
    secondary: "#FF6B6B",
    accent: "#FF8787",
    background: "from-red-600 to-red-900"
  },
  {
    name: "Blue",
    primary: "#0000FF",
    secondary: "#4040FF",
    accent: "#6666FF",
    background: "from-blue-600 to-blue-900"
  },
  {
    name: "Gold",
    primary: "#FFC300",
    secondary: "#FFD700",
    accent: "#FFE44D",
    background: "from-yellow-600 to-yellow-900"
  },
  {
    name: "Teal",
    primary: "#1E5B53",
    secondary: "#2C7A6E",
    accent: "#3B9A8F",
    background: "from-teal-600 to-teal-900"
  }
]

type ThemeContextType = {
  currentTheme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState(themes[0])

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

