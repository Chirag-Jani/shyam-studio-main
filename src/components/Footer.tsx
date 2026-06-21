import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site-content';

const Footer = () => {
  return (
    <footer className="bg-warm-900 text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <img src={site.logo} alt={site.name} className="h-9 w-auto brightness-0 invert opacity-90 mb-6" width={160} height={36} />
            <p className="font-body text-sm font-light text-primary-foreground/60 max-w-sm leading-relaxed">{site.tagline}</p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-label hover:text-primary-foreground/80 transition-colors"
            >
              Book a session <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-label text-primary-foreground/40 mb-5">Navigation</p>
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
                  className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-label text-primary-foreground/40 mb-5">Contact information</p>
            <div className="space-y-4 font-body text-sm text-primary-foreground/60">
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
                <Phone size={16} className="shrink-0" />
                {site.phone}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-primary-foreground transition-colors"
              >
                <MapPin size={16} className="shrink-0 mt-0.5" />
                {site.address}
              </a>
              <div className="flex items-center gap-3">
                <Mail size={16} className="shrink-0" />
                {site.email}
              </div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary-foreground transition-colors"
              >
                <Instagram size={16} className="shrink-0" />
                @{site.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
