import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { site } from '@/lib/site-content';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' : 'bg-background/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
            <Link to="/" className="relative z-50 flex items-center">
              <img src={site.logo} alt={site.name} className="h-8 md:h-9 w-auto" width={160} height={36} />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-label transition-colors ${
                      isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 text-xs font-body font-medium tracking-[0.15em] uppercase bg-accent text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Book now
              </a>
            </nav>

            <button
              type="button"
              className="md:hidden relative z-50 p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 md:hidden pb-20">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-2xl font-light ${
                location.pathname === link.path ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-accent text-accent-foreground text-xs font-medium tracking-[0.15em] uppercase"
          >
            Book now
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
