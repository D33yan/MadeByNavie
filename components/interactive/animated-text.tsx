"use client"

import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      let index = 0
      const charTimer = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index))
          index++
        } else {
          clearInterval(charTimer)
        }
      }, (duration * 1000) / text.length)

      return () => clearInterval(charTimer)
    }, delay)

    return () => clearTimeout(timer)
  }, [text, delay, duration])

  return (
    <span className={className}>
      {displayText}
      {displayText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  )
}
