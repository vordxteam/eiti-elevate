import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Extract number from value (e.g., "500+" -> 500)
  const getNumericValue = (val: string) => {
    const match = val.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  const numericValue = getNumericValue(value);
  const suffix = value.replace(/\d+(?:\.\d+)?/, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`counter-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * numericValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, numericValue, duration]);

  return (
    <span id={`counter-${value}`}>
      {count}{suffix}
    </span>
  );
};

export default AnimatedCounter;