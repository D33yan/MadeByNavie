"use client"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  sizes?: string
  fill?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div
        className={`bg-muted flex items-center justify-center text-muted-foreground ${className}`}
        style={{ width, height }}
      >
        <span className="text-sm">Image failed to load</span>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && <div className="absolute inset-0 bg-muted animate-pulse" style={{ width, height }} />}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
        {...props}
      />
    </div>
  )
}
