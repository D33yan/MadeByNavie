"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useMobilePerformance } from "@/hooks/use-mobile-performance"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

interface ParticleSystemProps {
  particleCount?: number
  colors?: string[]
  interactive?: boolean
  className?: string
}

// ParticleSystem: Animated background particle effect for visual enhancement
export function ParticleSystem({
  particleCount = 60,
  colors = [
    "rgba(255, 107, 53, 0.4)",
    "rgba(6, 182, 212, 0.4)",
    "rgba(30, 41, 59, 0.3)",
    "rgba(234, 88, 12, 0.3)",
    "rgba(8, 145, 178, 0.3)",
  ],
  interactive = true,
  className = "",
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(true)
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  const { isMobile, shouldReduceAnimations } = useMobilePerformance()

  // Adjust particle count based on device capabilities
  const adjustedParticleCount = shouldReduceAnimations
    ? Math.min(particleCount * 0.3, 15)
    : isMobile
      ? Math.min(particleCount * 0.6, 30)
      : particleCount

  // Theme-aware MadeByNavie colors with Purple
  const themeColors =
    theme === "light"
      ? [
          "rgba(139, 92, 246, 0.2)", // Lighter purple for light theme
          "rgba(6, 182, 212, 0.2)", // Lighter teal
          "rgba(30, 41, 59, 0.15)", // Lighter navy
          "rgba(124, 58, 237, 0.15)", // Lighter dark purple
          "rgba(8, 145, 178, 0.15)", // Lighter dark teal
        ]
      : colors

  // Detect theme changes
  useEffect(() => {
    setMounted(true)

    const detectTheme = () => {
      if (typeof window !== "undefined") {
        const isDark = document.documentElement.classList.contains("dark")
        setTheme(isDark ? "dark" : "light")
      }
    }

    detectTheme()

    // Watch for theme changes
    const observer = new MutationObserver(detectTheme)
    if (typeof window !== "undefined") {
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      })
    }

    return () => observer.disconnect()
  }, [])

  const createParticle = useCallback(
    (canvas: HTMLCanvasElement): Particle => {
      const maxLife = 200 + Math.random() * 300
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: theme === "light" ? Math.random() * 0.3 + 0.1 : Math.random() * 0.5 + 0.2,
        color: themeColors[Math.floor(Math.random() * themeColors.length)],
        life: maxLife,
        maxLife,
      }
    },
    [themeColors, theme],
  )

  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      particlesRef.current = Array.from({ length: adjustedParticleCount }, () => createParticle(canvas))
    },
    [adjustedParticleCount, createParticle],
  )

  const updateParticle = useCallback(
    (particle: Particle, canvas: HTMLCanvasElement, mouseX: number, mouseY: number) => {
      // Mouse interaction with MadeByNavie brand colors
      if (interactive && !isMobile) {
        const dx = mouseX - particle.x
        const dy = mouseY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx += (dx / distance) * force * 0.01
          particle.vy += (dy / distance) * force * 0.01
        }
      }

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Add slight drift
      particle.vx += (Math.random() - 0.5) * 0.01
      particle.vy += (Math.random() - 0.5) * 0.01

      // Damping
      particle.vx *= 0.99
      particle.vy *= 0.99

      // Boundary collision
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      }

      // Update life
      particle.life--
      const baseOpacity = theme === "light" ? 0.4 : 0.7
      particle.opacity = (particle.life / particle.maxLife) * baseOpacity

      // Respawn particle if dead
      if (particle.life <= 0) {
        const newParticle = createParticle(canvas)
        Object.assign(particle, newParticle)
      }
    },
    [interactive, isMobile, createParticle, theme],
  )

  const drawParticle = useCallback((ctx: CanvasRenderingContext2D, particle: Particle) => {
    ctx.save()
    ctx.globalAlpha = particle.opacity
    ctx.fillStyle = particle.color
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }, [])

  const drawConnections = useCallback(
    (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      if (shouldReduceAnimations) return

      const connectionOpacity = theme === "light" ? 0.05 : 0.1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = ((120 - distance) / 120) * connectionOpacity
            ctx.save()
            ctx.globalAlpha = opacity
            ctx.strokeStyle = themeColors[0] // Use primary MadeByNavie color
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }
    },
    [shouldReduceAnimations, themeColors, theme],
  )

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !isVisible || !mounted) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particlesRef.current.forEach((particle) => {
      updateParticle(particle, canvas, mouseRef.current.x, mouseRef.current.y)
      drawParticle(ctx, particle)
    })

    // Draw connections between particles
    if (!isMobile) {
      drawConnections(ctx, particlesRef.current)
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [isVisible, updateParticle, drawParticle, drawConnections, isMobile, mounted])

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!interactive || isMobile || !mounted) return

      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      }
    },
    [interactive, isMobile, mounted],
  )

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const container = canvas.parentElement
    if (!container) return

    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight

    // Reinitialize particles with new canvas size
    initParticles(canvas)
  }, [initParticles, mounted])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas || shouldReduceAnimations) return

    // Set canvas size
    handleResize()

    // Initialize particles
    initParticles(canvas)

    // Start animation
    animate()

    // Event listeners
    if (interactive && !isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true })
    }
    window.addEventListener("resize", handleResize, { passive: true })

    // Intersection Observer for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0 },
    )

    observer.observe(canvas)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (interactive && !isMobile) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [shouldReduceAnimations, interactive, isMobile, handleMouseMove, handleResize, initParticles, animate, mounted])

  if (!mounted) {
    return null
  }

  if (shouldReduceAnimations) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        mixBlendMode: theme === "light" ? "multiply" : "screen",
        opacity: theme === "light" ? 0.4 : 0.6,
      }}
    />
  )
}
