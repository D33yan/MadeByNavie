import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileOptimizedSection } from "@/components/animations/mobile-optimized-section";
import { NavieLogo } from "@/components/logo/navie-logo";
import { X, Menu } from "lucide-react";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isMobile: boolean;
  shouldReduceAnimations: boolean;
}

export function Navigation({
  scrollToSection,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  isMobile,
  shouldReduceAnimations,
}: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ease-out ${
        typeof window !== "undefined" && window.scrollY > 50
          ? "bg-background/80 backdrop-blur-2xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="content-container">
        <div className="flex justify-between items-center py-2 md:py-3">
          {/* Logo */}
          <MobileOptimizedSection
            animation="fade-in"
            delay={100}
            mobileAnimation="fade-in"
          >
            <NavieLogo
              size={isMobile ? "sm" : "md"}
              variant="full"
              animated={true}
              onClick={() => scrollToSection("home")}
              className="transition-all duration-300 h-10 md:h-12 w-auto cursor-pointer"
            />
          </MobileOptimizedSection>

          {/* Desktop Navigation */}
          <MobileOptimizedSection
            animation="scale-in"
            delay={200}
            mobileAnimation="none"
          >
            <div className="hidden lg:flex items-center space-x-1 glass rounded-full px-4 py-2">
              {[
                "Home",
                "About",
                "Work",
                "Skills",
                "Resume",
                "Contact",
              ].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  aria-label={`Go to ${item} section`}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 h-10 md:h-12 flex items-center justify-center ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-navie-secondary-500 to-navie-accent-500 shadow-navie-secondary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </MobileOptimizedSection>

          {/* Theme Toggle & CTA */}
          <MobileOptimizedSection
            animation="slide-left"
            delay={300}
            mobileAnimation="fade-in"
          >
            <div className="hidden lg:flex items-center space-x-4">
              <ThemeToggle />
              <Button
                onClick={() => scrollToSection("contact")}
                className="btn-navie-primary hover:shadow-navie-glow-lg h-10 md:h-12 px-5"
              >
                Let's Connect
              </Button>
            </div>
          </MobileOptimizedSection>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="p-3 md:p-3.5 glass rounded-full hover:bg-muted/50 transition-all duration-300 active:scale-95 h-11 w-11 flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-500 ease-out ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="glass mx-4 mb-4 rounded-2xl shadow-medium">
          <div className="px-4 py-4 space-y-2">
            {[
              "Home",
              "About",
              "Work",
              "Skills",
              "Resume",
              "Contact",
            ].map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                aria-label={`Go to ${item} section`}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 active:scale-95 font-medium h-12  items-center ${
                  activeSection === item.toLowerCase()
                    ? "text-navie-secondary-500 bg-navie-secondary-500/10 border border-navie-secondary-500/20"
                    : "text-muted-foreground hover:text-foreground active:bg-muted/50"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {item}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-2 btn-navie-primary active:scale-95 h-12"
              aria-label="Contact Divine Nnaji"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
} 
