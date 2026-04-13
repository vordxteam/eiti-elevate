import { useEffect, useRef } from "react";

interface FluidRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FluidReveal = ({ children, delay = 0, className = "" }: FluidRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (elementRef.current) {
        elementRef.current.style.animationPlayState = 'running';
      }
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Stagger the animations
          setTimeout(() => {
            element.style.animationPlayState = 'running';
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`fluid-reveal ${className}`}
      style={{
        animation: `fluid-reveal-bg 0.4s ease-out ${delay}ms forwards, fluid-reveal 0.6s ease-out ${delay + 100}ms forwards`,
        animationPlayState: 'paused',
      }}
    >
      {children}
    </div>
  );
};

export default FluidReveal;