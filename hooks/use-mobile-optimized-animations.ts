"use client"

import { useEffect, useRef, useState } from "react"

interface MobileAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
  staggerDelay?: number
  reducedMotion?: boolean
  mobileOptimized?: boolean
}

// Custom hooks for mobile-optimized animations and parallax effects

// useMobileOptimizedAnimation: Handles intersection observer and animation for mobile
export function useMobileOptimizedAnimation(options: MobileAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  const {
    threshold = 0.15,
    rootMargin = "0px 0px -30px 0px",
    triggerOnce = true,
    staggerDelay = 0,
    reducedMotion = false,
    mobileOptimized = true,
  } = options

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice =
        window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(isMobileDevice)
    }

    // Check for reduced motion preference
    const checkReducedMotion = () => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)
    }

    checkMobile()
    checkReducedMotion()

    window.addEventListener("resize", checkMobile)
    window.addEventListener("orientationchange", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
      window.removeEventListener("orientationchange", checkMobile)
    }
  }, [])

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (prefersReducedMotion || reducedMotion) {
      setIsVisible(true)
      return
    }

    const mobileThreshold = isMobile && mobileOptimized ? Math.min(threshold * 1.5, 0.3) : threshold
    const mobileRootMargin = isMobile && mobileOptimized ? "0px 0px -20px 0px" : rootMargin

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasTriggered || !triggerOnce) {
            // Reduced delay for swifter animations
            const delay =
              isMobile && mobileOptimized ? Math.max(staggerDelay * 0.5, 30) : Math.max(staggerDelay * 0.7, 50)
            setTimeout(() => {
              setIsVisible(true)
              if (triggerOnce) setHasTriggered(true)
            }, delay)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold: mobileThreshold, rootMargin: mobileRootMargin },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, staggerDelay, isMobile, prefersReducedMotion, mobileOptimized, hasTriggered])

  return { elementRef, isVisible, isMobile, prefersReducedMotion }
}

// useMobileParallax: Provides parallax effect for mobile
export function useMobileParallax(speed = 0.3) {
  const [offset, setOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    // Disable parallax on mobile for better performance
    if (isMobile) {
      setOffset(0)
      return
    }

    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const rate = scrolled * speed

      setOffset(rate)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, isMobile])

  return { elementRef, offset, isMobile }
}

// useTouchOptimizedStagger: Returns staggered animation delays for touch devices
export function useTouchOptimizedStagger(itemCount: number, baseDelay = 80) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [isMobile, setIsMobile] = useState(false)
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const mobileDelay = isMobile ? Math.max(baseDelay * 0.6, 40) : baseDelay
          const batchSize = isMobile ? 2 : 1 // Animate in batches on mobile

          for (let i = 0; i < itemCount; i += batchSize) {
            setTimeout(
              () => {
                setVisibleItems((prev) => {
                  const newSet = new Set(prev)
                  for (let j = i; j < Math.min(i + batchSize, itemCount); j++) {
                    newSet.add(j)
                  }
                  return newSet
                })
              },
              (i / batchSize) * mobileDelay,
            )
          }
        }
      },
      {
        threshold: isMobile ? 0.2 : 0.1,
        rootMargin: isMobile ? "0px 0px -50px 0px" : "0px 0px -100px 0px",
      },
    )

    observer.observe(container)

    return () => {
      observer.unobserve(container)
    }
  }, [itemCount, baseDelay, isMobile])

  return { containerRef, visibleItems, isMobile }
}
