"use client"

import { useState, useEffect } from "react"

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  autoPlay?: boolean
  onClick?: () => void
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-24 h-24",
  xl: "w-32 h-32",
}

// AnimatedLogo: Animated SVG logo for branding and hero sections
export function AnimatedLogo({ size = "md", className = "", autoPlay = false, onClick }: AnimatedLogoProps) {
  const [isAnimating, setIsAnimating] = useState(autoPlay)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setIsAnimating(true)
        setTimeout(() => setIsAnimating(false), 2000)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [autoPlay])

  if (!mounted) {
    return <div className={`${sizeClasses[size]} ${className}`} />
  }

  return (
    <div
      className={`${sizeClasses[size]} relative ${onClick ? "cursor-pointer" : ""} ${className}`}
      onClick={onClick}
      onMouseEnter={() => !autoPlay && setIsAnimating(true)}
      onMouseLeave={() => !autoPlay && setIsAnimating(false)}
    >
      {/* Background glow */}
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-r from-navie-secondary-500/20 via-navie-accent-500/20 to-navie-primary-500/20 blur-xl ${isAnimating ? "animate-pulse" : ""}`}
      />

      {/* Outer rotating ring */}
      <div
        className={`absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-navie-secondary-400 via-navie-accent-400 to-navie-primary-400 ${isAnimating ? "animate-spin" : ""}`}
        style={{ animationDuration: "3s" }}
      >
        <div className="absolute inset-0.5 rounded-full bg-background" />
      </div>

      {/* Middle ring */}
      <div
        className={`absolute inset-2 rounded-full border border-navie-accent-400/40 ${isAnimating ? "animate-pulse" : ""}`}
      />

      {/* Inner content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className={`w-3/5 h-3/5 ${isAnimating ? "animate-bounce" : ""}`} fill="none">
          {/* Animated "N" with path drawing effect */}
          <path
            d="M10 8L10 32M30 8L30 32M10 8L30 32"
            stroke="url(#animated-gradient)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={isAnimating ? "animate-pulse" : ""}
            style={{
              strokeDasharray: isAnimating ? "100" : "0",
              strokeDashoffset: isAnimating ? "0" : "100",
              transition: "stroke-dashoffset 1.5s ease-in-out",
            }}
          />

          {/* Floating particles */}
          <circle
            cx="15"
            cy="14"
            r="1.5"
            fill="currentColor"
            className={`text-navie-accent-400 ${isAnimating ? "animate-ping" : ""}`}
            style={{ animationDelay: "0.5s" }}
          />
          <circle
            cx="25"
            cy="26"
            r="1.5"
            fill="currentColor"
            className={`text-navie-secondary-400 ${isAnimating ? "animate-ping" : ""}`}
            style={{ animationDelay: "1s" }}
          />
          <circle
            cx="20"
            cy="20"
            r="1"
            fill="currentColor"
            className={`text-navie-primary-400 ${isAnimating ? "animate-ping" : ""}`}
            style={{ animationDelay: "1.5s" }}
          />

          <defs>
            <linearGradient id="animated-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6">
                {isAnimating && (
                  <animate
                    attributeName="stop-color"
                    values="#8b5cf6;#06b6d4;#1e293b;#8b5cf6"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                )}
              </stop>
              <stop offset="50%" stopColor="#06b6d4">
                {isAnimating && (
                  <animate
                    attributeName="stop-color"
                    values="#06b6d4;#1e293b;#8b5cf6;#06b6d4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                )}
              </stop>
              <stop offset="100%" stopColor="#1e293b">
                {isAnimating && (
                  <animate
                    attributeName="stop-color"
                    values="#1e293b;#8b5cf6;#06b6d4;#1e293b"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                )}
              </stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand text overlay for larger sizes */}
      {(size === "lg" || size === "xl") && (
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className={`text-xs font-bold gradient-navie-text ${isAnimating ? "animate-pulse" : ""}`}>
            MadeByNavie
          </div>
        </div>
      )}
    </div>
  )
}
