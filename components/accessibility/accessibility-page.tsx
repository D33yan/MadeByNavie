"use client"

import { ColorContrastTester } from "./color-contrast-tester"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Shield, Eye, Users } from "lucide-react"

export function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="content-container">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-navie-secondary-500/20 to-navie-accent-500/20 rounded-2xl border border-navie-secondary-500/20">
              <Shield className="w-8 h-8 text-navie-secondary-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-navie-text">Accessibility Compliance</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            MadeByNavie is committed to creating inclusive digital experiences. Our design system follows WCAG 2.1
            guidelines to ensure accessibility for all users, regardless of their abilities or assistive technologies.
          </p>
        </div>

        {/* Accessibility Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="border-success-500/20 bg-success-500/5">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-success-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">WCAG 2.1 AA</h3>
              <p className="text-sm text-muted-foreground">Compliant color contrast ratios</p>
            </CardContent>
          </Card>

          <Card className="border-navie-secondary-500/20 bg-navie-secondary-500/5">
            <CardContent className="p-6 text-center">
              <Eye className="w-8 h-8 text-navie-secondary-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visual Design</h3>
              <p className="text-sm text-muted-foreground">High contrast and readable typography</p>
            </CardContent>
          </Card>

          <Card className="border-navie-accent-500/20 bg-navie-accent-500/5">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 text-navie-accent-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Inclusive</h3>
              <p className="text-sm text-muted-foreground">Designed for all users and abilities</p>
            </CardContent>
          </Card>

          <Card className="border-info-500/20 bg-info-500/5">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-info-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Standards</h3>
              <p className="text-sm text-muted-foreground">Follows international guidelines</p>
            </CardContent>
          </Card>
        </div>

        {/* Color Contrast Testing */}
        <ColorContrastTester />

        {/* Accessibility Features Details */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="card-navie">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-navie-secondary-400">Design Principles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Color Independence:</strong> Information is never conveyed through color alone
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Focus Management:</strong> Clear focus indicators for keyboard navigation
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Semantic HTML:</strong> Proper heading hierarchy and landmark elements
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Responsive Design:</strong> Optimized for all screen sizes and orientations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-navie">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-navie-accent-400">Technical Features</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>ARIA Labels:</strong> Comprehensive screen reader support
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Reduced Motion:</strong> Respects user motion preferences
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>High Contrast:</strong> Enhanced visibility in high contrast mode
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong>Touch Targets:</strong> Minimum 44px touch targets for mobile accessibility
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testing Guidelines */}
        <Card className="mt-16 border-navie-primary-500/20 bg-navie-primary-500/5">
          <CardContent className="p-8">
            <h3 className="text-xl font-bold mb-6 text-navie-primary-400">Testing & Validation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Automated Testing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Color contrast ratio validation</li>
                  <li>• ARIA attribute verification</li>
                  <li>• Semantic HTML structure checks</li>
                  <li>• Keyboard navigation testing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Manual Testing</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Screen reader compatibility</li>
                  <li>• Voice control navigation</li>
                  <li>• High contrast mode verification</li>
                  <li>• Reduced motion preference testing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
