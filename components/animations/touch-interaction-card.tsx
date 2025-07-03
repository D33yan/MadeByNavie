"use client"

import type { ReactNode } from "react"
import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface TouchInteractionCardProps {
  children: ReactNode
  className?: string
  hoverEffect?: boolean
  touchFeedback?: boolean
  scaleOnTouch?: boolean
}

// TouchInteractionCard: Card component with touch feedback and scaling for mobile
export function TouchInteractionCard({
  children,
  className = "",
  hoverEffect = true,
  touchFeedback = true,
  scaleOnTouch = true,
}: TouchInteractionCardProps) {
  const [isTouched, setIsTouched] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleTouchStart = () => {
    if (touchFeedback && isMobile) {
      setIsTouched(true)
    }
  }

  const handleTouchEnd = () => {
    if (touchFeedback && isMobile) {
      setTimeout(() => setIsTouched(false), 150)
    }
  }

  const getCardClasses = () => {
    let classes = className

    if (isMobile) {
      // Mobile-specific classes
      classes += " active:scale-[0.98] active:brightness-95"

      if (touchFeedback) {
        classes += " transition-all duration-150 ease-out"
      }

      if (isTouched && scaleOnTouch) {
        classes += " scale-[0.98] brightness-95"
      }
    } else {
      // Desktop hover effects
      if (hoverEffect) {
        classes += " hover:scale-105 hover:shadow-xl transition-all duration-300"
      }
    }

    return classes
  }

  return (
    <Card
      className={getCardClasses()}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        WebkitTapHighlightColor: "transparent",
        touchAction: "manipulation",
      }}
    >
      {children}
    </Card>
  )
}
