import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<'shutter' | 'text' | 'open'>('shutter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('text'), 800);
    const t2 = setTimeout(() => setPhase('open'), 2400);
    const t3 = setTimeout(() => onComplete(), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'open' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-warm-900"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          {/* Shutter blades */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-warm-800"
                style={{
                  width: '100%',
                  height: `${100 / 6}%`,
                  top: `${(i * 100) / 6}%`,
                  transformOrigin: i % 2 === 0 ? 'left' : 'right',
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            ))}
          </div>

          {/* Camera aperture icon */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: phase === 'text' ? 1 : 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Aperture SVG */}
              <motion.svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                className="text-primary-foreground"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
              >
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="30" cy="30" r="18" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="30" cy="30" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <line
                    key={i}
                    x1={30 + 18 * Math.cos((angle * Math.PI) / 180)}
                    y1={30 + 18 * Math.sin((angle * Math.PI) / 180)}
                    x2={30 + 28 * Math.cos(((angle + 30) * Math.PI) / 180)}
                    y2={30 + 28 * Math.sin(((angle + 30) * Math.PI) / 180)}
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                ))}
              </motion.svg>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <h1 className="font-heading text-4xl md:text-5xl font-light tracking-wider text-primary-foreground">
                  SHYAM STUDIO
                </h1>
                <motion.div
                  className="mt-3 h-px bg-primary-foreground/40 mx-auto"
                  initial={{ width: 0 }}
                  animate={{ width: 120 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
                />
                <motion.p
                  className="mt-3 text-label text-primary-foreground/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Capturing Moments
                </motion.p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
