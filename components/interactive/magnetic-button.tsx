"use client"

import { useRef, useEffect, useState } from "react"
import type { ReactNode } from "react"

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  disabled = false,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    setIsDesktop(!window.matchMedia("(hover: none)").matches)
  }, [])

  useEffect(() => {
    if (!isDesktop || !buttonRef.current) return

    const button = buttonRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      const distance = Math.sqrt(x * x + y * y)
      const maxDistance = 100

      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 15
        button.style.transform = `translate(${(x / distance) * force}px, ${(y / distance) * force}px)`
      } else {
        button.style.transform = "translate(0, 0)"
      }
    }

    const handleMouseLeave = () => {
      button.style.transform = "translate(0, 0)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    button.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isDesktop])

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      disabled={disabled}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </button>
  )
}
