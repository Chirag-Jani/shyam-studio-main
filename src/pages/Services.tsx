import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';

const services = [
  {
    title: 'Baby Shoots',
    subtitle: '3 Months to 1 Year',
    price: '8,999',
    duration: '1-2 Hours',
    includes: [
      '30+ edited digital photos',
      'Professional studio setup',
      'Props & costumes included',
      'Online gallery access',
      '5 printed photographs',
    ],
  },
  {
    title: 'Maternity Shoots',
    subtitle: 'Celebrating Motherhood',
    price: '12,999',
    duration: '2-3 Hours',
    includes: [
      '50+ edited digital photos',
      'Indoor & outdoor options',
      'Professional styling assistance',
      'Partner / family included',
      '10 printed photographs',
      'Behind-the-scenes video',
    ],
    featured: true,
  },
  {
    title: 'Newborn Photography',
    subtitle: 'First 15 Days',
    price: '15,999',
    duration: '3-4 Hours',
    includes: [
      '60+ edited digital photos',
      'Specialized newborn props',
      'Safety-trained photographer',
      'Home visit available',
      '15 printed photographs',
      'Custom photo album',
    ],
    featured: true,
  },
  {
    title: 'Baby & Kids',
    subtitle: 'Playful Sessions',
    price: '7,999',
    duration: '1-2 Hours',
    includes: [
      '25+ edited digital photos',
      'Fun themed setups',
      'Costume changes included',
      'Online gallery access',
      '5 printed photographs',
    ],
  },
];

const packages = [
  {
    title: 'Essential Package',
    price: '24,999',
    description: 'Perfect for first-time parents',
    includes: ['1 Maternity Session', '1 Newborn Session', '80+ Digital Photos', '10 Prints', 'Online Gallery'],
  },
  {
    title: 'Premium Package',
    price: '44,999',
    description: 'Complete first-year coverage',
    includes: ['1 Maternity Session', '1 Newborn Session', '2 Baby Milestone Sessions', '200+ Digital Photos', 'Custom Album', '30 Prints', 'Behind-the-scenes Video'],
    featured: true,
  },
  {
    title: 'Royal Package',
    price: '69,999',
    description: 'The ultimate photography experience',
    includes: ['1 Maternity Session', '1 Newborn Session', '4 Baby Milestone Sessions', '1 Family Session', '400+ Digital Photos', '2 Custom Albums', '50 Prints', 'Video Highlights', 'Priority Booking'],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.p
            className="text-label text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.p>
          <AnimatedText
            text="Our Services & Pricing"
            as="h1"
            className="heading-display text-5xl md:text-7xl text-foreground"
          />
          <motion.p
            className="mt-6 text-body text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Every session is crafted with care, ensuring you receive photographs 
            that become treasured family heirlooms for generations.
          </motion.p>
        </div>
      </section>

      {/* Individual Services */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className={`p-10 border border-border hover:border-foreground/20 transition-all duration-500 ${
                  service.featured ? 'bg-card' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-heading text-3xl font-light text-foreground">{service.title}</h3>
                    <p className="text-label text-muted-foreground mt-2">{service.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-heading text-3xl text-foreground">{service.price}</p>
                    <p className="text-label text-muted-foreground mt-1">{service.duration}</p>
                  </div>
                </div>
                <div className="h-px bg-border mb-6" />
                <ul className="space-y-3 mb-8">
                  {service.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-body text-muted-foreground text-sm">
                      <Check size={14} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-body text-sm font-medium tracking-wider uppercase hover:bg-foreground/90 transition-colors duration-300 w-full justify-center"
                >
                  Book This Session <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-label text-muted-foreground mb-4">Value Packages</p>
            <AnimatedText
              text="Bundle & Save"
              as="h2"
              className="heading-section text-foreground"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`p-10 border transition-all duration-500 ${
                  pkg.featured
                    ? 'border-foreground bg-card'
                    : 'border-border hover:border-foreground/20'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {pkg.featured && (
                  <p className="text-label text-accent mb-4">Most Popular</p>
                )}
                <h3 className="font-heading text-2xl font-light text-foreground">{pkg.title}</h3>
                <p className="font-heading text-4xl text-foreground mt-2">{pkg.price}</p>
                <p className="text-body text-muted-foreground text-sm mt-2 mb-6">{pkg.description}</p>
                <div className="h-px bg-border mb-6" />
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-body text-muted-foreground text-sm">
                      <Check size={14} className="text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium tracking-wider uppercase transition-colors duration-300 w-full justify-center ${
                    pkg.featured
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'border border-foreground text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  Get Started <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-warm-900">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-label text-primary-foreground/50 mb-6">Custom Requirements?</p>
            <h2 className="font-heading text-4xl md:text-6xl font-light text-primary-foreground max-w-3xl mx-auto mb-8">
              We Create Custom Packages Too
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-warm-900 font-body text-sm font-medium tracking-wider uppercase"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
