import { useEffect, useRef } from 'react';

// Hook for single element scroll animation
export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px', triggerOnce = true) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('animate');
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          element.classList.remove('animate');
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
};

// Hook for multiple elements scroll animation (for grids/lists)
export const useScrollAnimationMultiple = (threshold = 0.1, rootMargin = '0px', triggerOnce = true) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.children;
    const observers: IntersectionObserver[] = [];

    Array.from(children).forEach((child) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            child.classList.add('animate');
            if (triggerOnce) {
              observer.unobserve(child);
            }
          } else if (!triggerOnce) {
            child.classList.remove('animate');
          }
        },
        {
          threshold,
          rootMargin,
        }
      );

      observer.observe(child);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [threshold, rootMargin, triggerOnce]);

  return ref;
};