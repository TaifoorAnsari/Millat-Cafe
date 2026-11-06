import { useEffect, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState('up');
  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - previous) > 8) setDirection(current > previous ? 'down' : 'up');
      previous = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return direction;
}
