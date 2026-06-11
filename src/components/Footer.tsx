import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, ArrowUpRight } from 'lucide-react';
import { site } from '@/lib/site-content';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl py-16 md:py-20">
        <div className="text-center mb-16">
          <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
            Follow us on instagram
          </h3>
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-label text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram size={16} /> @{site.instagramHandle} <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="font-heading text-xl font-medium tracking-[0.2em] mb-4 text-foreground">
              {site.name.toUpperCase()}
            </h3>
            <p className="font-body text-sm font-light text-muted-foreground max-w-sm leading-relaxed">
              {site.tagline}
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 text-label text-foreground hover:text-muted-foreground transition-colors"
            >
              Book a session <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-label text-muted-foreground/70 mb-5">Navigation</p>
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
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4">
            <p className="text-label text-muted-foreground/70 mb-5">Contact information</p>
            <div className="space-y-4 font-body text-sm text-muted-foreground">
              <a href={`tel:${site.phoneTel}`} className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone size={16} className="shrink-0" />
                {site.phone}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-foreground transition-colors"
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
                className="flex items-center gap-3 hover:text-foreground transition-colors"
              >
                <Instagram size={16} className="shrink-0" />
                @{site.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="font-body text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
