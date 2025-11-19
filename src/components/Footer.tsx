import { Github, Linkedin, Mail, Heart, Sparkles, Code } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
      gradient: 'from-gradient-start to-gradient-middle',
      hoverGradient: 'hover:from-gradient-middle hover:to-gradient-end',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      gradient: 'from-gradient-middle to-gradient-end',
      hoverGradient: 'hover:from-gradient-end hover:to-gradient-accent',
    },
    {
      name: 'Email',
      href: 'mailto:dipan@example.com',
      icon: Mail,
      gradient: 'from-gradient-end to-gradient-accent',
      hoverGradient: 'hover:from-gradient-accent hover:to-gradient-pop',
    },
  ];

  return (
    // Updated Footer: 
    // - Background reverted to original: bg-gradient-to-b from-background to-secondary/30
    // - Border and shadow applied for the distressed/burn look.
    <footer className="relative 
      border-t-2 border-b-2 border-border/80 
      bg-gradient-to-b from-background to-secondary/30 
      shadow-[0_0_15px_rgba(255,100,0,0.2),_0_0_50px_rgba(0,0,0,0.3)_inset] 
      overflow-hidden
      transition-all duration-500"
    >
      {/* Animated Background Elements - Made darker/more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-r from-gradient-start/20 to-gradient-middle/20 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-gradient-end/20 to-gradient-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Burned Edge/Texture Simulation (top) */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-900/50 to-transparent" />
      
      <div className="section-container py-16 relative z-10">
        <div className="flex flex-col items-center gap-8">
          
          {/* Decorative Top Line - Kept for structure, adjusted for potential border overlap */}
          <div className="w-full max-w-2xl">
            <div className="h-1 rounded-full bg-gradient-to-r from-transparent via-gradient-middle to-transparent animate-[gradient-shift_3s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />
          </div>

          
          {/* Divider with Sparkles - Using original middle gradient color for continuity */}
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
            <Sparkles className="text-gradient-middle animate-pulse" size={20} />
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
          </div>

          {/* Copyright Section - Reverted text colors to be general foreground/muted */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-foreground/80 text-base font-medium">
              <span>© 2025 Dipan</span>
              <span className="text-muted-foreground">•</span>
              <span className="flex items-center gap-2">
                Built with
                <Heart 
                  size={18} 
                  className="text-gradient-middle fill-gradient-middle animate-pulse inline-block" 
                />
                and
                <Code 
                  size={18} 
                  className="text-gradient-end inline-block" 
                />
              </span>
            </div>
            
            {/* Tagline with Gradient - Used the original gradient-text class */}
            <p className="text-sm gradient-text font-semibold">
              Crafting digital experiences with passion
            </p>
          </div>

          {/* Bottom Decoration - Used amber/orange for a warm glow of the burn effect */}
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                // Retaining the burn/glow color scheme here for the modern effect
                className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-600 shadow-[0_0_5px_rgba(251,191,36,0.8)] animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Burned Edge/Texture Simulation (bottom) - Thicker, more pronounced distress line */}
      <div className="h-2 
        bg-gradient-to-r from-transparent via-orange-900/80 to-transparent 
        shadow-[0_0_10px_rgba(255,100,0,0.5)]" 
      />
    </footer>
  );
};

export default Footer;