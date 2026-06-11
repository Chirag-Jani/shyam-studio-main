import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { ZoomableImage } from '@/components/ZoomableImage';
import { packages } from '@/lib/services';
import { site } from '@/lib/site-content';
import { Section, SectionTitle } from '@/components/layout/Section';

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    return (
      <main className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-heading text-4xl font-light mb-4">Package not found</h1>
        <Link to="/services" className="text-label text-foreground underline">
          Back to services
        </Link>
      </main>
    );
  }

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
            <p className="text-label text-muted-foreground mb-4">{pkg.category}</p>
            <SectionTitle as="h1" className="mb-4">
              {pkg.title}
            </SectionTitle>
            <p className="font-heading text-4xl font-light mb-4">{pkg.price}</p>
            <p className="text-body text-muted-foreground italic mb-10">{pkg.description}</p>

            <div className="border border-border p-8 mb-10">
              <h2 className="font-heading text-xl font-light mb-6">What&apos;s included</h2>
              <ul className="space-y-4">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-body text-sm">
                    <Check size={14} className="text-accent shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.title} (${pkg.price}).`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center w-full sm:w-auto px-10 py-4 bg-foreground text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Book session
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {pkg.images.map((img, idx) => (
              <ZoomableImage
                key={img}
                src={img}
                alt={`${pkg.title} sample ${idx + 1}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`w-full object-cover ${idx === 0 ? 'aspect-[4/3]' : 'aspect-video'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <Section variant="muted" className="mt-16">
        <p className="text-center text-body text-muted-foreground">
          Questions about this package?{' '}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="text-foreground underline">
            Message us on WhatsApp
          </a>
        </p>
      </Section>
    </main>
  );
};

export default ServiceDetails;
