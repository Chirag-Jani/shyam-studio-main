import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Play } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Section } from '@/components/layout/Section';
import { LazyImage } from '@/components/LazyImage';
import { ImageLightboxOverlay } from '@/components/ImageLightboxOverlay';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import {
  isPortfolioFilterCategory,
  portfolioGalleryItems,
  type PortfolioGalleryItem,
} from '@/lib/portfolio-media';

const PAGE_SIZE = 12;

const categories = [
  { id: 'all', label: 'All' },
  { id: 'toddlers', label: 'Toddlers' },
  { id: 'newborn', label: 'Newborn' },
  { id: 'family-shoots', label: 'Family Shoots' },
  { id: 'festival', label: 'Festival' },
  { id: 'reels-outdoor', label: 'Outdoor reels' },
  { id: 'reels-indoor', label: 'Indoor reels' },
] as const;

function categoryFromSearchParams(params: URLSearchParams): string {
  const category = params.get('category');
  return isPortfolioFilterCategory(category) ? category : 'all';
}

function PortfolioReelPlaceholder({ title }: { title: string }) {
  return (
    <div className="w-full aspect-[9/16] bg-muted flex flex-col items-center justify-center gap-3 text-muted-foreground">
      <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center">
        <Play size={22} className="ml-1" />
      </div>
      <span className="text-label">{title}</span>
    </div>
  );
}

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [active, setActive] = useState(() => categoryFromSearchParams(searchParams));
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<PortfolioGalleryItem | null>(null);

  useScrollLock(!!selected && selected.kind === 'reel');

  useEffect(() => {
    setActive(categoryFromSearchParams(searchParams));
  }, [searchParams]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active]);

  const selectCategory = (id: string) => {
    setActive(id);
    if (id === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  };

  useEffect(() => {
    if (selected?.kind !== 'reel') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  const filtered =
    active === 'all' ? portfolioGalleryItems : portfolioGalleryItems.filter((i) => i.category === active);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <main>
      <PageHero
        title="Portfolio gallery"
        subtitle="A curated collection of our finest work. Each image represents a story, a moment, a memory."
      />

      <div className="sticky top-16 z-30 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl py-4">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectCategory(cat.id)}
                className={`text-label whitespace-nowrap pb-2 border-b-2 transition-colors ${
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
      </div>

      <Section className="!pt-12">
        <div key={active} className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {visible.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid cursor-zoom-in group [content-visibility:auto]"
              onClick={() => setSelected(item)}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
              role="button"
              tabIndex={0}
            >
              {item.kind === 'photo' ? (
                <LazyImage
                  src={item.src}
                  alt={item.title}
                  className={item.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'}
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                  rootMargin="200px"
                />
              ) : (
                <PortfolioReelPlaceholder title={item.title} />
              )}
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
              className="px-8 py-4 border border-border text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Load more ({filtered.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </Section>

      <ImageLightboxOverlay
        open={selected?.kind === 'photo'}
        src={selected?.kind === 'photo' ? selected.src : ''}
        alt={selected?.kind === 'photo' ? selected.title : ''}
        onClose={() => setSelected(null)}
      />

      {selected?.kind === 'reel' && (
        <div
          className="fixed inset-0 z-[100] bg-warm-900/95 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelected(null)}
          role="presentation"
        >
          <div className="relative max-w-4xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <video
              key={selected.src}
              src={selected.src}
              controls
              playsInline
              preload="none"
              className="max-h-[85vh] w-auto max-w-full"
              autoPlay
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Portfolio;
