"use client"

import type { ReactNode } from "react"
import { useStaggeredAnimation } from "@/hooks/use-scroll-animations"

interface StaggeredListProps {
  children: ReactNode[]
  className?: string
  itemClassName?: string
  staggerDelay?: number
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale-in"
}

// StaggeredList: Animates a list of children with staggered timing
export function StaggeredList({
  children,
  className = "",
  itemClassName = "",
  staggerDelay = 100,
  animation = "fade-up",
}: StaggeredListProps) {
  const { containerRef, visibleItems } = useStaggeredAnimation(children.length, staggerDelay)

  const getItemClasses = (index: number, isVisible: boolean) => {
    const baseClasses = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-6`
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-6`
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-6`
        case "scale-in":
          return `${baseClasses} opacity-0 scale-95`
        default:
          return `${baseClasses} opacity-0 translate-y-6`
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
