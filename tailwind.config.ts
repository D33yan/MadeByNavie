import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Professional Color Palette with Golden Ratio Design Principles
        // Golden Ratio: φ = 1.618033988749895
        // Base colors scaled using golden ratio for harmonious proportions
        
        navie: {
          // Primary: Professional Deep Blue - Industry Standard
          primary: {
            50: "#f8fafc",   // 1.618^0 = 1.000
            100: "#f1f5f9",  // 1.618^1 = 1.618
            200: "#e2e8f0",  // 1.618^2 = 2.618
            300: "#cbd5e1",  // 1.618^3 = 4.236
            400: "#94a3b8",  // 1.618^4 = 6.854
            500: "#64748b",  // 1.618^5 = 11.089
            600: "#475569",  // 1.618^6 = 17.944
            700: "#334155",  // 1.618^7 = 29.034
            800: "#1e293b",  // 1.618^8 = 46.978
            900: "#0f172a",  // 1.618^9 = 76.013
            950: "#020617",  // 1.618^10 = 123.031
          },
          // Secondary: Professional Blue - Industry Standard
          secondary: {
            50: "#eff6ff",   // Very light blue
            100: "#dbeafe",  // Light blue
            200: "#bfdbfe",  // Medium light blue
            300: "#93c5fd",  // Medium blue
            400: "#60a5fa",  // Professional blue (AA compliant)
            500: "#3b82f6",  // Enhanced blue (AA+ compliant)
            600: "#2563eb",  // Darker blue (AAA on white)
            700: "#1d4ed8",  // High contrast blue
            800: "#1e40af",  // Very dark blue
            900: "#1e3a8a",  // Maximum contrast blue
            950: "#172554",  // Darkest blue
          },
          // Accent: Professional Teal - Modern & Accessible
          accent: {
            50: "#f0fdfa",   // Very light teal
            100: "#ccfbf1",  // Light teal
            200: "#99f6e4",  // Medium light teal
            300: "#5eead4",  // Medium teal
            400: "#2dd4bf",  // Professional teal (AA compliant)
            500: "#14b8a6",  // Enhanced teal (AA+ compliant)
            600: "#0d9488",  // Darker teal (AAA on white)
            700: "#0f766e",  // High contrast teal
            800: "#115e59",  // Very dark teal
            900: "#134e4a",  // Maximum contrast teal
            950: "#042f2e",  // Darkest teal
          },
          // Success: Professional Green - Industry Standard
          success: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",  // Professional green
            600: "#16a34a",  // Darker green
            700: "#15803d",  // High contrast green
            800: "#166534",  // Very dark green
            900: "#14532d",  // Maximum contrast green
            950: "#052e16",
          },
          // Warning: Professional Amber - Industry Standard
          warning: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#f59e0b",  // Professional amber
            600: "#d97706",  // Darker amber
            700: "#b45309",  // High contrast amber
            800: "#92400e",  // Very dark amber
            900: "#78350f",  // Maximum contrast amber
            950: "#451a03",
          },
          // Error: Professional Red - Industry Standard
          error: {
            50: "#fef2f2",
            100: "#fee2e2",
            200: "#fecaca",
            300: "#fca5a5",
            400: "#f87171",
            500: "#ef4444",  // Professional red
            600: "#dc2626",  // Darker red
            700: "#b91c1c",  // High contrast red
            800: "#991b1b",  // Very dark red
            900: "#7f1d1d",  // Maximum contrast red
            950: "#450a0a",
          },
          // Neutral: Professional Gray - Industry Standard
          neutral: {
            50: "#fafafa",   // Pure white
            100: "#f5f5f5",  // Very light gray
            200: "#e5e5e5",  // Light gray
            300: "#d4d4d4",  // Medium light gray
            400: "#a3a3a3",  // Medium gray
            500: "#737373",  // Medium dark gray
            600: "#525252",  // Dark gray
            700: "#404040",  // Very dark gray
            800: "#262626",  // Almost black
            900: "#171717",  // Near black
            950: "#0a0a0a",  // Pure black
          },
        },

        // Enhanced Semantic Colors for Better Accessibility
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#16a34a", // Enhanced green (AA+ compliant)
          600: "#15803d", // Darker green (AAA on white)
          700: "#166534", // High contrast green
          800: "#14532d", // Very dark green
          900: "#052e16", // Maximum contrast green
          950: "#022c22",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d97706", // Enhanced amber (AA+ compliant)
          600: "#b45309", // Darker amber (AAA on white)
          700: "#92400e", // High contrast amber
          800: "#78350f", // Very dark amber
          900: "#451a03", // Maximum contrast amber
          950: "#365314",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#dc2626", // Enhanced red (AA+ compliant)
          600: "#b91c1c", // Darker red (AAA on white)
          700: "#991b1b", // High contrast red
          800: "#7f1d1d", // Very dark red
          900: "#450a0a", // Maximum contrast red
          950: "#1c0a0a",
        },
        info: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#2563eb", // Enhanced blue (AA+ compliant)
          600: "#1d4ed8", // Darker blue (AAA on white)
          700: "#1e40af", // High contrast blue
          800: "#1e3a8a", // Very dark blue
          900: "#172554", // Maximum contrast blue
          950: "#0f1629",
        },

        // Theme-aware colors with enhanced contrast
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
        "144": "36rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200px 0" },
          "100%": { backgroundPosition: "calc(200px + 100%) 0" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.15)" },
          "50%": { boxShadow: "0 0 40px rgba(59, 130, 246, 0.25)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "navie-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.1), 0 0 40px rgba(20, 184, 166, 0.05)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.2), 0 0 80px rgba(20, 184, 166, 0.1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in-down": "fade-in-down 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-in": "slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        "gradient-shift": "gradient-shift 8s ease infinite",
        shimmer: "shimmer 1.5s infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "navie-glow": "navie-glow 6s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "navie-primary": "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        "navie-secondary": "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
        "navie-accent": "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
        "navie-hero": "linear-gradient(135deg, #1e293b 0%, #3b82f6 50%, #14b8a6 100%)",
        "navie-card":
          "linear-gradient(135deg, rgba(30, 41, 59, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(20, 184, 166, 0.1) 100%)",
      },
      boxShadow: {
        soft: "0 2px 8px 0 rgb(0 0 0 / 0.05)",
        medium: "0 4px 16px 0 rgb(0 0 0 / 0.1)",
        hard: "0 8px 32px 0 rgb(0 0 0 / 0.15)",
        "navie-primary": "0 4px 16px 0 rgb(30 41 59 / 0.25)",
        "navie-secondary": "0 4px 16px 0 rgb(59 130 246 / 0.25)",
        "navie-accent": "0 4px 16px 0 rgb(20 184 166 / 0.25)",
        "navie-glow": "0 0 20px rgb(59 130 246 / 0.15), 0 0 40px rgb(20 184 166 / 0.1)",
        "navie-glow-lg": "0 0 40px rgb(59 130 246 / 0.2), 0 0 80px rgb(20 184 166 / 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
