import { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Make sure we immediately scroll to the top of the body
    lenis.scrollTo(0, { immediate: true });

    return () => lenis.destroy();
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
