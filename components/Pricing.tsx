import { MobileOptimizedSection } from "./animations/mobile-optimized-section";
import { TouchOptimizedList } from "./animations/touch-optimized-list";
import { TouchInteractionCard } from "./animations/touch-interaction-card";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, CheckCircle, Star, Clock, Users, Zap } from "lucide-react";

interface PricingItem {
  service: string;
  price: string;
}

interface PricingCategory {
  category: string;
  items: PricingItem[];
}

interface PricingProps {
  isMobile: boolean;
  pricing: PricingCategory[];
  scrollToSection: (sectionId: string) => void;
}

export function Pricing({ isMobile, pricing, scrollToSection }: PricingProps) {
  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
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
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 dark:text-yellow-300 text-sm font-semibold rounded-full border border-yellow-500/20 dark:border-yellow-400/20 mb-6">
              Investment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Pricing
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Transparent, competitive pricing for professional web development and brand design services. All prices are starting rates and may vary based on project complexity.
            </p>
          </div>
        </MobileOptimizedSection>
        
        <TouchOptimizedList
          staggerDelay={isMobile ? 150 : 200}
          animation="scale-in"
          mobileAnimation="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {pricing.map((category, index) => (
            <TouchInteractionCard
              key={category.category}
              className="group relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] backdrop-blur-xl shadow-lg rounded-2xl transition-all duration-300 hover:shadow-xl hover:border-blue-200/80 dark:bg-gradient-to-br dark:from-slate-900/50 dark:to-slate-800/30 dark:border-slate-700/50 hover:scale-105 overflow-hidden"
              touchFeedback={true}
              scaleOnTouch={true}
            >
              <CardContent className="p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg border border-white/20">
                    <DollarSign className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-3 md:py-4 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300"
                    >
                      <span className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 font-medium text-sm md:text-base">
                        {item.service}
                      </span>
                      <span className=" font-semibold text-cyan-400 text-sm md:text-base">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Category Features */}
                <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-slate-700/50">
                  <div className="space-y-2 md:space-y-3">
                    {[
                      { icon: CheckCircle, text: "Professional Quality" },
                      { icon: Clock, text: "Timely Delivery" },
                      { icon: Users, text: "Ongoing Support" }
                    ].map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-emerald-400" />
                        <span className="text-slate-400 text-sm md:text-base">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </TouchInteractionCard>
          ))}
        </TouchOptimizedList>
        
        <MobileOptimizedSection
          animation="fade-up"
          delay={800}
          mobileAnimation="fade-up"
        >
          <div className="mt-20 md:mt-24 text-center">
            <div className="max-w-3xl mx-auto">
              <p className="text-muted-foreground mb-8 md:mb-12 text-lg md:text-xl font-medium leading-relaxed">
                Need a custom quote? Every project is unique, and I'd love to discuss your specific needs.
              </p>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </MobileOptimizedSection>

        {/* Pricing Benefits */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={1000}
          mobileAnimation="fade-up"
        >
          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Star, title: "Quality Guarantee", description: "100% satisfaction or revisions until you're happy" },
              { icon: Zap, title: "Fast Turnaround", description: "Quick delivery without compromising on quality" },
              { icon: Users, title: "Personal Support", description: "Direct communication throughout the project" }
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <benefit.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-white font-bold text-lg md:text-xl mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-slate-400 text-sm md:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>
        </MobileOptimizedSection>
      </div>
    </section>
  );
} 