"use client"

import type { ReactNode } from "react"
import { useParallax } from "@/hooks/use-scroll-animations"

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
}

// ParallaxElement: Applies a parallax effect to its children based on scroll
export function ParallaxElement({ children, speed = 0.5, className = "", direction = "up" }: ParallaxElementProps) {
  const { elementRef, offset } = useParallax(speed)

  const getTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${-offset}px)`
      case "down":
        return `translateY(${offset}px)`
      case "left":
        return `translateX(${-offset}px)`
      case "right":
        return `translateX(${offset}px)`
      default:
        return `translateY(${-offset}px)`
    }
  }

  return (
    <div ref={elementRef as any} className={className} style={{ transform: getTransform() }}>
      {children}
    </div>
  )
}
