import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionTitle } from '@/components/layout/Section';
import { packages, packageCategories } from '@/lib/services';
import { site } from '@/lib/site-content';

const Services = () => {
  const navigate = useNavigate();

  return (
    <main>
      <PageHero
        title="Services & pricing"
        subtitle="Every session is crafted with care, ensuring photographs that become treasured family heirlooms."
      />

      {packageCategories.map((category, sectionIndex) => (
        <Section key={category} variant={sectionIndex % 2 === 0 ? 'default' : 'muted'}>
          <SectionTitle className="mb-12 text-center">{category}</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages
              .filter((pkg) => pkg.category === category)
              .map((pkg) => (
                <article
                  key={pkg.id}
                  onClick={() => navigate(`/services/${pkg.slug}`)}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/services/${pkg.slug}`)}
                  role="button"
                  tabIndex={0}
                  className={`relative border p-8 flex flex-col cursor-pointer transition-colors hover:border-foreground/40 ${
                    pkg.featured ? 'border-accent bg-card' : 'border-border bg-background'
                  }`}
                >
                  {pkg.featured && (
                    <span className="text-label text-accent mb-4 uppercase tracking-widest text-[10px]">Most popular</span>
                  )}
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-heading text-2xl font-light">{pkg.title}</h3>
                    <ArrowUpRight size={18} className="shrink-0 text-muted-foreground" />
                  </div>
                  <p className="font-heading text-4xl font-light mb-2">{pkg.price}</p>
                  <p className="text-body text-muted-foreground text-xs italic mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                        <Check size={14} className="text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${site.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.title} (${pkg.price}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto inline-flex justify-center items-center gap-2 px-6 py-3 border border-border text-xs font-medium tracking-[0.15em] uppercase hover:bg-foreground hover:text-background transition-colors"
                  >
                    Book session
                  </a>
                </article>
              ))}
          </div>
        </Section>
      ))}

      <Section variant="muted">
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="mb-6">Custom packages too</SectionTitle>
          <p className="text-body text-muted-foreground mb-8">
            Need something tailored? Tell us what you are planning and we will suggest the right package.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Contact us <ArrowUpRight size={16} />
          </a>
        </div>
      </Section>
    </main>
  );
};

export default Services;
