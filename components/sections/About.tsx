import { MobileOptimizedSection } from "@/components/animations/mobile-optimized-section";
import { TouchOptimizedList } from "@/components/animations/touch-optimized-list";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ExternalLink, User, Award, Globe, MessageCircle, Instagram, Code } from "lucide-react";
import { NavieLogo } from "@/components/logo/navie-logo";

interface AboutProps {
  isMobile: boolean;
  scrollToSection: (sectionId: string) => void;
}

export function About({ isMobile, scrollToSection }: AboutProps) {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="content-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
          <MobileOptimizedSection
            animation="slide-right"
            delay={200}
            mobileAnimation="fade-up"
          >
            <div className="space-y-8 md:space-y-10">
              <div className="space-y-6">
                <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 dark:text-cyan-300 text-sm font-semibold rounded-full border border-cyan-500/20 dark:border-cyan-400/20">
                  About Me
                </span>
                <h2 className="section-title gradient-navie-text bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  About <span>Me</span>
                </h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                  Hi, I'm <strong className="text-cyan-400 font-semibold">Divine Nnaji</strong>, a full-stack software engineer with a passion for building scalable applications and integrating AI/ML solutions. I bring together frontend excellence and robust backend architecture to create comprehensive digital solutions.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                  Currently focused on data science and AI applications through my internship at NASRDA, I specialize in Python-based machine learning, automation workflows (n8n, Zapier), and building full-stack applications with Next.js and Node.js. I&apos;m driven by solving complex technical challenges and creating meaningful impact through technology.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed">
                  Whether building production-grade web applications, training ML models, or architecting automation workflows, I approach every project with technical precision and a commitment to delivering robust, maintainable solutions that drive real business value.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: User, label: "Full-Stack Expertise", value: "Frontend, backend, and AI integration" },
                  { icon: Award, label: "Technical Excellence", value: "Production-ready code and solutions" },
                  { icon: Globe, label: "AI/ML Focus", value: "Data science and machine learning expertise" }
                ].map((highlight, index) => (
                  <div
                    key={highlight.label}
                    className="p-4 md:p-6 rounded-xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-slate-800/30 dark:border-slate-700/50 text-[hsl(var(--foreground))]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 md:mb-4 shadow-lg">
                      <highlight.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">{highlight.label}</h3>
                    <p className="text-slate-400 text-xs md:text-sm">{highlight.value}</p>
                  </div>
                ))}
              </div>

              <TouchOptimizedList
                staggerDelay={isMobile ? 80 : 100}
                animation="scale-in"
                mobileAnimation="fade-up"
                className="flex flex-wrap gap-4 pt-4"
              >
                <Button
                  asChild
                  variant="outline"
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <a href="https://github.com/D33yan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <a href="https://www.linkedin.com/in/divine-nnaji-858a53283" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-green-500/30 text-green-500 hover:bg-green-500/10 hover:border-green-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <a href="https://wa.me/2348106890380" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-400/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <a href="https://www.instagram.com/callmenavie?utm_source=qr&igsh=MTZxdXh6b3doczFuMw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>
                <Button
                  onClick={() => scrollToSection("work")}
                  className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-slate-600/50 active:scale-95 transition-all duration-300 font-semibold px-6 py-3 rounded-xl"
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Work
                </Button>
              </TouchOptimizedList>
            </div>
          </MobileOptimizedSection>
          <MobileOptimizedSection
            animation="slide-left"
            delay={400}
            mobileAnimation="fade-up"
          >
            <div className="relative">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
                <div className="relative w-full h-80 md:h-96 bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-3xl group-hover:scale-105 group-active:scale-95 transition-all duration-700 flex items-center justify-center dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-slate-800/30 dark:border-slate-700/50">
                  <div className="text-center p-8">
                    <div className="mb-6 md:mb-8">
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                        <Code className="w-10 h-10 md:w-12 md:h-12 text-white" />
                      </div>
                    </div>
                    <p className="text-[hsl(var(--foreground))] text-xl md:text-2xl font-bold mb-2 md:mb-3">
                      Divine Nnaji
                    </p>
                    <p className="text-cyan-600 text-base md:text-lg font-medium">
                      Full-Stack Engineer & AI Enthusiast
                    </p>
                    <div className="mt-6 md:mt-8 flex justify-center space-x-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MobileOptimizedSection>
        </div>
      </div>
    </section>
  );
} 
