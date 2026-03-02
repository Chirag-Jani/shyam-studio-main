import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-warm-900 text-primary-foreground py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-heading text-3xl font-light tracking-wider mb-6">SHYAM STUDIO</h3>
            <p className="font-body text-sm font-light leading-relaxed text-primary-foreground/60 max-w-xs">
              Capturing life's most precious moments with artistry, warmth, and timeless elegance.
            </p>
          </div>

          <div>
            <p className="text-label text-primary-foreground/40 mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'Services', path: '/services' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'About', path: '/about' },
                { label: 'Reviews', path: '/reviews' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-label text-primary-foreground/40 mb-6">Get in Touch</p>
            <div className="flex flex-col gap-3 font-body text-sm font-light text-primary-foreground/60">
              <p>123 Photography Lane</p>
              <p>Mumbai, Maharashtra 400001</p>
              <p>+91 98765 43210</p>
              <p>hello@shyamstudio.com</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-6 text-label text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Book a Session <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <motion.div
          className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs font-light text-primary-foreground/40">
            2024 Shyam Studio. All rights reserved.
          </p>
          <p className="font-body text-xs font-light text-primary-foreground/40">
            Crafted with care
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
