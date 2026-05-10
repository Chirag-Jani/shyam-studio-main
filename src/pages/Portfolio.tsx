import { useEffect, useState, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText';
import { ImageLightboxOverlay } from '@/components/ImageLightboxOverlay';
import { useOnceNearViewport } from '@/hooks/use-once-near-viewport';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import {
  portfolioGalleryItems,
  type PortfolioGalleryItem,
} from '@/lib/portfolio-media';

function PortfolioReelThumb({
  src,
  className,
  onMouseEnter,
  onMouseLeave,
}: {
  src: string;
  className: string;
  onMouseEnter: (e: MouseEvent<HTMLVideoElement>) => void;
  onMouseLeave: (e: MouseEvent<HTMLVideoElement>) => void;
}) {
  const [wrapEl, setWrapEl] = useState<HTMLDivElement | null>(null);
  const loadMedia = useOnceNearViewport(wrapEl);

  return (
    <div ref={setWrapEl} className="relative w-full">
      {loadMedia ? (
        <video
          src={src}
          muted
          playsInline
          loop
          preload="metadata"
          className={className}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      ) : (
        <div className={`${className} bg-muted`} aria-hidden />
      )}
    </div>
  );
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'toddlers', label: 'Toddlers' },
  { id: 'newborn', label: 'Newborn' },
  { id: 'family-shoots', label: 'Family Shoots' },
  { id: 'festival', label: 'Festival' },
  { id: 'reels-outdoor', label: 'Outdoor reels' },
  { id: 'reels-indoor', label: 'Indoor reels' },
] as const;

const Portfolio = () => {
  const [active, setActive] = useState<string>('all');
  const [selected, setSelected] = useState<PortfolioGalleryItem | null>(null);

  useScrollLock(!!selected && selected.kind === 'reel');

  useEffect(() => {
    if (selected?.kind !== 'reel') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const filtered =
    active === 'all'
      ? portfolioGalleryItems
      : portfolioGalleryItems.filter((i) => i.category === active);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <AnimatedText
            text="Portfolio Gallery"
            as="h1"
            className="heading-display text-5xl md:text-7xl text-foreground"
          />
          <motion.p
            className="mt-6 text-body text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A curated collection of our finest work across all categories.
            Each image represents a story, a moment, a memory.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-label whitespace-nowrap pb-2 border-b-2 transition-all duration-300 ${
                  active === cat.id
                    ? 'text-foreground border-foreground'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="gallery-item break-inside-avoid group cursor-zoom-in"
                  onClick={() => setSelected(item)}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: Math.min(i * 0.02, 0.35) }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden">
                    {item.kind === 'photo' ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                          item.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                        }`}
                      />
                    ) : (
                      <PortfolioReelThumb
                        src={item.src}
                        className="w-full aspect-[9/16] max-h-[85vh] object-cover transition-transform duration-700 group-hover:scale-110"
                        onMouseEnter={(e) => void e.currentTarget.play()}
                        onMouseLeave={(e) => {
                          e.currentTarget.pause();
                          e.currentTarget.currentTime = 0;
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-warm-900/40 lg:bg-warm-900/0 group-hover:bg-warm-900/50 transition-all duration-500 flex items-center justify-center">
                      <motion.div
                        className="text-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      >
                        <p className="font-heading text-2xl text-primary-foreground font-light">{item.title}</p>
                        <p className="text-label text-primary-foreground/60 mt-2">
                          {categories.find((c) => c.id === item.category)?.label}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ImageLightboxOverlay
        open={selected?.kind === 'photo'}
        src={selected?.kind === 'photo' ? selected.src : ''}
        alt={selected?.kind === 'photo' ? selected.title : ''}
        onClose={() => setSelected(null)}
        caption={selected?.kind === 'photo' ? selected.title : undefined}
        subcaption={
          selected?.kind === 'photo'
            ? categories.find((c) => c.id === selected.category)?.label
            : undefined
        }
      />

      {/* Video lightbox */}
      <AnimatePresence>
        {selected?.kind === 'reel' && (
          <motion.div
            className="fixed inset-0 z-[100] bg-warm-900/95 flex items-center justify-center p-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={selected.src}
                controls
                playsInline
                preload="metadata"
                className="max-h-[85vh] w-auto max-w-full"
                autoPlay
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-warm-900/80">
                <p className="font-heading text-2xl text-primary-foreground">{selected.title}</p>
                <p className="text-label text-primary-foreground/60 mt-1">
                  {categories.find((c) => c.id === selected.category)?.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
