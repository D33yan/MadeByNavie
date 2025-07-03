import { MobileOptimizedSection } from "@/components/animations/mobile-optimized-section";
import { ContactForm } from "@/components/forms/contact-form";
import { TouchOptimizedList } from "@/components/animations/touch-optimized-list";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Instagram, Phone, MapPin, Clock, Linkedin, Github } from "lucide-react";
import { NavieLogo } from "@/components/logo/navie-logo";

interface ContactProps {
  isMobile: boolean;
}

export function Contact({ isMobile }: ContactProps) {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-[hsl(222,84%,4%)]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/60 to-white/40 dark:from-slate-900/20 dark:via-purple-900/10 dark:to-cyan-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <MobileOptimizedSection
          animation="fade-up"
          delay={200}
          mobileAnimation="fade-up"
        >
          <div className="text-center mb-16 md:mb-20 lg:mb-24">
            <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 text-pink-400 dark:text-pink-300 text-sm font-semibold rounded-full border border-pink-500/20 dark:border-pink-400/20 mb-6">
              Let's Connect
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight text-[hsl(var(--foreground))] dark:text-white">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">create</span> something amazing together
            </h2>
            <p className="text-lg md:text-xl text-[hsl(var(--foreground))] dark:text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed font-medium">
              Ready to elevate your digital presence? Let's collaborate and bring your vision to life with MadeByNavie's unique blend of technology and artistry.
            </p>
          </div>
        </MobileOptimizedSection>
        
        {/* Contact Form */}
        <MobileOptimizedSection
          animation="scale-in"
          delay={400}
          mobileAnimation="fade-up"
        >
          <div className="max-w-4xl mx-auto mb-16 md:mb-20">
            <ContactForm />
          </div>
        </MobileOptimizedSection>

        {/* Contact Information */}

        {/* Alternative Contact Methods */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={800}
          mobileAnimation="fade-up"
        >
          <div className="text-center">
            <p className="text-muted-foreground mb-8 md:mb-12 font-medium text-lg md:text-xl">
              Prefer a different way to connect?
            </p>
            <TouchOptimizedList
              staggerDelay={isMobile ? 80 : 100}
              animation="scale-in"
              mobileAnimation="fade-up"
              className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20"
            >
              {[
                {
                  name: "WhatsApp",
                  href: "https://wa.me/2348106890380",
                  icon: MessageCircle,
                  color: "emerald",
                  ariaLabel: "Contact on WhatsApp"
                },
                {
                  name: "Email",
                  href: "mailto:dnnaji26@gmail.com?subject=Project%20Inquiry&body=Hi%20Divine,%0A%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.",
                  icon: Mail,
                  color: "cyan",
                  ariaLabel: "Send an email"
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/callmenavie?utm_source=qr&igsh=MTZxdXh6b3doczFuMw==",
                  icon: Instagram,
                  color: "pink",
                  ariaLabel: "Instagram"
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/divine-nnaji-858a53283",
                  icon: Linkedin,
                  color: "blue",
                  ariaLabel: "LinkedIn"
                },
                {
                  name: "GitHub",
                  href: "https://github.com/D33yan",
                  icon: Github,
                  color: "slate",
                  ariaLabel: "GitHub"
                },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.ariaLabel}
                  className={`group flex items-center space-x-3 hover:text-${platform.color}-400 active:text-${platform.color}-300 transition-all duration-300 active:scale-95 font-medium text-base px-6 py-4 rounded-xl hover:bg-${platform.color}-500/10 border border-transparent hover:border-${platform.color}-400/20 bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-xl`}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <div
                    className={`p-3 bg-gradient-to-r from-${platform.color}-500/20 to-${platform.color}-600/20 rounded-lg group-hover:scale-110 group-active:scale-105 transition-all duration-300 border border-${platform.color}-500/20`}
                  >
                    <platform.icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{platform.name}</span>
                </a>
              ))}
            </TouchOptimizedList>
          </div>
        </MobileOptimizedSection>

        {/* Footer */}
        <MobileOptimizedSection
          animation="fade-up"
          delay={1000}
          mobileAnimation="fade-up"
        >
          <div className="pt-8 md:pt-12 border-t border-slate-700/50 text-center">
            <div className="flex justify-center mb-6 md:mb-8">
              <NavieLogo size="sm" variant="icon" animated={false} />
            </div>
            <p className="text-muted-foreground text-sm md:text-base font-medium mb-4 font-sans">
              © 2024 MadeByNavie - Divine Nnaji. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-xs md:text-sm text-slate-500 mb-4 font-sans">
              <a href="#" className="hover:text-slate-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors duration-300">Cookie Policy</a>
            </div>
            <div className="flex justify-center">
              <a href="#home" aria-label="Back to top" className="inline-block px-4 py-2 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all duration-300 font-sans">Back to top</a>
            </div>
          </div>
        </MobileOptimizedSection>
      </div>
    </section>
  );
} 