import { Star, Quote } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionTitle } from '@/components/layout/Section';
import { site } from '@/lib/site-content';

const reviews = [
  {
    text: "Shyam Studio captured our baby's first moments so beautifully. Every photo tells a story. The attention to detail and the patience they showed with our little one was remarkable.",
    author: 'Priya Sharma',
    role: 'Newborn Session',
  },
  {
    text: "From start to finish, the team made us feel at ease. Our kids had a blast during the session and the photos are priceless.",
    author: 'Anita Desai',
    role: 'Family Session',
  },
  {
    text: "We've been coming to Shyam Studio for all our milestones. The consistency in quality and the warm environment keeps us coming back.",
    author: 'Vikram & Sunita Reddy',
    role: 'Premium Package',
  },
  {
    text: "The newborn session was handled with such care. The photos turned out magical.",
    author: 'Deepa Krishnan',
    role: 'Newborn Session',
  },
  {
    text: "Outstanding photography! The edited photos arrived quickly and were museum-worthy.",
    author: 'Arjun Mehta',
    role: 'Family Session',
  },
  {
    text: "We chose a premium package and it was worth every penny. Every session was unique and beautifully captured.",
    author: 'Sanjay & Ritu Gupta',
    role: 'Premium Package',
  },
];

const Reviews = () => {
  return (
    <main>
      <PageHero title="What our clients say" subtitle="5.0 average from hundreds of happy families in Surat." />

      <Section>
        <div className="flex justify-center gap-1 mb-12">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-accent fill-accent" />
          ))}
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review) => (
            <blockquote key={review.author} className="break-inside-avoid border border-border p-8">
              <Quote size={22} className="text-muted-foreground/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="font-heading text-lg font-light italic leading-relaxed mb-6">"{review.text}"</p>
              <div className="h-px bg-border mb-4" />
              <p className="font-body text-sm font-medium">{review.author}</p>
              <p className="text-label text-muted-foreground mt-1">{review.role}</p>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="mb-8 text-primary-foreground">Join our happy families</SectionTitle>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-warm-900 text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary-foreground/90 transition-colors"
          >
            Book your session
          </a>
        </div>
      </Section>
    </main>
  );
};

export default Reviews;
