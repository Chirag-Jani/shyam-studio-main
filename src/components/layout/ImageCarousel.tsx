import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type ImageCarouselProps = {
  images: readonly string[];
  altPrefix?: string;
  className?: string;
};

export function ImageCarousel({ images, altPrefix = 'Portfolio', className }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  const shouldLoadSlide = (i: number) => {
    if (images.length <= 1) return true;
    const prev = (index - 1 + images.length) % images.length;
    const next = (index + 1) % images.length;
    return i === index || i === prev || i === next;
  };

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={src} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-muted">
                {shouldLoadSlide(i) ? (
                  <img
                    src={src}
                    alt={`${altPrefix} ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading={i === index ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full bg-muted" aria-hidden />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-label text-muted-foreground tabular-nums">
          {index + 1} / {images.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
