import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import { LazyImage } from '@/components/LazyImage';
import { OffersForm } from '@/components/OffersForm';
import { HeroSlider } from '@/components/layout/HeroSlider';
import { Section, SectionTitle } from '@/components/layout/Section';
import { site, stats, homeCategoryGalleries, heroSlides, testimonials, uspHighlights } from '@/lib/site-content';

const Index = () => {
  return (
    <main>
      <HeroSlider slides={heroSlides} tagline={site.tagline} />

      {/* Category galleries — photos first */}
      {homeCategoryGalleries.map((cat, idx) => (
        <Section key={cat.title} variant={idx % 2 === 0 ? 'default' : 'muted'}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-label text-muted-foreground mb-2">{cat.subtitle}</p>
              <SectionTitle as="h2">{cat.title}</SectionTitle>
            </div>
            <Link
              to={cat.href}
              className="inline-flex items-center gap-2 text-label text-foreground shrink-0"
            >
              View all <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {cat.images.map((src, i) => (
              <Link
                key={src}
                to={cat.href}
                className={`overflow-hidden group ${i === 0 ? 'col-span-2 md:col-span-1 md:row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[320px]' : 'aspect-square'}`}
              >
                <LazyImage
                  src={src}
                  alt={`${cat.title} ${i + 1}`}
                  className="w-full h-full min-h-full"
                  imgClassName="transition-transform duration-500 group-hover:scale-105"
                  rootMargin="250px"
                />
              </Link>
            ))}
          </div>
        </Section>
      ))}

      {/* Quick highlights — short, not paragraphs */}
      <Section variant="card">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {uspHighlights.map((item) => (
            <div key={item.title}>
              <h3 className="font-heading text-xl font-light text-foreground mb-2">{item.title}</h3>
              <p className="text-body text-muted-foreground text-sm">{item.line}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-2xl md:text-4xl font-light">{s.value}</p>
              <p className="mt-1 text-label text-muted-foreground text-[10px] md:text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Offers */}
      <Section variant="muted">
        <div className="text-center max-w-lg mx-auto">
          <SectionTitle className="mb-3 text-2xl md:text-3xl">Get latest offers</SectionTitle>
          <p className="text-body text-muted-foreground text-sm mb-8">Share your number — we will reach out on WhatsApp.</p>
          <OffersForm />
        </div>
      </Section>

      {/* Testimonials with photos */}
      <Section>
        <SectionTitle className="mb-10 text-center">Client stories</SectionTitle>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.author} className="border border-border overflow-hidden">
              <LazyImage src={t.image} alt={t.role} className="aspect-[4/3] w-full" rootMargin="200px" />
              <figcaption className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="font-heading text-base font-light italic text-foreground leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <p className="font-body text-sm font-medium">{t.author}</p>
                <p className="text-label text-muted-foreground mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/reviews" className="text-label text-foreground inline-flex items-center gap-2">
            More reviews <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="muted">
        <div className="text-center max-w-xl mx-auto">
          <SectionTitle className="mb-6 text-2xl md:text-4xl">Ready to capture your story?</SectionTitle>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex justify-center items-center px-8 py-4 bg-accent text-accent-foreground text-xs font-medium tracking-[0.15em] uppercase"
            >
              Call {site.phone}
            </a>
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-border text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
            >
              Contact us
            </Link>
          </div>
          <p className="mt-8 text-body text-muted-foreground text-sm">
            <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              {site.address}
            </a>
          </p>
        </div>
      </Section>
    </main>
  );
};

export default Index;
