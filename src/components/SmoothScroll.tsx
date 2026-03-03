import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      // Force scroll to top specifically for lenis instance
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // Fallback for standard DOM layout changes just in case
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
