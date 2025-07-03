"use client"

import { useEffect, useState } from "react"

export function useMobilePerformance() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowEndDevice, setIsLowEndDevice] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [connectionSpeed, setConnectionSpeed] = useState<"slow" | "fast">("fast")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkDeviceCapabilities = () => {
      if (typeof window === "undefined") return

      // Check if mobile
      const mobile =
        window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)

      // Check for low-end device indicators
      const hardwareConcurrency = navigator.hardwareConcurrency || 4
      const deviceMemory = (navigator as any).deviceMemory || 4
      const isLowEnd = hardwareConcurrency <= 2 || deviceMemory <= 2
      setIsLowEndDevice(isLowEnd)

      // Check reduced motion preference
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)

      // Check connection speed
      const connection = (navigator as any).connection
      if (connection) {
        const slowConnections = ["slow-2g", "2g", "3g"]
        setConnectionSpeed(slowConnections.includes(connection.effectiveType) ? "slow" : "fast")
      }
    }

    checkDeviceCapabilities()

    // Listen for changes
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
      mediaQuery.addEventListener("change", handleChange)

      window.addEventListener("resize", checkDeviceCapabilities)

      return () => {
        mediaQuery.removeEventListener("change", handleChange)
        window.removeEventListener("resize", checkDeviceCapabilities)
      }
    }
  }, [])

  const shouldReduceAnimations = prefersReducedMotion || isLowEndDevice || connectionSpeed === "slow"

  return {
    isMobile,
    isLowEndDevice,
    prefersReducedMotion,
    connectionSpeed,
    shouldReduceAnimations,
    mounted,
  }
}
