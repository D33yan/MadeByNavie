"use client"

import { useState, useEffect } from "react"

interface NavieLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  variant?: "full" | "icon" | "text"
  animated?: boolean
  className?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
}

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
  xl: "text-4xl",
}

// NavieLogo: SVG logo for MadeByNavie branding
export function NavieLogo({ size = "md", variant = "icon", animated = true, className = "", onClick }: NavieLogoProps) {
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className={`${sizeClasses[size]} ${className}`} />
  }

  const LogoIcon = () => (
    <div
      className={`${sizeClasses[size]} relative group ${animated ? "transition-all duration-500" : ""} ${onClick ? "cursor-pointer" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Outer Ring - Represents creativity and innovation */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-navie-secondary-400/30 ${animated && isHovered ? "rotate-180 scale-110" : ""} transition-all duration-700`}
      />

      {/* Inner Ring - Represents technical precision */}
      <div
        className={`absolute inset-1 rounded-full border border-navie-accent-400/40 ${animated && isHovered ? "-rotate-90 scale-105" : ""} transition-all duration-500`}
      />

      {/* Core Symbol - "N" for Navie */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          viewBox="0 0 24 24"
          className={`w-3/5 h-3/5 ${animated && isHovered ? "scale-110" : ""} transition-all duration-300`}
          fill="none"
        >
          {/* Custom "N" design with geometric elements */}
          <path
            d="M6 4L6 20M18 4L18 20M6 4L18 20"
            stroke="url(#navie-gradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={animated ? "animate-pulse" : ""}
          />

          {/* Accent dots representing pixels/creativity */}
          <circle cx="9" cy="8" r="1" fill="currentColor" className="text-navie-accent-400" />
          <circle cx="15" cy="16" r="1" fill="currentColor" className="text-navie-secondary-400" />

          <defs>
            <linearGradient id="navie-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow effect on hover */}
      {animated && isHovered && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-navie-secondary-500/20 via-navie-accent-500/20 to-navie-primary-500/20 blur-md animate-pulse" />
      )}
    </div>
  )

  const LogoText = ({ showIcon = false }: { showIcon?: boolean }) => (
    <div className={`flex items-center space-x-3 ${onClick ? "cursor-pointer" : ""} group`} onClick={onClick}>
      {showIcon && <LogoIcon />}
      <div className="flex flex-col">
        <span
          className={`${textSizeClasses[size]} font-bold leading-none gradient-navie-text ${animated ? "group-hover:scale-105 transition-transform duration-300" : ""}`}
        >
          MadeBy
          <span className="text-navie-accent-400">Navie</span>
        </span>
        {size !== "sm" && (
          <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase opacity-70">
            Where Tech Meets Art
          </span>
        )}
      </div>
    </div>
  )

  if (variant === "icon") {
    return <LogoIcon />
  }

  if (variant === "text") {
    return <LogoText />
  }

  return <LogoText showIcon={true} />
}
