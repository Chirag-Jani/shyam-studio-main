import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useOnceNearViewport } from '@/hooks/use-once-near-viewport';

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  rootMargin?: string;
};

/** Loads `src` only when the wrapper enters (or nears) the viewport. */
export function LazyImage({ src, alt, className, imgClassName, rootMargin = '300px' }: LazyImageProps) {
  const [wrapEl, setWrapEl] = useState<HTMLDivElement | null>(null);
  const shouldLoad = useOnceNearViewport(wrapEl, rootMargin);

  return (
    <div ref={setWrapEl} className={cn('overflow-hidden bg-muted', className)}>
      {shouldLoad ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={cn('w-full h-full object-cover', imgClassName)}
        />
      ) : (
        <div className="w-full h-full min-h-[inherit] bg-muted" aria-hidden />
      )}
    </div>
  );
}
