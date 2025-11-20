import { Github, Linkedin, Mail, Heart, Code, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: Github,
      color: 'text-gray-700 hover:text-blue-600',
      bgColor: 'bg-gray-100 hover:bg-blue-100',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: Linkedin,
      color: 'text-blue-600 hover:text-cyan-600',
      bgColor: 'bg-blue-100 hover:bg-cyan-100',
    },
    {
      name: 'Email',
      href: 'mailto:dipanmandal111@gmail.com',
      icon: Mail,
      color: 'text-cyan-600 hover:text-blue-600',
      bgColor: 'bg-cyan-100 hover:bg-blue-100',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white via-blue-50 to-cyan-50 border-t-2 border-blue-200 overflow-hidden">
      {/* Ambient Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-cyan-200 to-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center gap-12">
          {/* Top Decorative Line */}
          <ScrollReveal animation="fade-up">
            <div className="w-full max-w-2xl">
              <div className="h-1 rounded-full bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
            </div>
          </ScrollReveal>

          
          {/* Divider */}
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

          {/* Copyright and Info Section */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2 text-gray-700 text-base font-medium">
                  <span>© {currentYear} Dipan Mandal</span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1">
                    Built with
                    <Heart
                      size={18}
                      className="text-blue-600 fill-blue-600 animate-pulse"
                    />
                  </span>
                </div>

                <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                  Crafted with
                  <Code size={16} className="text-cyan-600" />
                  for modern web experiences
                </p>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-4 border-t border-blue-200 w-full">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-blue-600">100%</span>
                  <span className="text-xs">Responsive</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-cyan-600">A+</span>
                  <span className="text-xs">Performance</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-blue-600">24/7</span>
                  <span className="text-xs">Support</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Scroll to Top Button */}
          <ScrollReveal animation="fade-up" delay={0.3}>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={24} />
            </button>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
    </footer>
  );
};

export default Footer;
