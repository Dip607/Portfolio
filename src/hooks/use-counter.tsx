import { useEffect, useState } from 'react';

interface UseCounterOptions {
  start?: number;
  end: number;
  duration?: number;
  isVisible?: boolean;
}

export const useCounter = ({ start = 0, end, duration = 2000, isVisible = true }: UseCounterOptions) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const startValue = start;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, isVisible]);

  return count;
};
