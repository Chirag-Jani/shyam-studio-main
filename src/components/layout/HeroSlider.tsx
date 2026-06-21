import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export type HeroSlide = {
  src: string;
  label: string;
  href?: string;
};

type HeroSliderProps = {
  slides: readonly HeroSlide[];
  tagline: string;
  className?: string;
};

export function HeroSlider({ slides, tagline, className }: HeroSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const mq = window.matchMedia('(min-width: 768px)');
    if (!mq.matches) return;

    const timer = window.setInterval(() => emblaApi.scrollNext(), 5000);
    return () => window.clearInterval(timer);
  }, [emblaApi]);

  const loadSlide = (i: number) => {
    if (slides.length <= 1) return true;
    const prev = (index - 1 + slides.length) % slides.length;
    const next = (index + 1) % slides.length;
    return i === index || i === prev || i === next;
  };

  return (
    <section className={cn('relative pt-16 md:pt-20', className)}>
      {/* Mobile: single hero image */}
      <div className="md:hidden relative min-h-[70vh]">
        <img
          src={slides[0].src}
          alt={slides[0].label}
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-warm-900/45" />
        <div className="relative z-10 flex flex-col justify-end min-h-[70vh] px-6 pb-28">
          <p className="text-label text-primary-foreground/80 mb-3">{slides[0].label}</p>
          <h1 className="font-heading text-3xl font-light text-primary-foreground leading-tight max-w-sm">{tagline}</h1>
          <Link
            to="/portfolio"
            className="mt-6 inline-flex w-fit px-6 py-3 bg-primary-foreground text-warm-900 text-xs font-medium tracking-[0.15em] uppercase"
          >
            View portfolio
          </Link>
        </div>
      </div>

      {/* Desktop: slider */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div key={slide.src} className="min-w-0 shrink-0 grow-0 basis-full">
                <div className="relative aspect-[21/9] min-h-[420px] max-h-[75vh] bg-muted">
                  {loadSlide(i) ? (
                    <img
                      src={slide.src}
                      alt={slide.label}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      fetchPriority={i === 0 ? 'high' : undefined}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-900/70 via-warm-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14">
                    <p className="text-label text-primary-foreground/80 mb-3">{slide.label}</p>
                    <h1 className="font-heading text-4xl lg:text-5xl font-light text-primary-foreground max-w-2xl">{tagline}</h1>
                    <Link
                      to={slide.href ?? '/portfolio'}
                      className="mt-6 inline-flex px-7 py-3 bg-primary-foreground text-warm-900 text-xs font-medium tracking-[0.15em] uppercase hover:bg-primary-foreground/90 transition-colors"
                    >
                      Explore {slide.label.toLowerCase()}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 right-8 lg:right-14 flex items-center gap-3 z-10">
          <div className="flex gap-2 mr-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  'h-1.5 rounded-full transition-all',
                  i === index ? 'w-6 bg-primary-foreground' : 'w-1.5 bg-primary-foreground/40',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={scrollPrev}
            className="w-10 h-10 border border-primary-foreground/30 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/10"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="w-10 h-10 border border-primary-foreground/30 text-primary-foreground flex items-center justify-center hover:bg-primary-foreground/10"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
