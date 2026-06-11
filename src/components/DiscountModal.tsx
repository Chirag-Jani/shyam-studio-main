import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { site } from '@/lib/site-content';

export function DiscountModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('shyam-discount-seen');
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem('shyam-discount-seen', '1');
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-warm-900/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="relative bg-background border border-border rounded-2xl max-w-md w-full p-10 text-center"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <p className="text-label text-muted-foreground mb-2">Limited time</p>
            <h2 className="font-heading text-4xl font-light text-foreground mb-2">Discount of the Day</h2>
            <p className="text-body text-muted-foreground text-sm mb-8">
              We are offering a special discount for a limited time. Message us on WhatsApp to claim it.
            </p>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent('Hi, I would like to claim the discount of the day.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="inline-flex items-center justify-center w-full px-8 py-4 rounded-full bg-foreground text-background font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Get now
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
