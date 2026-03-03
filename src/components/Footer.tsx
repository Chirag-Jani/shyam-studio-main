import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail, Instagram } from 'lucide-react';

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
                // { label: 'Reviews', path: '/reviews' },
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
            <div className="flex flex-col gap-4 font-body text-sm font-light text-primary-foreground/60">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <a 
                  href="https://maps.google.com/maps?q=201%20Opera%20Business%20Hub%20Nr.By%20Savji%20Korat%20Bridge,%20Ljamni%20Chowk%20Mota%20Varachha,%20Surat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  201 Opera Business Hub Nr.By Savji Korat Bridge,<br />
                  Ljamni Chowk Mota Varachha, Surat.
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0" />
                <p>+91 99253 11820</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0" />
                <p>hello@shyamstudio.com</p>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={16} className="flex-shrink-0" />
                <a 
                  href="https://www.instagram.com/shyamstudio.surat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  shyamstudio.surat
                </a>
              </div>
            </div>
            <a
              href="https://wa.me/919925311820"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-label text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            >
              Book a Session <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <motion.div
          className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className="font-body text-xs font-light text-primary-foreground/40 text-center w-full">
            &copy; {new Date().getFullYear()} Shyam Studio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
