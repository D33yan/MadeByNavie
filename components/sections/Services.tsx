import { MobileOptimizedSection } from "../animations/mobile-optimized-section";
import { TouchOptimizedList } from "../animations/touch-optimized-list";
import { TouchInteractionCard } from "../animations/touch-interaction-card";
import { CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Sparkles, Zap } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: any;
  gradient: string;
  shadowColor: string;
  delay: string;
}

interface ServicesProps {
  isMobile: boolean;
  services: Service[];
}

export function Services({ isMobile, services }: ServicesProps) {
  return (
    <section id="services" className="py-10 md:py-12 bg-gradient-to-b from-background to-muted/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MobileOptimizedSection
          animation="fade-up"
          delay={200}
          mobileAnimation="fade-up"
        >
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-400 dark:text-purple-300 text-sm font-semibold rounded-full border border-purple-500/20 dark:border-purple-400/20 mb-6">
              What I Do
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Comprehensive digital solutions tailored to your unique needs
            </p>
          </div>
        </MobileOptimizedSection>
        
        <TouchOptimizedList
          staggerDelay={isMobile ? 150 : 200}
          animation="scale-in"
          mobileAnimation="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service, index) => (
            <TouchInteractionCard
              key={service.title}
              className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-slate-800/30 dark:border-slate-700/50 hover:scale-105 overflow-hidden"
              touchFeedback={true}
              scaleOnTouch={true}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 group-active:opacity-10 transition-opacity duration-700`}
              />
              <CardContent className="relative p-6 md:p-8 text-center">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.gradient} rounded-2xl mx-auto mb-6 md:mb-8 flex items-center justify-center group-hover:rotate-12 group-active:rotate-6 transition-transform duration-700 shadow-lg border border-white/20`}
                >
                  <service.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 group-hover:text-muted-foreground/80 transition-colors duration-300 text-base md:text-lg">
                  {service.description}
                </p>
                <div className="space-y-3 md:space-y-4">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-center space-x-3 group-hover:scale-105 transition-transform duration-300"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                      <span className="text-muted-foreground text-sm md:text-base group-hover:text-muted-foreground/80 transition-colors duration-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Service CTA */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-700/50">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm md:text-base font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </CardContent>
            </TouchInteractionCard>
          ))}
        </TouchOptimizedList>

        {/* Services Stats */}
      </div>
    </section>
  );
} 