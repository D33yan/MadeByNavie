"use client"

import type { ReactNode } from "react"
import { useMobileParallax } from "@/hooks/use-mobile-optimized-animations"

interface MobileParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
  direction?: "up" | "down" | "left" | "right"
  disableOnMobile?: boolean
}

// MobileParallax: Parallax effect for mobile and desktop backgrounds
export function MobileParallax({
  children,
  speed = 0.1,
  className = "",
  direction = "up",
  disableOnMobile = false,
}: MobileParallaxProps) {
  const { elementRef, offset, isMobile } = useMobileParallax(speed)

  const getTransform = () => {
    // Disable parallax on mobile if specified
    if (isMobile && disableOnMobile) {
      return "none"
    }

    // Reduce parallax effect on mobile
    const mobileOffset = isMobile ? offset * 0.5 : offset

    switch (direction) {
      case "up":
        return `translateY(${-mobileOffset}px)`
      case "down":
        return `translateY(${mobileOffset}px)`
      case "left":
        return `translateX(${-mobileOffset}px)`
      case "right":
        return `translateX(${mobileOffset}px)`
      default:
        return `translateY(${-mobileOffset}px)`
    }
  }

  return (
    <div
      ref={elementRef as any}
      className={className}
      style={{
        transform: getTransform(),
        willChange: isMobile && disableOnMobile ? "auto" : "transform",
      }}
    >
      {children}
    </div>
  )
}
