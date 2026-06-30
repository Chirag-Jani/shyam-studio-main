import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { ZoomableImage } from '@/components/ZoomableImage';
import { Section } from '@/components/layout/Section';
import { serviceStudios } from '@/lib/services';
import { site } from '@/lib/site-content';

type Studio = (typeof serviceStudios)[number];

type StudioServiceProps = {
  studio: Studio;
};

export function StudioService({ studio }: StudioServiceProps) {
  return (
    <main className="pt-24 md:pt-28 pb-16">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <Link
          to="/services"
          className="inline-flex items-center text-label text-muted-foreground hover:text-foreground mb-10"
        >
          <ArrowLeft size={14} className="mr-2" /> Back to packages
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <p className="text-label text-muted-foreground mb-4">Shyam Studio · Surat</p>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light mb-6">{studio.title}</h1>
            <p className="text-body text-muted-foreground mb-10">{studio.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`${site.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${studio.title}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-10 py-4 bg-foreground text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
              >
                Book session
              </a>
              <Link
                to={studio.portfolioHref}
                className="inline-flex justify-center items-center gap-2 px-10 py-4 border border-border text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                View portfolio <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {studio.images.map((img, idx) => (
              <ZoomableImage
                key={img}
                src={img}
                alt={`${studio.title} sample ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`w-full object-cover ${idx === 0 ? 'aspect-[4/3]' : 'aspect-video'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Section variant="muted" className="mt-16">
        <p className="text-center text-body text-muted-foreground">
          Browse our{' '}
          <Link to="/services" className="text-foreground underline">
            packages & pricing
          </Link>{' '}
          or{' '}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-foreground underline">
            message us on WhatsApp
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
