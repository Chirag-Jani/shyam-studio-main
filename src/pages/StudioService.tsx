import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Check, MapPin } from 'lucide-react';
import { ZoomableImage } from '@/components/ZoomableImage';
import { Section, SectionEyebrow, SectionTitle } from '@/components/layout/Section';
import { serviceStudios } from '@/lib/services';
import { site } from '@/lib/site-content';

type Studio = (typeof serviceStudios)[number];

type StudioServiceProps = {
  studio: Studio;
};

export function StudioService({ studio }: StudioServiceProps) {
  return (
    <main>
      <div className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <Link
            to="/services"
            className="inline-flex items-center text-label text-muted-foreground hover:text-foreground mb-10"
          >
            <ArrowLeft size={14} className="mr-2" /> Back to packages
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionEyebrow>Shyam Studio · Surat</SectionEyebrow>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light mb-3">{studio.title}</h1>
              <p className="text-label text-accent mb-6">{studio.subtitle}</p>
              <p className="text-body text-muted-foreground mb-8">{studio.description}</p>

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
      </div>

      <Section>
        <div className="max-w-3xl space-y-6">
          {studio.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-body text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionTitle className="mb-10">What&apos;s included in your session</SectionTitle>
        <ul className="grid sm:grid-cols-2 gap-4">
          {studio.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-body text-sm text-muted-foreground border border-border bg-background p-5">
              <Check size={16} className="text-accent shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionTitle className="mb-10">Session details</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-6">
          {studio.sessionInfo.map((info) => (
            <div key={info.label} className="border border-border p-6">
              <p className="text-label text-muted-foreground mb-2">{info.label}</p>
              <p className="text-body text-foreground">{info.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <SectionEyebrow>Visit us in Surat</SectionEyebrow>
            <SectionTitle className="mb-4">Our studio location</SectionTitle>
            <p className="text-body text-muted-foreground mb-6">
              Shyam Studio is based in Mota Varachha, Surat — with a fully equipped indoor setup for comfortable,
              professional sessions year-round. Message us to check availability and plan your shoot.
            </p>
            <p className="flex gap-2 text-body text-muted-foreground text-sm">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              {site.address}
            </p>
          </div>
          <div className="border border-border bg-background p-8 text-center">
            <p className="font-heading text-2xl font-light mb-3">Ready to book?</p>
            <p className="text-body text-muted-foreground text-sm mb-6">
              Packages start from ₹11,500. Compare plans or message us for a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/services"
                className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-foreground text-background text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground/90 transition-colors"
              >
                View packages <ArrowUpRight size={14} />
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center px-8 py-3 border border-border text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
