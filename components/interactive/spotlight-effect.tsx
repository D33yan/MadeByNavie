"use client"

import { useEffect, useRef, useState } from "react"

interface SpotlightEffectProps {
  children?: React.ReactNode
  className?: string
}

export function SpotlightEffect({ children, className = "" }: SpotlightEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsDesktop(!window.matchMedia("(hover: none)").matches)
  }, [])

  useEffect(() => {
    if (!isDesktop || !containerRef.current || !spotlightRef.current) return

    const container = containerRef.current
    const spotlight = spotlightRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      spotlight.style.left = `${x}px`
      spotlight.style.top = `${y}px`
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDesktop])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {isDesktop && (
        <div
          ref={spotlightRef}
          className={`pointer-events-none fixed w-96 h-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-teal-500/30 to-transparent blur-3xl transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "radial-gradient(circle, rgba(100, 255, 218, 0.3) 0%, transparent 70%)",
            zIndex: 10,
          }}
        />
      )}
      {children}
    </div>
  )
}
