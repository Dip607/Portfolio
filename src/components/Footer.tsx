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
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-r from-gradient-start/10 to-gradient-middle/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-gradient-end/10 to-gradient-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="section-container py-16 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Decorative Top Line */}
          <div className="w-full max-w-2xl">
            <div className="h-1 rounded-full bg-gradient-to-r from-transparent via-gradient-middle to-transparent animate-[gradient-shift_3s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />
          </div>

          

          {/* Divider with Sparkles */}
          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-border" />
            <Sparkles className="text-gradient-middle animate-pulse" size={20} />
            <div className="flex-1 h-px bg-gradient-to-r from-border via-border to-transparent" />
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-foreground/80 text-base font-medium">
              <span>© 2024 Dipan</span>
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
            
            {/* Tagline with Gradient */}
            <p className="text-sm gradient-text font-semibold">
              Crafting digital experiences with passion
            </p>
          </div>

          {/* Bottom Decoration */}
          <div className="flex gap-2 mt-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-gradient-start via-gradient-middle via-gradient-end to-gradient-accent animate-[gradient-shift_4s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />
    </footer>
  );
};

export default Footer;
