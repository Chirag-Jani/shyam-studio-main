import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Heart, Star, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '@/components/AnimatedText';
import heroImg from '@/assets/hero-studio.jpg';
import babyImg from '@/assets/portfolio-baby.jpg';
import newbornImg from '@/assets/portfolio-newborn.jpg';
import kidsImg from '@/assets/portfolio-kids.jpg';
import maternityImg from '@/assets/portfolio-maternity.jpg';
import aboutImg from '@/assets/about-photographer.jpg';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '500+', label: 'Sessions Completed' },
  { number: '8+', label: 'Years Experience' },
  { number: '100%', label: 'Happy Families' },
  { number: '15+', label: 'Awards Won' },
];

const portfolioPreview = [
  { img: babyImg, title: 'Baby Shoots', category: 'baby-shoots' },
  { img: maternityImg, title: 'Maternity', category: 'maternity' },
  { img: newbornImg, title: 'Newborn', category: 'newborn' },
  { img: kidsImg, title: 'Baby & Kids', category: 'baby-kids' },
];

const testimonials = [
  {
    text: "Shyam Studio captured our baby's first moments so beautifully. Every photo tells a story. The attention to detail is remarkable.",
    author: 'Priya Sharma',
    role: 'Mother of Two',
  },
  {
    text: "The maternity shoot was an experience we'll never forget. Professional, creative, and the results were absolutely stunning.",
    author: 'Rahul & Meera Patel',
    role: 'Happy Parents',
  },
  {
    text: "From start to finish, the team made us feel comfortable. Our kids had a blast and the photos are priceless treasures.",
    author: 'Anita Desai',
    role: 'Family Session',
  },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats counter animation
      gsap.utils.toArray<HTMLElement>('.stat-item').forEach((item, i) => {
        gsap.from(item, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          },
        });
      });

      // Services section parallax
      gsap.utils.toArray<HTMLElement>('.service-card').forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        });
      });

      // Horizontal scroll text
      gsap.to('.marquee-text', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: '.marquee-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <div className="absolute inset-0 bg-warm-900/40 z-10" />
          <img
            src={heroImg}
            alt="Shyam Studio"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-label text-primary-foreground/70 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Professional Photography Studio
          </motion.p>

          <motion.h1
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground tracking-tight max-w-5xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Capturing Life's Most Precious Moments
          </motion.h1>

          <motion.div
            className="mt-4 h-px bg-primary-foreground/30 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ delay: 1, duration: 0.8 }}
          />

          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-warm-900 font-body text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors duration-300"
            >
              Book a Session <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/40 text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-px h-16 bg-primary-foreground/40 mx-auto"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item text-center">
                <p className="font-heading text-4xl md:text-5xl font-light text-foreground">{stat.number}</p>
                <p className="mt-2 text-label text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              className="img-reveal"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={aboutImg}
                alt="Shyam - Photographer"
                className="w-full aspect-[4/5] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              <p className="text-label text-muted-foreground mb-4">About the Studio</p>
              <AnimatedText
                text="Where Every Click Tells a Story"
                as="h2"
                className="heading-section text-foreground mb-6"
              />
              <p className="text-body text-muted-foreground mb-6">
                At Shyam Studio, we believe every family has a unique story worth preserving. 
                With over 8 years of experience in professional photography, we specialize in 
                capturing the raw, unfiltered beauty of life's most intimate moments.
              </p>
              <p className="text-body text-muted-foreground mb-8">
                From the tender embrace of a newborn to the radiant glow of expectant mothers, 
                our lens finds the extraordinary in every ordinary moment.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-label text-foreground line-reveal"
              >
                Learn More <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <section className="marquee-section py-12 border-y border-border overflow-hidden">
        <div className="marquee-text flex whitespace-nowrap gap-12">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="font-heading text-6xl md:text-8xl font-light text-muted-foreground/20 flex items-center gap-12">
              Baby Shoots <span className="w-3 h-3 rounded-full bg-muted-foreground/20 inline-block" /> Maternity <span className="w-3 h-3 rounded-full bg-muted-foreground/20 inline-block" /> Newborn <span className="w-3 h-3 rounded-full bg-muted-foreground/20 inline-block" /> Kids Photography <span className="w-3 h-3 rounded-full bg-muted-foreground/20 inline-block" />
            </span>
          ))}
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section ref={servicesRef} className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-label text-muted-foreground mb-4">What We Offer</p>
            <AnimatedText
              text="Our Services"
              as="h2"
              className="heading-section text-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Camera, title: 'Baby Shoots', desc: 'Milestone moments from 3 months to first birthday', price: 'From 8,999' },
              { icon: Heart, title: 'Maternity', desc: 'Celebrating the beautiful journey of motherhood', price: 'From 12,999' },
              { icon: Star, title: 'Newborn', desc: 'First days captured with gentle, artistic precision', price: 'From 15,999' },
              { icon: Users, title: 'Baby & Kids', desc: 'Playful sessions that capture genuine personality', price: 'From 7,999' },
            ].map((service, i) => (
              <div
                key={i}
                className="service-card group p-8 bg-card border border-border hover:border-foreground/20 transition-all duration-500"
              >
                <service.icon className="text-accent mb-6" size={28} strokeWidth={1.5} />
                <h3 className="font-heading text-2xl font-light text-foreground mb-3">{service.title}</h3>
                <p className="text-body text-muted-foreground mb-4 text-sm">{service.desc}</p>
                <p className="font-heading text-lg text-foreground">{service.price}</p>
                <div className="mt-6 h-px bg-border group-hover:bg-foreground/20 transition-colors duration-500" />
                <Link
                  to="/services"
                  className="mt-4 inline-flex items-center gap-2 text-label text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                >
                  Details <ArrowUpRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <p className="text-label text-muted-foreground mb-4">Selected Work</p>
              <AnimatedText
                text="Our Portfolio"
                as="h2"
                className="heading-section text-foreground"
              />
            </div>
            <Link
              to="/portfolio"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-label text-foreground line-reveal"
            >
              View All Work <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioPreview.map((item, i) => (
              <motion.div
                key={i}
                className="img-reveal relative group cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <Link to="/portfolio">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-warm-900/0 group-hover:bg-warm-900/40 transition-colors duration-500 flex items-end p-8">
                    <div className="translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-label text-primary-foreground/70 mb-1">Category</p>
                      <h3 className="font-heading text-3xl text-primary-foreground font-light">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-label text-muted-foreground mb-4">What People Say</p>
            <AnimatedText
              text="Client Stories"
              as="h2"
              className="heading-section text-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="p-8 border border-border"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-body text-muted-foreground mb-8 italic font-heading text-lg leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <p className="font-body text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-label text-muted-foreground mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-warm-900">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-label text-primary-foreground/50 mb-6">Ready to Create Memories?</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground tracking-tight max-w-4xl mx-auto mb-8">
              Let's Capture Your Story Together
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-warm-900 font-body text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                Book Now <ArrowUpRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
