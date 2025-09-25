import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, inView]);

  return (
    <span ref={ref} className="font-bold text-3xl lg:text-4xl text-primary">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;