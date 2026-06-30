import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { site } from '@/lib/site-content';
import { serviceNavLinks } from '@/lib/services';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isServicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
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
              <img
                src={site.logoIcon}
                alt={site.name}
                className="h-8 w-8 md:h-9 md:w-9 object-contain"
                width={36}
                height={36}
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={cn(
                  'text-label transition-colors',
                  location.pathname === '/' ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                Home
              </Link>

              <div className="relative group">
                <Link
                  to="/services"
                  className={cn(
                    'inline-flex items-center gap-1 text-label transition-colors',
                    isServicesActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  Services
                  <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
                </Link>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="min-w-[20rem] border border-border bg-background shadow-lg py-2">
                    {serviceNavLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          'block px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors',
                          location.pathname === item.path && 'text-accent bg-muted/50',
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(1).map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      'text-label transition-colors',
                      isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
                    )}
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
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-6 md:hidden pb-20 overflow-y-auto px-6">
          <Link
            to="/"
            className={cn(
              'font-heading text-2xl font-light',
              location.pathname === '/' ? 'text-accent' : 'text-muted-foreground',
            )}
          >
            Home
          </Link>

          <div className="flex flex-col items-center gap-3 w-full max-w-sm">
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                'inline-flex items-center gap-2 font-heading text-2xl font-light',
                isServicesActive ? 'text-accent' : 'text-muted-foreground',
              )}
            >
              Services
              <ChevronDown size={20} className={cn('transition-transform', servicesOpen && 'rotate-180')} />
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-2 w-full text-center">
                {serviceNavLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'text-sm py-2 leading-snug',
                      location.pathname === item.path ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-heading text-2xl font-light',
                location.pathname === link.path ? 'text-accent' : 'text-muted-foreground',
              )}
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
