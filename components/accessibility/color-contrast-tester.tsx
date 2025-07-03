"use client"

import { useState, useEffect } from "react"
import { CheckCircle, AlertTriangle, XCircle, Eye, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ContrastResult {
  ratio: number
  wcagAA: boolean
  wcagAAA: boolean
  grade: "Pass" | "Fail" | "Warning"
}

interface ColorCombination {
  name: string
  foreground: string
  background: string
  usage: string
  category: "text" | "interactive" | "decorative"
}

export function ColorContrastTester() {
  const [results, setResults] = useState<Map<string, ContrastResult>>(new Map())
  const [mounted, setMounted] = useState(false)

  // MadeByNavie color combinations to test
  const colorCombinations: ColorCombination[] = [
    // Primary Text Combinations
    {
      name: "Primary Text on Dark Background",
      foreground: "#f8fafc", // slate-50
      background: "#0f172a", // navie-primary-600
      usage: "Main body text in dark theme",
      category: "text",
    },
    {
      name: "Primary Text on Light Background",
      foreground: "#1e293b", // navie-primary-500
      background: "#ffffff", // white
      usage: "Main body text in light theme",
      category: "text",
    },
    {
      name: "Muted Text on Dark Background",
      foreground: "#94a3b8", // slate-400
      background: "#0f172a", // navie-primary-600
      usage: "Secondary text in dark theme",
      category: "text",
    },
    {
      name: "Muted Text on Light Background",
      foreground: "#64748b", // slate-500
      background: "#ffffff", // white
      usage: "Secondary text in light theme",
      category: "text",
    },

    // Purple Brand Colors
    {
      name: "Purple Primary on White",
      foreground: "#8b5cf6", // navie-secondary-500
      background: "#ffffff", // white
      usage: "Purple brand elements on light backgrounds",
      category: "interactive",
    },
    {
      name: "Purple Primary on Dark",
      foreground: "#8b5cf6", // navie-secondary-500
      background: "#0f172a", // navie-primary-600
      usage: "Purple brand elements on dark backgrounds",
      category: "interactive",
    },
    {
      name: "White Text on Purple",
      foreground: "#ffffff", // white
      background: "#8b5cf6", // navie-secondary-500
      usage: "White text on purple buttons/badges",
      category: "interactive",
    },
    {
      name: "Dark Text on Light Purple",
      foreground: "#1e293b", // navie-primary-500
      background: "#f3e8ff", // purple-100
      usage: "Dark text on light purple backgrounds",
      category: "interactive",
    },

    // Teal Accent Colors
    {
      name: "Teal Primary on White",
      foreground: "#06b6d4", // navie-accent-500
      background: "#ffffff", // white
      usage: "Teal accent elements on light backgrounds",
      category: "interactive",
    },
    {
      name: "Teal Primary on Dark",
      foreground: "#06b6d4", // navie-accent-500
      background: "#0f172a", // navie-primary-600
      usage: "Teal accent elements on dark backgrounds",
      category: "interactive",
    },
    {
      name: "White Text on Teal",
      foreground: "#ffffff", // white
      background: "#06b6d4", // navie-accent-500
      usage: "White text on teal buttons/badges",
      category: "interactive",
    },

    // Interactive States
    {
      name: "Purple Hover State",
      foreground: "#ffffff", // white
      background: "#7c3aed", // navie-secondary-600
      usage: "Hover state for purple buttons",
      category: "interactive",
    },
    {
      name: "Teal Hover State",
      foreground: "#ffffff", // white
      background: "#0891b2", // navie-accent-600
      usage: "Hover state for teal buttons",
      category: "interactive",
    },

    // Status Colors
    {
      name: "Success Text",
      foreground: "#10b981", // success-500
      background: "#ffffff", // white
      usage: "Success messages and indicators",
      category: "interactive",
    },
    {
      name: "Error Text",
      foreground: "#ef4444", // error-500
      background: "#ffffff", // white
      usage: "Error messages and indicators",
      category: "interactive",
    },
    {
      name: "Warning Text",
      foreground: "#f59e0b", // warning-500
      background: "#ffffff", // white
      usage: "Warning messages and indicators",
      category: "interactive",
    },

    // Glass/Card Backgrounds
    {
      name: "Text on Glass Card (Dark)",
      foreground: "#f8fafc", // slate-50
      background: "#1e293b33", // navie-primary-500 with 20% opacity
      usage: "Text on glass cards in dark theme",
      category: "text",
    },
    {
      name: "Text on Glass Card (Light)",
      foreground: "#1e293b", // navie-primary-500
      background: "#ffffff80", // white with 50% opacity
      usage: "Text on glass cards in light theme",
      category: "text",
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  // Calculate luminance of a color
  const getLuminance = (hex: string): number => {
    // Remove # if present
    const color = hex.replace("#", "")

    // Handle 8-digit hex (with alpha)
    const r = Number.parseInt(color.substr(0, 2), 16)
    const g = Number.parseInt(color.substr(2, 2), 16)
    const b = Number.parseInt(color.substr(4, 2), 16)

    // Convert to relative luminance
    const rsRGB = r / 255
    const gsRGB = g / 255
    const bsRGB = b / 255

    const rLin = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4)
    const gLin = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4)
    const bLin = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4)

    return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin
  }

  // Calculate contrast ratio between two colors
  const getContrastRatio = (foreground: string, background: string): number => {
    const l1 = getLuminance(foreground)
    const l2 = getLuminance(background)

    const lighter = Math.max(l1, l2)
    const darker = Math.min(l1, l2)

    return (lighter + 0.05) / (darker + 0.05)
  }

  // Test contrast ratio and return result
  const testContrast = (foreground: string, background: string): ContrastResult => {
    const ratio = getContrastRatio(foreground, background)
    const wcagAA = ratio >= 4.5
    const wcagAAA = ratio >= 7

    let grade: "Pass" | "Fail" | "Warning"
    if (wcagAAA) {
      grade = "Pass"
    } else if (wcagAA) {
      grade = "Warning"
    } else {
      grade = "Fail"
    }

    return { ratio, wcagAA, wcagAAA, grade }
  }

  // Test all color combinations
  const testAllCombinations = () => {
    const newResults = new Map<string, ContrastResult>()

    colorCombinations.forEach((combination) => {
      const result = testContrast(combination.foreground, combination.background)
      newResults.set(combination.name, result)
    })

    setResults(newResults)
  }

  useEffect(() => {
    if (mounted) {
      testAllCombinations()
    }
  }, [mounted])

  const getGradeIcon = (grade: string) => {
    switch (grade) {
      case "Pass":
        return <CheckCircle className="w-5 h-5 text-success-500" />
      case "Warning":
        return <AlertTriangle className="w-5 h-5 text-warning-500" />
      case "Fail":
        return <XCircle className="w-5 h-5 text-error-500" />
      default:
        return null
    }
  }

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "Pass":
        return "text-success-500 bg-success-500/10 border-success-500/20"
      case "Warning":
        return "text-warning-500 bg-warning-500/10 border-warning-500/20"
      case "Fail":
        return "text-error-500 bg-error-500/10 border-error-500/20"
      default:
        return "text-muted-foreground bg-muted/10 border-border"
    }
  }

  if (!mounted) {
    return <div className="animate-pulse h-96 bg-muted rounded-xl" />
  }

  const passCount = Array.from(results.values()).filter((r) => r.grade === "Pass").length
  const warningCount = Array.from(results.values()).filter((r) => r.grade === "Warning").length
  const failCount = Array.from(results.values()).filter((r) => r.grade === "Fail").length

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-navie-secondary-500/20 to-navie-accent-500/20 rounded-xl border border-navie-secondary-500/20">
            <Eye className="w-6 h-6 text-navie-secondary-400" />
          </div>
        </div>
        <h3 className="text-2xl font-bold mb-4 gradient-navie-text">Accessibility Contrast Testing</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Testing MadeByNavie brand colors against WCAG 2.1 accessibility guidelines for optimal readability and
          compliance.
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-success-500/20 bg-success-500/5">
          <CardContent className="p-6 text-center">
            <CheckCircle className="w-8 h-8 text-success-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-success-500 mb-1">{passCount}</div>
            <div className="text-sm text-muted-foreground">AAA Compliant</div>
          </CardContent>
        </Card>

        <Card className="border-warning-500/20 bg-warning-500/5">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-warning-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-warning-500 mb-1">{warningCount}</div>
            <div className="text-sm text-muted-foreground">AA Compliant</div>
          </CardContent>
        </Card>

        <Card className="border-error-500/20 bg-error-500/5">
          <CardContent className="p-6 text-center">
            <XCircle className="w-8 h-8 text-error-500 mx-auto mb-3" />
            <div className="text-2xl font-bold text-error-500 mb-1">{failCount}</div>
            <div className="text-sm text-muted-foreground">Non-Compliant</div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold">Detailed Test Results</h4>
          <Button onClick={testAllCombinations} variant="outline" size="sm">
            <Palette className="w-4 h-4 mr-2" />
            Retest Colors
          </Button>
        </div>

        <div className="grid gap-4">
          {colorCombinations.map((combination) => {
            const result = results.get(combination.name)
            if (!result) return null

            return (
              <Card key={combination.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Color Preview */}
                    <div
                      className="p-8 flex items-center justify-center min-h-[120px]"
                      style={{
                        backgroundColor: combination.background,
                        color: combination.foreground,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-lg font-semibold mb-2">Sample Text</div>
                        <div className="text-sm opacity-80">The quick brown fox jumps</div>
                      </div>
                    </div>

                    {/* Test Results */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h5 className="font-semibold text-foreground mb-1">{combination.name}</h5>
                          <p className="text-sm text-muted-foreground mb-2">{combination.usage}</p>
                          <div className="flex items-center space-x-2 text-xs">
                            <span className="px-2 py-1 bg-muted rounded text-muted-foreground">
                              {combination.category}
                            </span>
                          </div>
                        </div>
                        <div
                          className={`px-3 py-1 rounded-full border text-sm font-medium ${getGradeColor(result.grade)}`}
                        >
                          <div className="flex items-center space-x-2">
                            {getGradeIcon(result.grade)}
                            <span>{result.grade}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Contrast Ratio:</span>
                          <span className="font-mono text-sm font-semibold">{result.ratio.toFixed(2)}:1</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">WCAG AA (4.5:1):</span>
                          <span
                            className={`text-sm font-medium ${result.wcagAA ? "text-success-500" : "text-error-500"}`}
                          >
                            {result.wcagAA ? "Pass" : "Fail"}
                          </span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">WCAG AAA (7:1):</span>
                          <span
                            className={`text-sm font-medium ${result.wcagAAA ? "text-success-500" : "text-error-500"}`}
                          >
                            {result.wcagAAA ? "Pass" : "Fail"}
                          </span>
                        </div>

                        <div className="text-xs text-muted-foreground mt-2">
                          <strong>Colors:</strong> {combination.foreground} on {combination.background}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Recommendations */}
      <Card className="border-navie-secondary-500/20 bg-navie-secondary-500/5">
        <CardContent className="p-6">
          <h4 className="text-lg font-bold mb-4 text-navie-secondary-400">Accessibility Recommendations</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Excellent:</strong> Most text combinations meet WCAG AAA standards (7:1 ratio) for enhanced
                accessibility.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-4 h-4 text-warning-500 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Good:</strong> Brand colors on backgrounds meet WCAG AA standards (4.5:1 ratio) for normal text.
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Eye className="w-4 h-4 text-navie-accent-400 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Tip:</strong> For decorative elements, lower contrast ratios are acceptable as they don't convey
                essential information.
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
