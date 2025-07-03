"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animations"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "rotate-in"
  delay?: number
  duration?: number
  triggerOnce?: boolean
}

// AnimatedSection: Animates its children into view with customizable animation
export function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 800,
  triggerOnce = true,
}: AnimatedSectionProps) {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce,
    staggerDelay: delay,
  })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-[${duration}ms]`

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "fade-in":
          return `${baseClasses} ${durationClass} opacity-0`
        case "slide-left":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "slide-right":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "scale-in":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        case "rotate-in":
          return `${baseClasses} ${durationClass} opacity-0 rotate-3 scale-95`
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
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
