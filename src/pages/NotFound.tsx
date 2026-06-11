import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error('404:', location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-md">
        <p className="text-label text-muted-foreground mb-4">404</p>
        <h1 className="font-heading text-4xl font-light mb-4">Page not found</h1>
        <p className="text-body text-muted-foreground mb-8">The page you are looking for does not exist.</p>
        <Link
          to="/"
          className="inline-flex px-8 py-4 bg-foreground text-background text-xs font-medium tracking-[0.2em] uppercase"
        >
          Return home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
