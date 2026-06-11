import { motion } from 'framer-motion';

type PageHeroProps = {
  title: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
};

export function PageHero({ title, subtitle, variant = 'light' }: PageHeroProps) {
  const isDark = variant === 'dark';
  return (
    <section className={`pt-28 pb-16 md:pt-32 md:pb-20 ${isDark ? 'bg-warm-900 text-primary-foreground' : 'bg-secondary'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-light tracking-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className={`mt-6 text-body max-w-2xl mx-auto ${isDark ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          className={`mt-8 h-px w-16 mx-auto ${isDark ? 'bg-primary-foreground/30' : 'bg-foreground/20'}`}
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        />
      </div>
    </section>
  );
}
