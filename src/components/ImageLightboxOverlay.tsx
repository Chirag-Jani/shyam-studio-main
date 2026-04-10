import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollLock } from '@/hooks/use-scroll-lock';

type ImageLightboxOverlayProps = {
  open: boolean;
  src: string;
  alt: string;
  onClose: () => void;
  caption?: string;
  subcaption?: string;
};

export function ImageLightboxOverlay({
  open,
  src,
  alt,
  onClose,
  caption,
  subcaption,
}: ImageLightboxOverlayProps) {
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-warm-900/95 flex items-center justify-center p-6 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-[min(96vw,1200px)] max-h-[90vh]"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              decoding="async"
              className="max-h-[85vh] w-auto max-w-full mx-auto object-contain block"
            />
            {(caption || subcaption) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-warm-900/80">
                {caption ? (
                  <p className="font-heading text-2xl text-primary-foreground">{caption}</p>
                ) : null}
                {subcaption ? (
                  <p className="text-label text-primary-foreground/60 mt-1">{subcaption}</p>
                ) : null}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
