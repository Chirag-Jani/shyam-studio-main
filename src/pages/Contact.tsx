import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Mail, Clock, ChevronDown, Instagram } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';

const faqs = [
  {
    q: 'How far in advance should I book a session?',
    a: 'We recommend booking at least 2-4 weeks in advance for regular sessions. For maternity and newborn sessions, booking during the second trimester is ideal to secure your preferred dates.',
  },
  {
    q: 'What should we wear for the photo session?',
    a: 'We recommend wearing coordinating colors in neutral and earthy tones. Avoid busy patterns and logos. We also have a collection of outfits and props available for baby and maternity sessions.',
  },
  {
    q: 'How long does it take to receive the final photos?',
    a: 'Edited digital photos are typically delivered within 2-3 weeks. Premium packages with albums may take 4-6 weeks for complete delivery.',
  },
  {
    q: 'Do you offer home sessions?',
    a: 'Yes, we offer at-home sessions for newborn photography. An additional travel fee may apply depending on your location. Studio sessions are available for all other categories.',
  },
  {
    q: 'Can we bring siblings or pets to the session?',
    a: 'Absolutely! We encourage including siblings in baby and family sessions. Pets are welcome too, though we recommend having a helper present for the furry friends.',
  },
  {
    q: 'What happens if my baby is fussy during the session?',
    a: 'We are very experienced with little ones and allow plenty of time for feeding, soothing, and diaper changes. We never rush a session - your baby comfort is our top priority.',
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Shyam Studio,\nI am ${formData.name}. ${formData.email ? `My email is ${formData.email}. ` : ''}I am interested in the ${formData.service || 'photography'} service.\n\nMessage: ${formData.message}`;
    window.open(`https://wa.me/919925311820?text=${encodeURIComponent(text)}`, '_blank');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 text-center">
          {/* <motion.p
            className="text-label text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Get in Touch
          </motion.p> */}
          <AnimatedText
            text="Let's Create Something Beautiful"
            as="h1"
            className="heading-display text-5xl md:text-7xl text-foreground"
          />
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-heading text-3xl font-light text-foreground mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Studio Location</p>
                    <a 
                      href="https://maps.google.com/maps?q=201%20Opera%20Business%20Hub%20Nr.By%20Savji%20Korat%20Bridge,%20Ljamni%20Chowk%20Mota%20Varachha,%20Surat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-muted-foreground text-sm mt-1 hover:text-foreground hover:underline block"
                    >
                      201 Opera Business Hub Nr.By Savji Korat Bridge,<br />
                      Ljamni Chowk Mota Varachha, Surat.
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Phone</p>
                    <p className="text-body text-muted-foreground text-sm mt-1">+91 99253 11820</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Instagram</p>
                    <a 
                      href="https://www.instagram.com/shyamstudio.surat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-body text-muted-foreground text-sm mt-1 hover:text-foreground hover:underline block"
                    >
                      shyamstudio.surat
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Email</p>
                    <p className="text-body text-muted-foreground text-sm mt-1">hello@shyamstudio.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium text-foreground">Working Hours</p>
                    <p className="text-body text-muted-foreground text-sm mt-1">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Map embedded (Moved from left column) */}
              <div className="w-full h-full min-h-[400px] bg-card border border-border flex items-center justify-center overflow-hidden">
                <iframe 
                  src="https://maps.google.com/maps?q=201%20Opera%20Business%20Hub%20Nr.By%20Savji%20Korat%20Bridge,%20Ljamni%20Chowk%20Mota%20Varachha,%20Surat&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Form Temporarily Disabled */}
              {false && (
                <>
                  <h2 className="font-heading text-3xl font-light text-foreground mb-8">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-label text-muted-foreground block mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-transparent border border-border text-foreground font-body text-sm focus:outline-none focus:border-foreground transition-colors duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-label text-muted-foreground block mb-2">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-4 py-3 bg-transparent border border-border text-foreground font-body text-sm focus:outline-none focus:border-foreground transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="text-label text-muted-foreground block mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="w-full px-4 py-3 bg-transparent border border-border text-foreground font-body text-sm focus:outline-none focus:border-foreground transition-colors duration-300"
                          placeholder="+91 99253 11820"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-label text-muted-foreground block mb-2">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        className="w-full px-4 py-3 bg-transparent border border-border text-foreground font-body text-sm focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none"
                      >
                        <option value="">Select a service</option>
                        <option value="baby">Baby Shoots</option>
                        <option value="maternity">Maternity</option>
                        <option value="newborn">Newborn</option>
                        <option value="kids">Baby & Kids</option>
                        <option value="package">Package Deal</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-label text-muted-foreground block mb-2">Message</label>
                      <textarea
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 bg-transparent border border-border text-foreground font-body text-sm focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                        placeholder="Tell us about your vision..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background font-body text-sm font-medium tracking-wider uppercase hover:bg-foreground/90 transition-colors duration-300 w-full justify-center"
                    >
                      Send Message <ArrowUpRight size={16} />
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <div className="text-center mb-16">
           {/*  <p className="text-label text-muted-foreground mb-4">Common Questions</p> */}
            <AnimatedText
              text="Frequently Asked Questions"
              as="h2"
              className="heading-section text-foreground"
            />
          </div>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="border-b border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  className="w-full flex justify-between items-center py-6 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-heading text-xl font-light text-foreground pr-8">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-muted-foreground flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <p className="text-body text-muted-foreground pb-6 text-sm">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
