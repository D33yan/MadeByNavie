import { MobileOptimizedSection } from "./animations/mobile-optimized-section";
import { NavieLogo } from "@/components/logo/navie-logo";
import { Star, Quote, Award, Users } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MobileOptimizedSection
          animation="fade-up"
          delay={200}
          mobileAnimation="fade-up"
        >
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 dark:text-yellow-300 text-sm font-semibold rounded-full border border-yellow-500/20 dark:border-yellow-400/20 mb-6">
              Client Feedback
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              What Clients Say
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
              Don't just take my word for it - hear from the amazing clients I've had the pleasure of working with
            </p>
          </div>
        </MobileOptimizedSection>

        <MobileOptimizedSection
          animation="fade-up"
          delay={400}
          mobileAnimation="fade-up"
        >
          <div className="max-w-4xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur opacity-50 group-hover:opacity-70 transition duration-1000" />
              <div className="relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 lg:p-16">
                <div className="text-center">
                  {/* Quote Icon */}
                  <div className="text-4xl md:text-5xl text-cyan-400/30 mb-6 md:mb-8 animate-pulse">
                    <Quote className="mx-auto" />
                  </div>
                  
                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-8 md:mb-12 text-white text-balance">
                    Divine's work with MadeByNavie exceeded all expectations. The combination of technical expertise and creative vision resulted in a website that not only looks stunning but performs flawlessly. Highly recommend for anyone serious about their digital presence.
                  </blockquote>
                  
                  {/* Client Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                      <span className="text-white font-bold text-lg md:text-xl">SR</span>
                    </div>
                    <div className="text-center md:text-left">
                      <p className="font-semibold text-white text-lg md:text-xl mb-1">
                        Sarah Rodriguez
                      </p>
                      <p className="text-cyan-400 text-base md:text-lg font-medium mb-2">
                        CEO, TechStart Inc.
                      </p>
                      <div className="flex items-center justify-center md:justify-start space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MobileOptimizedSection>

        {/* Additional Testimonials Grid */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={600}
          mobileAnimation="fade-up"
        >
          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Michael Chen",
                role: "Founder, StartupXYZ",
                text: "Exceptional attention to detail and delivered exactly what we envisioned. The website conversion rate increased by 40%!",
                rating: 5
              },
              {
                name: "Emily Johnson",
                role: "Marketing Director",
                text: "Professional, responsive, and incredibly talented. MadeByNavie transformed our brand identity completely.",
                rating: 5
              },
              {
                name: "David Thompson",
                role: "E-commerce Owner",
                text: "The best investment we've made. The new website loads faster and converts better than ever before.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-cyan-400 text-xs md:text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </MobileOptimizedSection>

        {/* Trust Indicators */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={800}
          mobileAnimation="fade-up"
        >
          <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, label: "Happy Clients", value: "50+" },
              { icon: Award, label: "Projects Completed", value: "100+" },
              { icon: Star, label: "Average Rating", value: "5.0" },
              { icon: Quote, label: "Testimonials", value: "25+" }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 md:p-6 rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                  <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </MobileOptimizedSection>
      </div>
    </section>
  );
} 