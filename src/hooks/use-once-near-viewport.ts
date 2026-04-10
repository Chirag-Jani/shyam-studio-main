import { useEffect, useState } from 'react';

/**
 * Fires once when the element is near the viewport (for lazy media src / decode).
 * Use a ref callback (`ref={setNode}`) so `element` updates after mount.
 */
export function useOnceNearViewport(
  element: Element | null,
  rootMargin = '200px',
): boolean {
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (near || !element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setNear(true);
            break;
          }
        }
      },
      { rootMargin, threshold: 0.01 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [near, rootMargin, element]);

  return near;
}
