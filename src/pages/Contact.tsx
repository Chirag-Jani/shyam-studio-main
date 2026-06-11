import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown, Instagram } from 'lucide-react';
import { PageHero } from '@/components/layout/PageHero';
import { Section, SectionTitle } from '@/components/layout/Section';
import { OffersForm } from '@/components/OffersForm';
import { site } from '@/lib/site-content';

const faqs = [
  {
    q: 'How far in advance should I book a session?',
    a: 'We recommend booking at least 2-4 weeks in advance for regular sessions. For newborn sessions, booking during pregnancy is ideal to secure your preferred dates.',
  },
  {
    q: 'What should we wear for the photo session?',
    a: 'We recommend coordinating colors in neutral and earthy tones. Avoid busy patterns and logos. We also have props available for baby sessions.',
  },
  {
    q: 'How long does it take to receive the final photos?',
    a: 'Edited digital photos are typically delivered within 2-3 weeks. Premium packages with albums may take 4-6 weeks for complete delivery.',
  },
  {
    q: 'Do you offer home sessions?',
    a: 'Yes, we offer flexible locations including our Surat studio and outdoor sessions. Travel fees may apply depending on location.',
  },
  {
    q: 'Can we bring siblings to the session?',
    a: 'Absolutely! We encourage including siblings in baby and family sessions.',
  },
  {
    q: 'What happens if my baby is fussy during the session?',
    a: 'We are experienced with little ones and allow plenty of time for feeding and soothing. Your baby comfort is our top priority.',
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      <PageHero title="Let's create something beautiful" subtitle="Reach out for bookings, packages, or any questions." />

      <Section variant="muted">
        <SectionTitle className="mb-8">Get latest offers</SectionTitle>
        <OffersForm />
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-2xl font-light mb-8">Contact information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium">Studio location</p>
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-muted-foreground text-sm mt-1 hover:text-foreground block"
                  >
                    {site.address}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone size={20} className="text-accent shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium">Phone</p>
                  <a href={`tel:${site.phoneTel}`} className="text-body text-muted-foreground text-sm mt-1 hover:text-foreground">
                    {site.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Instagram size={20} className="text-accent shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium">Instagram</p>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body text-muted-foreground text-sm mt-1 hover:text-foreground block"
                  >
                    @{site.instagramHandle}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-accent shrink-0" />
                <div>
                  <p className="font-body text-sm font-medium">Email</p>
                  <p className="text-body text-muted-foreground text-sm mt-1">{site.email}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock size={20} className="text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-body text-sm font-medium">Working hours</p>
                  <p className="text-body text-muted-foreground text-sm mt-1">
                    Monday – Saturday: 9:00 AM – 7:00 PM
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </div>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-foreground text-background text-xs font-medium tracking-[0.2em] uppercase hover:bg-foreground/90 transition-colors"
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="min-h-[400px] border border-border overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=201%20Opera%20Business%20Hub%20Nr.By%20Savji%20Korat%20Bridge,%20Ljamni%20Chowk%20Mota%20Varachha,%20Surat&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shyam Studio location"
            />
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <SectionTitle className="mb-12 text-center">Frequently asked questions</SectionTitle>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-b border-border">
              <button
                type="button"
                className="w-full flex justify-between items-center py-5 text-left gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-heading text-lg font-light">{faq.q}</span>
                <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }}>
                  <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                </motion.span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-body text-muted-foreground text-sm pb-5">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default Contact;
