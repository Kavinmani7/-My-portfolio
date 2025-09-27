
import { useState, useEffect, useRef, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, options: IntersectionObserverInit = { threshold: 0.1 }): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        // Disconnect after it becomes visible to prevent re-triggering
        observer.disconnect();
      }
    }, options);
    
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, options]);

  return isIntersecting;
}
