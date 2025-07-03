"use client"

import { type ReactNode, useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

// ScrollReveal: Animates children into view when they enter the viewport
export function ScrollReveal({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -100px 0px",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      } ${className}`}
    >
      {children}
    </div>
  )
}
