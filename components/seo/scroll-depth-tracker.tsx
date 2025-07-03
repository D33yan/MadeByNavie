"use client"

import { useEffect, useRef, useState } from "react"
import { trackScrollDepth } from "./analytics"

export function ScrollDepthTracker() {
  const trackedDepths = useRef(new Set<number>())
  const lastScrollTime = useRef(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    const handleScroll = () => {
      const now = Date.now()

      // Throttle scroll events
      if (now - lastScrollTime.current < 100) return
      lastScrollTime.current = now

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / documentHeight) * 100)

      // Track at 25%, 50%, 75%, and 100% scroll depths
      const depths = [25, 50, 75, 100]

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth)
          trackScrollDepth(depth)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [mounted])

  return null
}
