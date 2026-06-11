import { ArrowUpRight, Award, Camera, Clock, Heart } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionTitle } from '@/components/layout/Section';
import { ZoomableImage } from '@/components/ZoomableImage';
import { aboutIntro, site } from '@/lib/site-content';
import { portfolio, studioSetupPhotos } from '@/lib/portfolio-media';

const timeline = [
  { year: '2016', title: 'The Beginning', desc: 'Started Shyam Studio with a single camera and a dream to capture life beautifully.' },
  { year: '2018', title: 'First Studio', desc: 'Opened our first professional studio space equipped with state-of-the-art lighting.' },
  { year: '2020', title: 'Growing Family', desc: 'Expanded our team and specialized in newborn and family photography.' },
  { year: '2022', title: 'Award Winning', desc: 'Received recognition as one of the top photography studios in the region.' },
  { year: '2024', title: 'New Chapter', desc: 'Launched premium packages and expanded into cinematic videography services.' },
];

const values = [
  { icon: Heart, title: 'Passion', desc: 'Every session is driven by genuine love for the craft of photography.' },
  { icon: Camera, title: 'Artistry', desc: 'We approach each shoot as a creative endeavor, not just documentation.' },
  { icon: Clock, title: 'Patience', desc: 'Especially with little ones, we take all the time needed for the perfect shot.' },
  { icon: Award, title: 'Excellence', desc: 'Our commitment to quality shows in every delivered photograph.' },
];

const About = () => {
  return (
    <main>
      <PageHero title="The heart behind the lens" subtitle="Our story, values, and studio in Surat." />

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            {aboutIntro.map((p, i) => (
              <p key={i} className="text-body text-muted-foreground">
                {p}
              </p>
            ))}
          </div>
          <ZoomableImage src={portfolio.about} alt="Photographer at work" className="w-full aspect-square object-cover" />
        </div>
      </Section>

      <Section variant="muted">
        <SectionTitle className="mb-12">Inside the studio</SectionTitle>
        <p className="text-body text-muted-foreground mb-10 max-w-2xl">
          Our space is set up for comfortable, well-lit sessions—from props and backdrops to the gear we use every day.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studioSetupPhotos.map((src, i) => (
            <ZoomableImage
              key={src}
              src={src}
              alt={`Studio setup ${i + 1}`}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionTitle className="mb-12 text-center">Our values</SectionTitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center border border-border p-8">
              <v.icon className="mx-auto mb-4 text-accent" size={28} strokeWidth={1.5} />
              <h3 className="font-heading text-xl font-light mb-2">{v.title}</h3>
              <p className="text-body text-muted-foreground text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <SectionTitle className="mb-12 text-center">Through the years</SectionTitle>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, i) => (
            <div key={item.year} className="flex gap-6 mb-10 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div>
                <p className="text-label text-accent mb-1">{item.year}</p>
                <h3 className="font-heading text-xl font-light mb-1">{item.title}</h3>
                <p className="text-body text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <SectionTitle className="mb-8">Let's work together</SectionTitle>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Get in touch <ArrowUpRight size={16} />
          </a>
        </div>
      </Section>
    </main>
  );
};

export default About;
