import { Phone, MapPin } from 'lucide-react';
import { site } from '@/lib/site-content';

/** Fixed mobile bottom bar: Call Now + Get Directions */
export function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${site.phoneTel}`}
          className="flex items-center justify-center gap-2 py-3.5 bg-accent text-accent-foreground font-body text-xs font-semibold tracking-wide uppercase"
        >
          <Phone size={16} strokeWidth={2} />
          Call now
        </a>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 bg-foreground text-background font-body text-xs font-semibold tracking-wide uppercase"
        >
          <MapPin size={16} strokeWidth={2} />
          Directions
        </a>
      </div>
    </div>
  );
}
