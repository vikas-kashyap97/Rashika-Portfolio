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
    primary: "#fe0000",
    secondary: "#fe003e",
    accent: "#e11d1d",
    background: "from-red-600 to-red-900"
  },
  {
    name: "Aqua",
    primary: "#00ffff",
    secondary: "#1affff",
    accent: "#4dffff",
    background: "from-aqua-600 to-aqua-900"
  },
  {
    name: "Gold",
    primary: "#FFC300",
    secondary: "#ffcf35",
    accent: "#e7c400",
    background: "from-yellow-600 to-yellow-900"
  },
  {
    name: "Green",
    primary: "#00ff00",
    secondary: "#35ff35",
    accent: "#00ee00",
    background: "from-green-600 to-green-900"
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

