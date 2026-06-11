import { useState } from 'react';
import { site } from '@/lib/site-content';

export function OffersForm() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, '');
    const text = `Hi ${site.name}, I would like to get the latest offers. My number is ${digits || phone}.`;
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-8 max-w-sm mx-auto">
      <div className="w-full">
        <label htmlFor="offer-phone" className="block text-label text-muted-foreground mb-3">
          Phone number
        </label>
        <input
          id="offer-phone"
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91"
          className="w-full px-1 py-2 bg-transparent border-0 border-b border-border text-foreground font-body text-sm text-center focus:outline-none focus:border-foreground transition-colors"
        />
      </div>
      <button
        type="submit"
        className="px-10 py-3 rounded-full bg-foreground text-background font-body text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors whitespace-nowrap"
      >
        Get now
      </button>
    </form>
  );
}
