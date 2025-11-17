import { ButtonHTMLAttributes, MouseEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface RippleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  loading?: boolean;
  rippleColor?: string;
}

interface Ripple {
  x: number;
  y: number;
  size: number;
  id: number;
}

const RippleButton = ({ 
  children, 
  className, 
  onClick, 
  loading = false,
  rippleColor = 'rgba(255, 255, 255, 0.5)',
  disabled,
  variant = 'default',
  size = 'default',
  ...props 
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: Ripple = {
      x,
      y,
      size,
      id: Date.now()
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Button
      className={cn('relative overflow-hidden', className)}
      onClick={handleClick}
      disabled={disabled || loading}
      variant={variant}
      size={size}
      {...props}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
          }}
        />
      ))}
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};

export default RippleButton;
