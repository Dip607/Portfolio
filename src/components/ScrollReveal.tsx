import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-up' | 'fade-down';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  animation = 'fade-up', 
  delay = 0,
  duration = 0.6,
  className 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const animationClasses = {
    'fade-up': 'translate-y-10 opacity-0',
    'fade-down': '-translate-y-10 opacity-0',
    'fade-in': 'opacity-0',
    'slide-left': 'translate-x-10 opacity-0',
    'slide-right': '-translate-x-10 opacity-0',
    'scale-up': 'scale-95 opacity-0'
  };

  const activeClasses = 'translate-y-0 translate-x-0 opacity-100 scale-100';

  return (
    <div
      ref={ref}
      className={cn(
        // ✨ MODIFIED: Added font-mono class here.
        'transition-all ease-out font-mono', 
        !isVisible && animationClasses[animation],
        isVisible && activeClasses,
        className
      )}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;