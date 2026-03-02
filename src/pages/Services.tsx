import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';

const packages = [
  {
    title: 'Only Baby Photo Package',
    price: '₹11,500',
    description: '',
    includes: ['12 photo [Edited]', '8x12 Karizma Album', 'Only Selected Photo', '2 MB Document'],
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹15,500',
    description: '',
    includes: ['12 photo [Edited HD]', '16x24 [1 copy]', '8x12 Karizma Album', '4 mobile reels [without edit]', '1 bag', 'All Hd Raw img [Pendrive / Harddisk]'],
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹20,500',
    description: '',
    includes: ['24 photos [Edited]', '2 MB document', '4 mobile reels [without edit]', '8x12 Karizma album', '1 photo Family [Only seleted photo]'],
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹23,500',
    description: '',
    includes: ['24 photo (Edited)', '1 to 2 MB document', '8x12 Karizma album', '20x30 (1 copy)', '6 mobile reels (Without edit)', '1 bag', '1 photo Family (Selected photo)'],
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹25,500',
    description: '',
    includes: ['24 photo [Edited]', '1 copy (20x30)', '1 to 2 MB mobile document', '4x6 (12 copy)', '1 Album Bag', '10x15 Karizma Album', '8 mobile reels without Edit', '1 photo Family'],
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹30,500',
    description: '',
    includes: ['24 photos [Edited HD]', '1 copy (20x30)', '10x15 Karizma Album', '4x6 (12 copy)', '1 Mug/1 Keychain/ 1 bag', '12 Mobile Reels [without edit]', 'All Hd Raw Img [Pendrive / Harddisk]', 'Only selected Angel hd family photo'],
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹40,500',
    description: '',
    includes: ['36 photo [10x15 album]', '1 copy (20x30)', '1 to 2 MB Mobile Document', '4x6 (12 copy)', '1 Mug/ 1 Keychain/ 1 Bag/ 1 Calendar', '20 Mobile Reels (without edit)', 'All Hd Raw img (Pendrive / Harddisk)', 'Only Selected Angel HD family photo'],
    featured: true,
  },
  {
    title: 'Only Baby Photo Package',
    price: '₹48,500',
    description: '',
    includes: ['48 photo [10x15 album]', '1 copy (20x30)', 'Original Document', '4x6 (12 copy)', '1 Mug/ 1 Keychain/ 1 Bag / 1 Calendar', '24 Mobile Reels (Without edit)', 'All Hd Raw img [pendrive / harddisk]', 'Only selected Angel Hd Family photo'],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          {/* <motion.p
            className="text-label text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What We Offer
          </motion.p> */}
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

      {/* Packages Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                className={`p-10 border transition-all duration-500 ${
                  pkg.featured
                    ? 'border-foreground bg-card'
                    : 'border-border hover:border-foreground/20'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
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
                <a
                  href="https://wa.me/919925311820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-medium tracking-wider uppercase transition-colors duration-300 w-full justify-center ${
                    pkg.featured
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'border border-foreground text-foreground hover:bg-foreground hover:text-background'
                  }`}
                >
                  Get Started <ArrowUpRight size={14} />
                </a>
              </motion.div>
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
            {/* <p className="text-label text-muted-foreground mb-6">Custom Requirements?</p> */}
            <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground max-w-3xl mx-auto mb-8">
              We Create Custom Packages Too
            </h2>
            <a
              href="https://wa.me/919925311820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-body text-sm font-medium tracking-wider uppercase transition-colors hover:bg-foreground/90"
            >
              Contact Us <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
