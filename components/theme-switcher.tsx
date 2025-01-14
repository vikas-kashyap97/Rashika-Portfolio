"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"

export function ThemeSwitcher() {
  const { currentTheme, setTheme, themes } = useTheme()

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/20 backdrop-blur-lg rounded-lg p-2">
      <div className="flex gap-2">
        {themes.map((theme) => (
          <motion.button
            key={theme.name}
            onClick={() => setTheme(theme)}
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: theme.primary }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: currentTheme.name === theme.name ? 1.2 : 1,
              border: currentTheme.name === theme.name ? "2px solid white" : "none"
            }}
          />
        ))}
      </div>
    </div>
  )
}

