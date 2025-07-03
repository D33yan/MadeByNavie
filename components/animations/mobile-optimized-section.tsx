"use client"

import type { ReactNode } from "react"
import { useMobileOptimizedAnimation } from "@/hooks/use-mobile-optimized-animations"

interface MobileOptimizedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "rotate-in" | "none"
  delay?: number
  duration?: number
  triggerOnce?: boolean
  mobileAnimation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "none"
}

// MobileOptimizedSection: Section wrapper with mobile-optimized animation
export function MobileOptimizedSection({
  children,
  className = "",
  animation = "fade-in",
  mobileAnimation = "fade-in",
  delay = 0,
  duration = 600, // Shorter duration for mobile
  triggerOnce = true,
}: MobileOptimizedSectionProps) {
  const { elementRef, isVisible, isMobile, prefersReducedMotion } = useMobileOptimizedAnimation({
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
    triggerOnce,
    staggerDelay: delay,
  })

  // Update animation classes for swifter, cleaner animations
  const getAnimationClasses = () => {
    if (prefersReducedMotion) {
      return "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0"
    }

    const currentAnimation = isMobile && mobileAnimation ? mobileAnimation : animation
    // Reduced duration for swifter animations
    const mobileDuration = isMobile ? Math.max(duration * 0.6, 300) : Math.max(duration * 0.8, 400)
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${mobileDuration}ms]`

    if (currentAnimation === "none") {
      return "opacity-100"
    }

    if (!isVisible) {
      switch (currentAnimation) {
        case "fade-up":
          return `${baseClasses} ${durationClass} opacity-0 ${isMobile ? "translate-y-2" : "translate-y-4"}` // Reduced movement
        case "fade-in":
          return `${baseClasses} ${durationClass} opacity-0`
        case "slide-left":
          return `${baseClasses} ${durationClass} opacity-0 ${isMobile ? "-translate-x-2" : "-translate-x-4"}` // Reduced movement
        case "slide-right":
          return `${baseClasses} ${durationClass} opacity-0 ${isMobile ? "translate-x-2" : "translate-x-4"}` // Reduced movement
        case "scale-in":
          return `${baseClasses} ${durationClass} opacity-0 ${isMobile ? "scale-99" : "scale-98"}` // Subtle scale
        case "rotate-in":
          return `${baseClasses} ${durationClass} opacity-0 ${isMobile ? "rotate-0.5 scale-99" : "rotate-1 scale-98"}` // Reduced rotation
        default:
          return `${baseClasses} ${durationClass} opacity-0 ${isMobile ? "translate-y-2" : "translate-y-4"}`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
  }

  return (
    <div ref={elementRef as any} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
