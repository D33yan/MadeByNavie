"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "./theme-provider"

// ThemeToggle: Button to toggle between light and dark mode
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Show a placeholder button during SSR to prevent layout shift
  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="w-10 h-10 p-0 rounded-full border-white/20 bg-white/5 backdrop-blur-xl"
        disabled
      >
        <div className="w-4 h-4" />
      </Button>
    )
  }

  const isDark =
    theme === "dark" ||
    (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative w-10 h-10 p-0 rounded-full border-white/20 dark:border-white/20 light:border-slate-300/50 bg-white/5 dark:bg-white/5 light:bg-slate-100/80 backdrop-blur-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200/80 transition-all duration-500 group overflow-hidden"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-4 h-4">
        <Sun
          className={`absolute inset-0 w-4 h-4 text-amber-500 transition-all duration-500 ${
            isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 w-4 h-4 text-indigo-400 transition-all duration-500 ${
            isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Button>
  )
}
