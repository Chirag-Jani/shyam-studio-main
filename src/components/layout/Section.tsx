import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: 'default' | 'muted' | 'dark' | 'card';
};

const variants = {
  default: 'bg-background',
  muted: 'bg-secondary',
  dark: 'bg-warm-900 text-primary-foreground',
};

export function Section({ children, className, id, variant = 'default' }: SectionProps) {
  if (variant === 'card') {
    return (
      <section id={id} className={cn('py-8 md:py-12 bg-background', className)}>
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="bg-secondary rounded-2xl px-6 md:px-12 py-16 md:py-24">
            <div className="mx-auto max-w-6xl">{children}</div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id={id} className={cn('py-16 md:py-24', variants[variant], className)}>
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionEyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-label text-muted-foreground mb-3', className)}>{children}</p>;
}

export function SectionTitle({
  children,
  as: Tag = 'h2',
  className,
}: {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}) {
  return <Tag className={cn('font-heading text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance', className)}>{children}</Tag>;
}
