import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Send } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';
import { ZoomableImage } from '@/components/ZoomableImage';
import { packages } from '@/lib/services';
import { Button } from '@/components/ui/button';

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const pkg = packages.find(p => p.slug === slug);

  if (!pkg) {
    return (
      <main className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-heading mb-4">Package Not Found</h1>
        <p className="text-muted-foreground mb-8">The service package you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/services">Back to Services</Link>
        </Button>
      </main>
    );
  }

  const handleWhatsApp = () => {
    const url = `https://wa.me/919925311820?text=${encodeURIComponent(
      `Hi, I am interested in the ${pkg.title} (${pkg.price}) under ${pkg.category}.`
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="pt-24 pb-24 md:pt-32 min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="mb-12">
          <Link to="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" /> Back to Packages
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary text-foreground text-xs font-bold uppercase tracking-wider w-fit mb-6">
              {pkg.category}
            </div>
            
            <AnimatedText 
              text={pkg.title} 
              as="h1" 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-4"
            />
            
            <motion.p 
              className="text-4xl font-medium tracking-tight mb-6"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            >
              {pkg.price}
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground italic mb-10 text-lg"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            >
              {pkg.description}
            </motion.p>

            <motion.div 
              className="bg-card border border-border rounded-2xl p-8 mb-10 overflow-hidden relative shadow-sm"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-heading font-semibold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {pkg.includes.map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    <div className="mt-1 bg-foreground/10 p-1 rounded-full flex-shrink-0">
                      <Check size={14} className="text-foreground" />
                    </div>
                    <span className="text-body leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.button
              onClick={handleWhatsApp}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="w-full flex items-center justify-center gap-2 py-5 bg-foreground text-background font-bold tracking-widest uppercase text-sm rounded-xl hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book Session <Send size={16} />
            </motion.button>
          </motion.div>

          {/* Images Section */}
          <motion.div 
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pkg.images.map((img, idx) => (
              <motion.div 
                key={idx}
                className={`relative overflow-hidden rounded-2xl w-full ${idx === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-video'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (idx * 0.15) }}
                whileHover={{ scale: 1.02 }}
              >
                <ZoomableImage 
                  src={img} 
                  alt={`${pkg.title} sample ${idx + 1}`} 
                  zoomCaption={pkg.title}
                  zoomSubcaption={`Sample ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
