import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star, Quote } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';

const reviews = [
  {
    text: "Shyam Studio captured our baby's first moments so beautifully. Every photo tells a story. The attention to detail and the patience they showed with our little one was remarkable. We couldn't be happier with the results.",
    author: 'Priya Sharma',
    role: 'Newborn Session',
    rating: 5,
  },
  {
    text: "The maternity shoot was an experience we'll never forget. Professional, creative, and the results were absolutely stunning. They made us feel so comfortable and the photos are beyond what we imagined.",
    author: 'Rahul & Meera Patel',
    role: 'Maternity Session',
    rating: 5,
  },
  {
    text: "From start to finish, the team made us feel at ease. Our kids had a blast during the session and the photos are priceless. True professionals who know how to work with children.",
    author: 'Anita Desai',
    role: 'Baby & Kids Session',
    rating: 5,
  },
  {
    text: "We've been coming to Shyam Studio for all our milestones. The consistency in quality and the warm, welcoming environment keeps us coming back. They feel like family.",
    author: 'Vikram & Sunita Reddy',
    role: 'Premium Package',
    rating: 5,
  },
  {
    text: "The newborn session was handled with such care and expertise. They were incredibly patient, and the photos turned out magical. Our baby looked like a little angel in every shot.",
    author: 'Deepa Krishnan',
    role: 'Newborn Session',
    rating: 5,
  },
  {
    text: "Outstanding photography! The team went above and beyond to make sure everything was perfect. The edited photos arrived quickly and were museum-worthy. Highly recommend for any occasion.",
    author: 'Arjun Mehta',
    role: 'Family Session',
    rating: 5,
  },
  {
    text: "I was nervous about the maternity shoot, but the team made me feel beautiful and confident. The photos captured the essence of this special time perfectly. A truly wonderful experience.",
    author: 'Kavita Joshi',
    role: 'Maternity Session',
    rating: 5,
  },
  {
    text: "We chose the Royal Package and it was worth every penny. From maternity through the first year milestones, every session was unique and beautifully captured. An incredible investment in memories.",
    author: 'Sanjay & Ritu Gupta',
    role: 'Royal Package',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.p
            className="text-label text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Testimonials
          </motion.p>
          <AnimatedText
            text="What Our Clients Say"
            as="h1"
            className="heading-display text-5xl md:text-7xl text-foreground"
          />
          <motion.div
            className="flex items-center justify-center gap-2 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <span className="text-body text-muted-foreground ml-2">5.0 average from 200+ reviews</span>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                className="break-inside-avoid p-8 border border-border hover:border-foreground/20 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Quote size={24} className="text-muted-foreground/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="font-heading text-lg leading-relaxed text-foreground italic mb-6">
                  "{review.text}"
                </p>
                <div className="h-px bg-border mb-4" />
                <p className="font-body text-sm font-medium text-foreground">{review.author}</p>
                <p className="text-label text-muted-foreground mt-1">{review.role}</p>
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
            <h2 className="font-heading text-4xl md:text-6xl font-light text-primary-foreground max-w-3xl mx-auto mb-8">
              Join Our Happy Families
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-warm-900 font-body text-sm font-medium tracking-wider uppercase"
            >
              Book Your Session <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
