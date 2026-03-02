import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '@/components/AnimatedText';
import babyImg from '@/assets/portfolio-baby.jpg';
import newbornImg from '@/assets/portfolio-newborn.jpg';
import kidsImg from '@/assets/portfolio-kids.jpg';
import maternityImg from '@/assets/portfolio-maternity.jpg';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { id: 'all', label: 'All' },
  { id: 'baby-shoots', label: 'Baby Shoots' },
  { id: 'maternity', label: 'Maternity' },
  { id: 'newborn', label: 'Newborn' },
  { id: 'baby-kids', label: 'Baby & Kids' },
];

const galleryItems = [
  { id: 1, img: babyImg, category: 'baby-shoots', title: 'Little Smiles', aspect: 'portrait' },
  { id: 2, img: maternityImg, category: 'maternity', title: 'Radiant Glow', aspect: 'portrait' },
  { id: 3, img: newbornImg, category: 'newborn', title: 'Peaceful Dreams', aspect: 'portrait' },
  { id: 4, img: kidsImg, category: 'baby-kids', title: 'Pure Joy', aspect: 'portrait' },
  { id: 5, img: newbornImg, category: 'newborn', title: 'Tiny Toes', aspect: 'landscape' },
  { id: 6, img: babyImg, category: 'baby-shoots', title: 'First Steps', aspect: 'portrait' },
  { id: 7, img: maternityImg, category: 'maternity', title: 'Motherly Love', aspect: 'landscape' },
  { id: 8, img: kidsImg, category: 'baby-kids', title: 'Childhood Wonder', aspect: 'portrait' },
  { id: 9, img: babyImg, category: 'baby-shoots', title: 'Curious Eyes', aspect: 'landscape' },
  { id: 10, img: newbornImg, category: 'newborn', title: 'Wrapped in Love', aspect: 'portrait' },
  { id: 11, img: kidsImg, category: 'baby-kids', title: 'Playful Days', aspect: 'landscape' },
  { id: 12, img: maternityImg, category: 'maternity', title: 'Beautiful Beginning', aspect: 'portrait' },
];

const Portfolio = () => {
  const [active, setActive] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  const filtered = active === 'all' ? galleryItems : galleryItems.filter(i => i.category === active);

  useEffect(() => {
    if (!galleryRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.05,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play reverse play reverse' },
        });
      });
    }, galleryRef);

    return () => ctx.revert();
  }, [active]);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          {/* <motion.p
            className="text-label text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Work
          </motion.p> */}
          <AnimatedText
            text="Portfolio Gallery"
            as="h1"
            className="heading-display text-5xl md:text-7xl text-foreground"
          />
          <motion.p
            className="mt-6 text-body text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A curated collection of our finest work across all categories. 
            Each image represents a story, a moment, a memory.
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border sticky top-20 bg-background z-30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`text-label whitespace-nowrap pb-2 border-b-2 transition-all duration-300 ${
                  active === cat.id
                    ? 'text-foreground border-foreground'
                    : 'text-muted-foreground border-transparent hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12" ref={galleryRef}>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="gallery-item break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                        item.aspect === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'
                      }`}
                    />
                    <div className="absolute inset-0 bg-warm-900/40 lg:bg-warm-900/0 group-hover:bg-warm-900/50 transition-all duration-500 flex items-center justify-center">
                      <motion.div
                        className="text-center lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      >
                        <p className="font-heading text-2xl text-primary-foreground font-light">{item.title}</p>
                        <p className="text-label text-primary-foreground/60 mt-2">
                          {categories.find(c => c.id === item.category)?.label}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-warm-900/95 flex items-center justify-center p-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-[85vh]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className="max-h-[85vh] w-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-warm-900/80">
                <p className="font-heading text-2xl text-primary-foreground">{selectedImage.title}</p>
                <p className="text-label text-primary-foreground/60 mt-1">
                  {categories.find(c => c.id === selectedImage.category)?.label}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
