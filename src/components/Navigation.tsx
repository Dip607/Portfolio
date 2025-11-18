import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-gradient">
            Dipan
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="/resume.pdf" // 👈 Set the path to your PDF file here
              target="_blank"                 // Optional: Opens the PDF in a new tab
              rel="noopener noreferrer"       // Recommended for security when using target="_blank"
            >
             <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Resume
             </Button>
            </a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* FULLSCREEN SOLID WHITE MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 animate-fade-in md:hidden">

          {/* Close Button */}
          <div className="flex justify-end mb-6">
            <button
              className="text-black"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-6 mt-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black/80 hover:text-primary text-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
              Resume
            </Button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Navigation;
