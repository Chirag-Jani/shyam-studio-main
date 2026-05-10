import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Award, Camera, Clock, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '@/components/AnimatedText';
import { ZoomableImage } from '@/components/ZoomableImage';
import { portfolio, studioSetupPhotos } from '@/lib/portfolio-media';

gsap.registerPlugin(ScrollTrigger);

const timeline = [
  { year: '2016', title: 'The Beginning', desc: 'Started Shyam Studio with a single camera and a dream to capture life beautifully.' },
  { year: '2018', title: 'First Studio', desc: 'Opened our first professional studio space equipped with state-of-the-art lighting.' },
  { year: '2020', title: 'Growing Family', desc: 'Expanded our team and specialized in newborn and maternity photography.' },
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
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? -80 : 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 85%', toggleActions: 'play reverse play reverse' },
        });
      });
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              {/* <motion.p
                className="text-label text-muted-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Our Story
              </motion.p> */}
              <AnimatedText
                text="The Heart Behind the Lens"
                as="h1"
                className="heading-display text-5xl md:text-6xl text-foreground mb-6"
              />
              <motion.p
                className="text-body text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                What started as a personal passion has grown into a full-fledged photography 
                studio dedicated to preserving life's most tender moments. At Shyam Studio, 
                photography isn't just what we do - it's who we are.
              </motion.p>
            </div>
            <motion.div
              className="img-reveal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <ZoomableImage
                src={portfolio.about}
                alt="Photographer at work"
                loading="eager"
                decoding="async"
                zoomCaption="Shyam Studio"
                className="w-full aspect-square object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio setup */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12 md:mb-16 max-w-2xl">
            <AnimatedText
              text="Inside the Studio"
              as="h2"
              className="heading-section text-foreground mb-4"
            />
            <p className="text-body text-muted-foreground">
              Our space is set up for comfortable, well-lit sessions—from props and backdrops to the gear we use every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {studioSetupPhotos.map((src, i) => (
              <motion.div
                key={src}
                className="img-reveal"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.08 }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.35) }}
              >
                <ZoomableImage
                  src={src}
                  alt={`Studio setup ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  zoomCaption="Inside the studio"
                  zoomSubcaption={`Setup ${i + 1}`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
           {/*  <p className="text-label text-muted-foreground mb-4">What Drives Us</p> */}
            <AnimatedText text="Our Values" as="h2" className="heading-section text-foreground" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="p-8 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <v.icon className="mx-auto mb-6 text-accent" size={32} strokeWidth={1.5} />
                <h3 className="font-heading text-2xl font-light text-foreground mb-3">{v.title}</h3>
                <p className="text-body text-muted-foreground text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32" ref={timelineRef}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            {/* <p className="text-label text-muted-foreground mb-4">Our Journey</p> */}
            <AnimatedText text="Through the Years" as="h2" className="heading-section text-foreground" />
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item flex gap-8 mb-12 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-accent flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                </div>
                <div className="pb-12">
                  <p className="text-label text-accent mb-2">{item.year}</p>
                  <h3 className="font-heading text-2xl font-light text-foreground mb-2">{item.title}</h3>
                  <p className="text-body text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground max-w-3xl mx-auto mb-8">
              Let's Work Together
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-warm-900 font-body text-sm font-medium tracking-wider uppercase"
            >
              Get in Touch <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
