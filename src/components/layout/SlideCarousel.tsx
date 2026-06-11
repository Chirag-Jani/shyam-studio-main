import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { MoveLeft, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
};

type SlideCarouselProps = {
  slides: readonly Slide[];
  className?: string;
};

export function SlideCarousel({ slides, className }: SlideCarouselProps) {
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

  return (
    <div className={cn('relative px-10 md:px-24', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full px-1">
              <div className="min-h-[300px] md:min-h-[320px] flex flex-col items-center justify-center text-center">
                <p className="text-label text-muted-foreground mb-6">{slide.eyebrow}</p>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">{slide.title}</h3>
                <p className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/70 mb-8">
                  {slide.subtitle}
                </p>
                <p className="text-body text-sm text-muted-foreground max-w-2xl">{slide.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Previous slide"
      >
        <MoveLeft size={32} strokeWidth={1} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Next slide"
      >
        <MoveRight size={32} strokeWidth={1} />
      </button>

      <p className="mt-8 text-center text-label text-muted-foreground tabular-nums">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
