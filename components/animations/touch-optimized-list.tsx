"use client"

import type { ReactNode } from "react"
import { useTouchOptimizedStagger } from "@/hooks/use-mobile-optimized-animations"

interface TouchOptimizedListProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale-in"
  mobileAnimation?: "fade-up" | "slide-left" | "slide-right" | "scale-in" | "none"
}

// TouchOptimizedList: Staggered animation list optimized for touch/mobile devices
export function TouchOptimizedList({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 80,
  animation = "fade-up",
  mobileAnimation = "fade-up",
}: TouchOptimizedListProps) {
  const { containerRef, visibleItems, isMobile } = useTouchOptimizedStagger(children.length, staggerDelay)

  const getItemClasses = (index: number, isVisible: boolean) => {
    const currentAnimation = isMobile && mobileAnimation ? mobileAnimation : animation
    // Reduced duration for swifter animations
    const mobileDuration = isMobile ? 400 : 500
    const baseClasses = `transition-all duration-[${mobileDuration}ms] ease-out`

    if (currentAnimation === "none") {
      return "opacity-100"
    }

    if (!isVisible) {
      switch (currentAnimation) {
        case "fade-up":
          return `${baseClasses} opacity-0 ${isMobile ? "translate-y-2" : "translate-y-3"}` // Reduced movement
        case "slide-left":
          return `${baseClasses} opacity-0 ${isMobile ? "-translate-x-2" : "-translate-x-3"}` // Reduced movement
        case "slide-right":
          return `${baseClasses} opacity-0 ${isMobile ? "translate-x-2" : "translate-x-3"}` // Reduced movement
        case "scale-in":
          return `${baseClasses} opacity-0 ${isMobile ? "scale-99" : "scale-98"}` // Subtle scale
        default:
          return `${baseClasses} opacity-0 ${isMobile ? "translate-y-2" : "translate-y-3"}`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={containerRef as any} className={className}>
      {children.map((child, index) => (
        <div key={index} className={`${getItemClasses(index, visibleItems.has(index))} ${itemClassName}`}>
          {child}
        </div>
      ))}
    </div>
  )
}
