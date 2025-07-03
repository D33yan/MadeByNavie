"use client"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  staggerDelay?: number
}

// Custom hooks for scroll-based animations and parallax effects

// useScrollAnimation: Handles intersection observer and animation on scroll
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true, staggerDelay = 0 } = options

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            setTimeout(() => {
              setIsVisible(true)
              if (triggerOnce) setHasTriggered(true)
            }, staggerDelay)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, staggerDelay, hasTriggered])

  return { elementRef, isVisible }
}

// useParallax: Provides parallax effect for scroll
export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * speed

      setOffset(rate)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { elementRef, offset }
}

// useStaggeredAnimation: Returns staggered animation delays for scroll-based lists
export function useStaggeredAnimation(itemCount: number, baseDelay = 100) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, i]))
            }, i * baseDelay)
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [itemCount, baseDelay])

  return { containerRef, visibleItems }
}
