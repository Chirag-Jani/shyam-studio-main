import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';

import { packages, packageCategories } from '@/lib/services';

const Services = () => {
  const navigate = useNavigate();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
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
      <div className="flex flex-col">
        {packageCategories.map((category, sectionIndex) => {
          let sectionBg = "bg-background";
          let textColor = "text-foreground";
          let mutedColor = "text-muted-foreground";
          let cardBg = "bg-card";
          let borderColor = "border-border";
          
          if (sectionIndex === 1) {
            sectionBg = "bg-secondary";
            cardBg = "bg-background";
          } else if (sectionIndex === 2) {
            sectionBg = "bg-foreground";
            textColor = "text-background";
            mutedColor = "text-background/70";
            cardBg = "bg-background/5";
            borderColor = "border-background/20";
          }

          return (
            <section key={sectionIndex} className={`py-24 md:py-32 ${sectionBg} transition-colors duration-500`}>
              <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <AnimatedText text={category} as="h2" className={`heading-section text-4xl mb-4 ${textColor}`} />
                  <div className={`w-24 h-px mx-auto ${sectionIndex === 2 ? 'bg-background/30' : 'bg-accent'}`} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
                  {packages
                    .filter((pkg) => pkg.category === category)
                    .map((pkg, i) => (
                      <motion.div
                        key={i}
                        onClick={() => navigate(`/services/${pkg.slug}`)}
                        className={`relative p-8 md:p-10 rounded-3xl flex flex-col group overflow-hidden transition-colors transition-shadow duration-700 cursor-pointer ${
                          pkg.featured
                            ? `shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border ${
                                sectionIndex === 2 ? 'border-background/30 bg-background/10' : 'border-accent/40 bg-card/90'
                              }`
                            : `border ${borderColor} ${cardBg} hover:shadow-2xl ${
                                sectionIndex === 2 ? 'hover:border-background/50 hover:bg-background/10 shadow-background/5' : 'hover:border-accent/50 hover:bg-card/90 shadow-foreground/5'
                              }`
                        }`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: pkg.featured ? -8 : 0 }}
                        whileHover={{ y: pkg.featured ? -12 : -10 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                      >
                        {/* Hover Gradient Overlay */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                             sectionIndex === 2 
                             ? 'bg-gradient-to-br from-background/10 via-transparent to-background/5' 
                             : 'bg-gradient-to-br from-accent/5 via-transparent to-accent/10'
                        }`} />

                        <div className="relative z-10 flex flex-col h-full">
                          {pkg.featured && (
                            <div className="absolute top-0 right-0 -mt-2 -mr-2">
                              <span className="relative flex h-3 w-3">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${sectionIndex === 2 ? 'bg-background' : 'bg-accent'}`}></span>
                                <span className={`relative inline-flex rounded-full h-3 w-3 ${sectionIndex === 2 ? 'bg-background' : 'bg-accent'}`}></span>
                              </span>
                            </div>
                          )}

                          {pkg.featured && (
                            <p className={`text-label font-bold mb-6 uppercase tracking-widest text-[10px] py-1.5 px-3 rounded-full inline-block self-start ${
                              sectionIndex === 2 ? 'bg-background/20 text-background' : 'bg-accent/10 text-accent'
                            }`}>
                              Most Popular
                            </p>
                          )}
                          {!pkg.featured && (
                            <p className="text-label text-transparent mb-6 uppercase tracking-wider text-[10px] py-1.5 px-3 select-none" aria-hidden="true">-</p>
                          )}
                          
                          <h3 className={`font-heading text-3xl font-light mb-2 transition-colors duration-500 ${textColor}`}>{pkg.title}</h3>
                          <div className="flex items-end gap-1 mb-1">
                            <p className={`font-heading text-5xl font-medium tracking-tight transition-transform duration-500 group-hover:scale-105 origin-left ${textColor}`}>{pkg.price}</p>
                          </div>
                          <p className={`text-body text-xs mt-3 mb-8 italic opacity-70 ${mutedColor}`}>{pkg.description}</p>
                          
                          <div className={`h-px mb-8 transition-colors duration-500 ${pkg.featured ? (sectionIndex === 2 ? 'bg-background/30' : 'bg-accent/30') : borderColor}`} />
                          
                          <ul className="space-y-4 mb-10 flex-grow">
                            {pkg.includes.map((item, j) => (
                              <li key={j} className="flex items-start gap-4 text-body text-sm group/item">
                                <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-300 ${
                                  pkg.featured 
                                    ? (sectionIndex === 2 ? 'bg-background/20' : 'bg-accent/20') 
                                    : (sectionIndex === 2 ? 'bg-background/10 group-hover/item:bg-background/30' : 'bg-secondary group-hover/item:bg-accent/20')
                                }`}>
                                  <Check size={12} className={`${pkg.featured ? (sectionIndex === 2 ? 'text-background' : 'text-accent') : (sectionIndex === 2 ? 'text-background/80 group-hover/item:text-background' : 'text-accent')} `} />
                                </div>
                                <span className={`leading-relaxed transition-colors duration-300 ${mutedColor} group-hover/item:${textColor}`}>{item}</span>
                              </li>
                            ))}
                          </ul>
                          
                          <a
                            href={`https://wa.me/919925311820?text=${encodeURIComponent(`Hi, I am interested in the ${pkg.title} (${pkg.price}) under ${pkg.category}.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`relative overflow-hidden inline-flex items-center mt-auto gap-3 px-8 py-4 rounded-xl font-body text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 w-full justify-center group/btn z-20 ${
                              pkg.featured
                                ? (sectionIndex === 2 ? 'bg-background text-foreground hover:shadow-[0_10px_20px_-10px_rgba(255,255,255,0.3)]' : 'bg-foreground text-background hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)]')
                                : `border ${sectionIndex === 2 ? 'border-background/50 text-background hover:bg-background hover:text-foreground' : 'border-border text-foreground hover:border-foreground hover:bg-foreground hover:text-background'}`
                            }`}
                          >
                            <span className="relative z-10 flex items-center gap-2">
                              Book Session <ArrowUpRight size={16} className="transition-transform duration-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            </span>
                           </a>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

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
