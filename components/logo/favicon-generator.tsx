"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FaviconGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateFavicon = async (size: number) => {
    setIsGenerating(true)

    // Create canvas
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = size
    canvas.height = size

    // Background
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, "#ff6b35")
    gradient.addColorStop(0.5, "#06b6d4")
    gradient.addColorStop(1, "#1e293b")

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, size, size)

    // Draw simplified "N"
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = size * 0.08
    ctx.lineCap = "round"
    ctx.lineJoin = "round"

    const padding = size * 0.2
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, size - padding)
    ctx.moveTo(size - padding, padding)
    ctx.lineTo(size - padding, size - padding)
    ctx.moveTo(padding, padding)
    ctx.lineTo(size - padding, size - padding)
    ctx.stroke()

    // Download
    const link = document.createElement("a")
    link.download = `navie-favicon-${size}x${size}.png`
    link.href = canvas.toDataURL()
    link.click()

    setIsGenerating(false)
  }

  const faviconSizes = [16, 32, 48, 64, 128, 256, 512]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h4 className="text-xl font-bold mb-4 gradient-navie-text">Favicon Generator</h4>
        <p className="text-muted-foreground mb-6">Generate favicon files in various sizes for your website</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {faviconSizes.map((size) => (
          <Button
            key={size}
            variant="outline"
            onClick={() => generateFavicon(size)}
            disabled={isGenerating}
            className="flex flex-col items-center p-4 h-auto border-navie-secondary-500/30 hover:border-navie-secondary-400/50 hover:bg-navie-secondary-500/10"
          >
            <Download className="w-4 h-4 mb-2" />
            <span className="text-sm font-medium">
              {size}×{size}
            </span>
          </Button>
        ))}
      </div>

      <div className="text-center">
        <Button
          onClick={() => {
            faviconSizes.forEach((size, index) => {
              setTimeout(() => generateFavicon(size), index * 200)
            })
          }}
          disabled={isGenerating}
          className="btn-navie-primary"
        >
          <Download className="w-4 h-4 mr-2" />
          Download All Sizes
        </Button>
      </div>
    </div>
  )
}
