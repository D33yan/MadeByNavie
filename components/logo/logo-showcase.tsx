"use client"

import { NavieLogo } from "./navie-logo"
import { AnimatedLogo } from "./animated-logo"

interface LogoShowcaseProps {
  className?: string
}

export function LogoShowcase({ className = "" }: LogoShowcaseProps) {
  return (
    <div className={`space-y-12 ${className}`}>
      {/* Hero Logo */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-8 gradient-navie-text">MadeByNavie Brand Identity</h3>
        <div className="flex justify-center mb-8">
          <AnimatedLogo size="xl" autoPlay={true} />
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          The MadeByNavie logo represents the perfect fusion of technology and creativity. The geometric "N" symbolizes
          precision and structure, while the flowing gradients and animated elements reflect innovation and artistic
          vision.
        </p>
      </div>

      {/* Logo Variations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Full Logo */}
        <div className="text-center p-8 group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50">
          <h4 className="text-lg font-semibold mb-4 text-navie-secondary-400">Full Logo</h4>
          <div className="flex justify-center mb-4">
            <NavieLogo size="lg" variant="full" />
          </div>
          <p className="text-sm text-muted-foreground">Primary brand mark with icon and text</p>
        </div>

        {/* Icon Only */}
        <div className="text-center p-8 group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50">
          <h4 className="text-lg font-semibold mb-4 text-navie-accent-400">Icon Mark</h4>
          <div className="flex justify-center mb-4">
            <NavieLogo size="lg" variant="icon" />
          </div>
          <p className="text-sm text-muted-foreground">Standalone icon for compact spaces</p>
        </div>

        {/* Text Only */}
        <div className="text-center p-8 group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-slate-900/50 dark:border-slate-700/50">
          <h4 className="text-lg font-semibold mb-4 text-navie-primary-400">Wordmark</h4>
          <div className="flex justify-center mb-4">
            <NavieLogo size="lg" variant="text" />
          </div>
          <p className="text-sm text-muted-foreground">Text-only version for minimal layouts</p>
        </div>
      </div>

      {/* Size Variations */}
      <div className="text-center">
        <h4 className="text-xl font-bold mb-6 gradient-navie-text">Size Variations</h4>
        <div className="flex items-end justify-center space-x-8">
          <div className="text-center">
            <NavieLogo size="sm" variant="icon" />
            <p className="text-xs text-muted-foreground mt-2">Small</p>
          </div>
          <div className="text-center">
            <NavieLogo size="md" variant="icon" />
            <p className="text-xs text-muted-foreground mt-2">Medium</p>
          </div>
          <div className="text-center">
            <NavieLogo size="lg" variant="icon" />
            <p className="text-xs text-muted-foreground mt-2">Large</p>
          </div>
          <div className="text-center">
            <NavieLogo size="xl" variant="icon" />
            <p className="text-xs text-muted-foreground mt-2">Extra Large</p>
          </div>
        </div>
      </div>

      {/* Brand Colors - Updated with Purple */}
      <div className="text-center">
        <h4 className="text-xl font-bold mb-6 gradient-navie-text">Brand Colors</h4>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-navie-secondary-500 rounded-full mx-auto mb-2 shadow-navie-secondary"></div>
            <p className="text-xs font-medium text-navie-secondary-400">Purple</p>
            <p className="text-xs text-muted-foreground">#8b5cf6</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-navie-accent-500 rounded-full mx-auto mb-2 shadow-navie-accent"></div>
            <p className="text-xs font-medium text-navie-accent-400">Teal</p>
            <p className="text-xs text-muted-foreground">#06b6d4</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-navie-primary-500 rounded-full mx-auto mb-2 shadow-navie-primary"></div>
            <p className="text-xs font-medium text-navie-primary-400">Navy</p>
            <p className="text-xs text-muted-foreground">#1e293b</p>
          </div>
        </div>
      </div>
    </div>
  )
}
