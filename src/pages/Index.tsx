import { Link } from 'react-router-dom';
import { ArrowUpRight, Instagram, Phone, Star } from 'lucide-react';
import { ZoomableImage } from '@/components/ZoomableImage';
import { LazyImage } from '@/components/LazyImage';
import { OffersForm } from '@/components/OffersForm';
import { Section, SectionEyebrow, SectionTitle } from '@/components/layout/Section';
import { SlideCarousel } from '@/components/layout/SlideCarousel';
import { ImageCarousel } from '@/components/layout/ImageCarousel';
import {
  site,
  stats,
  heroEyebrow,
  heroCollage,
  letter,
  uspSlides,
  storiesWeCover,
  planningOptions,
  differentiators,
  contentSections,
  testimonials,
  portfolioCarouselImages,
} from '@/lib/site-content';

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-background pt-28 md:pt-36 pb-10 md:pb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center">
          <p className="text-label text-muted-foreground leading-loose">
            {heroEyebrow[0]}
            <br />
            {heroEyebrow[1]}
          </p>
          <h1 className="mt-8 font-heading text-3xl md:text-5xl font-light tracking-tight text-foreground text-balance max-w-3xl mx-auto">
            {site.tagline}
          </h1>
        </div>

        {/* Collage */}
        <div className="container mx-auto px-6 md:px-12 max-w-6xl mt-12 md:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-10 md:gap-12 lg:gap-20">
            <div className="hidden md:flex flex-col gap-12 pt-28">
              <LazyImage
                src={heroCollage.left[0]}
                alt={`${site.name} newborn photography`}
                className="w-40 lg:w-48 aspect-square self-start rounded-sm overflow-hidden"
                imgClassName="w-full h-full object-cover"
              />
              <LazyImage
                src={heroCollage.left[1]}
                alt={`${site.name} family photography`}
                className="w-44 lg:w-52 aspect-[4/5] self-end rounded-sm overflow-hidden"
                imgClassName="w-full h-full object-cover"
              />
            </div>

            <div className="mx-auto w-60 sm:w-72 lg:w-80 aspect-[3/5] rounded-full overflow-hidden">
              <ZoomableImage
                src={heroCollage.center}
                alt={site.name}
                fetchPriority="high"
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden md:flex flex-col gap-12 pt-28">
              <LazyImage
                src={heroCollage.right[0]}
                alt={`${site.name} family portrait`}
                className="w-40 lg:w-48 aspect-square self-end rounded-sm overflow-hidden"
                imgClassName="w-full h-full object-cover"
              />
              <LazyImage
                src={heroCollage.right[1]}
                alt={`${site.name} toddler photography`}
                className="w-44 lg:w-52 aspect-[4/5] self-start rounded-sm overflow-hidden"
                imgClassName="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Letter */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-label text-muted-foreground mb-6">{letter.label}</p>
          <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-8">{letter.heading}</h2>
          <div className="space-y-5">
            {letter.paragraphs.map((p, i) => (
              <p key={i} className="text-body text-sm text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-10 font-accent italic text-2xl text-foreground">{letter.signature}</p>
        </div>
      </Section>

      {/* USP Carousel */}
      <Section variant="card">
        <SlideCarousel slides={uspSlides} />
      </Section>

      {/* Stories we cover */}
      <Section variant="card">
        <SectionTitle className="mb-10 text-center">We cover stories for…</SectionTitle>
        <div className="border-t border-border pt-12 grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 text-center">
          {storiesWeCover.map((story) => (
            <Link
              key={story.href}
              to={story.href}
              className="font-body text-xs md:text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-foreground transition-colors"
            >
              {story.label}
            </Link>
          ))}
        </div>
      </Section>

      {/* Offers */}
      <Section>
        <div className="text-center">
          <SectionTitle className="mb-3">Get latest offers</SectionTitle>
          <p className="text-body text-muted-foreground text-sm mb-10">Avail our latest offers — we will reach out on WhatsApp.</p>
          <OffersForm />
        </div>
      </Section>

      {/* Stats */}
      <Section variant="card">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-heading text-4xl md:text-5xl font-light text-foreground">{s.value}</p>
              <p className="mt-2 text-label text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio carousel */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionTitle>Selected work</SectionTitle>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-label text-foreground line-reveal shrink-0">
            View full portfolio <ArrowUpRight size={14} />
          </Link>
        </div>
        <ImageCarousel images={portfolioCarouselImages} altPrefix="Shyam Studio portfolio" />
      </Section>

      {/* Contact strip */}
      <Section variant="card">
        <div className="text-center">
          <SectionEyebrow className="text-center">Contact information</SectionEyebrow>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-3 font-heading text-3xl md:text-5xl font-light text-foreground hover:opacity-80 transition-opacity"
          >
            <Phone size={28} className="hidden sm:block" />
            {site.phone}
          </a>
          <div className="mt-6 flex items-center justify-center gap-8">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted-foreground hover:text-foreground transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </Section>

      {/* Instagram */}
      <Section>
        <SectionTitle className="mb-4">Follow our work on Instagram</SectionTitle>
        <p className="text-body text-muted-foreground max-w-2xl mb-10">
          See our latest toddlers, newborn, family, festival photography, and reels on Instagram.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {portfolioCarouselImages.slice(0, 3).map((src, i) => (
            <a
              key={src}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden group block"
            >
              <LazyImage
                src={src}
                alt={`Instagram preview ${i + 1}`}
                className="aspect-square w-full h-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
            </a>
          ))}
        </div>
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-label text-foreground"
        >
          <Instagram size={16} /> @{site.instagramHandle} <ArrowUpRight size={14} />
        </a>
      </Section>

      {/* What makes different */}
      <Section variant="muted">
        <SectionEyebrow>What makes {site.name} different</SectionEyebrow>
        <SectionTitle className="mb-6">Our work is defined by the full experience</SectionTitle>
        <p className="text-body text-muted-foreground mb-8 max-w-3xl">
          We do not rely on rigid posing or templates. We build shoots around real people, real behaviour, and real situations.
        </p>
        <ul className="grid sm:grid-cols-2 gap-4">
          {differentiators.map((item) => (
            <li key={item} className="flex gap-3 text-body text-sm text-muted-foreground">
              <span className="text-accent mt-1">•</span>
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Planning */}
      <Section>
        <SectionEyebrow>What are you planning right now?</SectionEyebrow>
        <SectionTitle className="mb-4">Every stage needs a different approach</SectionTitle>
        <p className="text-body text-muted-foreground mb-12 max-w-2xl">
          Choose what fits your current moment. Each experience is designed around comfort, timing, and how the shoot should feel.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planningOptions.map((opt) => (
            <Link
              key={opt.title}
              to={opt.href}
              className="group border border-border p-6 hover:border-foreground/30 hover:bg-card transition-colors"
            >
              <h3 className="font-heading text-2xl font-light text-foreground mb-2 group-hover:text-accent transition-colors">
                {opt.title}
              </h3>
              <p className="text-body text-muted-foreground text-sm">{opt.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-label text-muted-foreground group-hover:text-foreground">
                Explore <ArrowUpRight size={12} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            View packages & pricing
          </Link>
        </div>
      </Section>

      {/* Long-form sections */}
      {contentSections.map((block, i) => (
        <Section key={block.title} variant={i % 2 === 0 ? 'default' : 'muted'}>
          <h2 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-6">{block.title}</h2>
          {block.paragraphs.map((p, j) => (
            <p key={j} className="text-body text-muted-foreground mb-4 max-w-3xl">
              {p}
            </p>
          ))}
          {'bullets' in block && block.bullets && (
            <ul className="mt-4 space-y-2">
              {block.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-body text-sm text-muted-foreground">
                  <span className="text-accent">•</span>
                  {b}
                </li>
              ))}
            </ul>
          )}
        </Section>
      ))}

      {/* Testimonials */}
      <Section>
        <SectionTitle className="mb-12 text-center">Client stories</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <blockquote key={t.author} className="border border-border p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="font-heading text-lg font-light text-foreground italic leading-relaxed mb-6">"{t.text}"</p>
              <footer>
                <p className="font-body text-sm font-medium">{t.author}</p>
                <p className="text-label text-muted-foreground mt-1">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/reviews" className="text-label text-foreground line-reveal inline-flex items-center gap-2">
            More reviews <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="muted">
        <div className="text-center max-w-3xl mx-auto">
          <SectionEyebrow className="text-center">If you are planning a shoot, start here</SectionEyebrow>
          <SectionTitle className="mb-6">We will handle the rest.</SectionTitle>
          <p className="text-body text-muted-foreground mb-10">
            You do not need to know how shoots work. You just need to know what moment you want to capture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              View Portfolio <ArrowUpRight size={16} />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/5 transition-colors"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </Section>

      {/* Studio info */}
      <Section>
        <SectionEyebrow>Official studio information</SectionEyebrow>
        <p className="text-body text-muted-foreground max-w-2xl mb-6">
          Visit us at our Surat studio for toddlers, newborn, family, and festival photography sessions. Professional setup,
          props, and a comfortable environment for your family.
        </p>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-body text-foreground hover:underline"
        >
          {site.address}
        </a>
      </Section>
    </main>
  );
};

export default Index;
