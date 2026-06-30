export const site = {
  name: 'Shyam Studio',
  tagline: 'Capturing life\'s most precious moments.',
  logo: '/logo.svg',
  logoIcon: '/favicon.ico',
  phone: '+91 99253 11820',
  phoneTel: '919925311820',
  whatsapp: 'https://wa.me/919925311820',
  email: 'hello@shyamstudio.com',
  instagram: 'https://www.instagram.com/shyamstudio.surat/',
  instagramHandle: 'shyamstudio.surat',
  address: '201 Opera Business Hub Nr.By Savji Korat Bridge, Ljamni Chowk Mota Varachha, Surat.',
  mapsUrl:
    'https://maps.google.com/maps?q=201%20Opera%20Business%20Hub%20Nr.By%20Savji%20Korat%20Bridge,%20Ljamni%20Chowk%20Mota%20Varachha,%20Surat',
} as const;

export const heroSlides = [
  { src: '/images/newborn/nb1.webp', label: 'Newborn', href: '/portfolio?category=newborn' },
  { src: '/images/kids/kid2.webp', label: 'Toddlers', href: '/portfolio?category=toddlers' },
  { src: '/images/mother/m2.webp', label: 'Maternity', href: '/portfolio?category=family-shoots' },
  { src: '/images/family/f1.webp', label: 'Family', href: '/portfolio?category=family-shoots' },
  { src: '/images/festival/fe1.webp', label: 'Festival', href: '/portfolio?category=festival' },
  { src: '/images/newborn/nb4.webp', label: 'Newborn', href: '/portfolio?category=newborn' },
  { src: '/images/family/f3.webp', label: 'Family', href: '/portfolio?category=family-shoots' },
] as const;

export const homeCategoryGalleries = [
  {
    title: 'Newborn',
    subtitle: 'First days, gently captured',
    href: '/portfolio?category=newborn',
    images: ['/images/newborn/nb1.webp', '/images/newborn/nb2.webp', '/images/newborn/nb4.webp', '/images/newborn/nb5.webp'],
  },
  {
    title: 'Toddlers & Kids',
    subtitle: 'Personality and play',
    href: '/portfolio?category=toddlers',
    images: ['/images/kids/kid2.webp', '/images/kids/kid1.webp', '/images/kids/kid3.webp', '/images/kids/kid5.webp'],
  },
  {
    title: 'Family',
    subtitle: 'Together, as you are',
    href: '/portfolio?category=family-shoots',
    images: ['/images/family/f1.webp', '/images/family/f2.webp', '/images/family/f3.webp', '/images/family/f6.webp'],
  },
  {
    title: 'Festival',
    subtitle: 'Celebration and colour',
    href: '/portfolio?category=festival',
    images: ['/images/festival/fe1.webp', '/images/festival/fe3.webp', '/images/festival/fe6.webp', '/images/festival/fe10.webp'],
  },
] as const;

export const uspHighlights = [
  { title: 'Memories within reach', line: 'Premium quality from ₹11,500' },
  { title: 'Hassle-free sessions', line: 'Props, guidance, and patience included' },
  { title: 'Comfort first', line: 'Especially with newborns and toddlers' },
  { title: '8+ years in Surat', line: '10,000+ sessions completed' },
] as const;

export const heroEyebrow = ['Dear parents,', 'Welcome to a once-in-a-lifetime moment'] as const;

export const heroCollage = {
  center: '/images/mother/m2.webp',
  left: ['/images/newborn/nb1.webp', '/images/family/f3.webp'],
  right: ['/images/family/f1.webp', '/images/kids/kid2.webp'],
} as const;

export const letter = {
  label: 'Hey there, lovely soul!',
  heading: "We're so happy you found us!",
  paragraphs: [
    `At Shyam Studio, we don't just click pictures—we create stories that live forever. Our style is storytelling photography, which means every frame is more than just a pose—it's an emotion, a memory, a chapter of your family's journey.`,
    `Why does this matter? Because years from now, when you look back, you won't just see a photograph—you'll feel the love, joy, and magic of that moment all over again.`,
    `Whether it's your newborn's very first days, your toddler's cheeky giggles, or the whole family gathered for a festival, we capture moments in a way that reflects your unique story. This isn't just about documenting how you looked—it's about showing your child: "This is how much you were loved, right from the very beginning."`,
  ],
  signature: 'Shyam Studio',
} as const;

export const stats = [
  { value: '10,000+', label: 'Sessions' },
  { value: '8+', label: 'Years of experience' },
  { value: '5,000+', label: 'Happy families' },
] as const;

export const aboutIntro = [
  `Shyam Studio is a professional photography studio in Surat specialising in toddlers, newborn, family, and festival photography—with a deep focus on storytelling. With over 8 years of experience and thousands of completed shoots, our work is built around capturing real emotions, meaningful connections, and moments families want to remember long after the day has passed.`,
  `We create refined photographic experiences using thoughtful lighting, careful composition, and a comfort-first approach that lets people be themselves in front of the camera. Our work spans studio sessions, outdoor shoots, in-home lifestyle coverage, and cinematic reels—delivering consistent, high-quality work with the same care and creative intent.`,
] as const;

export const uspSlides = [
  {
    eyebrow: 'What makes us your choice?',
    title: 'Memories Within Reach',
    subtitle: 'Premium quality at approachable prices',
    body: 'Shyam Studio operates from Surat with a premium indoor studio setup, curated props, and flexible packages starting from ₹11,500. With years of experience and thousands of completed assignments, families trust us for creative excellence and professional execution.',
  },
  {
    eyebrow: 'What makes us your choice?',
    title: 'Beyond Photography',
    subtitle: 'A hassle-free experience',
    body: 'From outfit guidance and props to patient direction through the best poses, we take care of the details. Our aim is to make the process effortless so you can simply enjoy your special day.',
  },
  {
    eyebrow: 'What makes us perfect for you?',
    title: 'Our Style & Your Choice',
    subtitle: 'Photography is deeply personal',
    body: 'We believe you should choose a photographer whose style speaks to your heart. If you see warmth, grace, and timeless beauty in our work, then we are meant to tell your story.',
  },
  {
    eyebrow: 'What makes us different?',
    title: 'Your Comfort is Our Priority',
    subtitle: 'Calm, flexible sessions',
    body: 'We create a peaceful, relaxing environment where you feel at ease—whether it is a short session or an extended one to capture every detail. We work at your comfort level, especially with newborns and toddlers.',
  },
] as const;

export const storiesWeCover = [
  { label: 'Toddlers', href: '/portfolio?category=toddlers' },
  { label: 'Newborn', href: '/portfolio?category=newborn' },
  { label: 'Family Shoots', href: '/portfolio?category=family-shoots' },
  { label: 'Festival', href: '/portfolio?category=festival' },
  { label: 'Outdoor Reels', href: '/portfolio?category=reels-outdoor' },
  { label: 'Indoor Reels', href: '/portfolio?category=reels-indoor' },
] as const;

export const planningOptions = [
  { title: 'Toddlers', desc: 'Playful milestones and personality from the toddler years', href: '/portfolio?category=toddlers' },
  { title: 'Newborn', desc: 'First days captured with gentle, artistic precision', href: '/portfolio?category=newborn' },
  { title: 'Family Shoots', desc: 'Togetherness, siblings, and candid stories for every family', href: '/portfolio?category=family-shoots' },
  { title: 'Festival', desc: 'Celebration moments with colour, joy, and tradition', href: '/portfolio?category=festival' },
  { title: 'Outdoor Reels', desc: 'Cinematic short-form video in natural light', href: '/portfolio?category=reels-outdoor' },
  { title: 'Indoor Reels', desc: 'Studio reels for announcements and social sharing', href: '/portfolio?category=reels-indoor' },
] as const;

export const differentiators = [
  'Comfort-first shooting where nothing feels forced',
  'Guided sessions without rigid posing',
  'Structured planning so everything flows smoothly',
  'Props, outfits, and preparation support when needed',
  'Experience with newborns, toddlers, and large families',
  'Consistent results across studio and outdoor shoots',
  'Photography and reels designed together, not separately',
] as const;

export const contentSections = [
  {
    title: 'From One Shoot to a Complete Family Journey',
    paragraphs: [
      'Most of our clients begin with one shoot and return as their family grows. Newborn becomes toddler. Toddler becomes festival. Festival becomes family.',
      'We maintain consistency in visual style and experience across all stages, so your photos feel like one continuous story instead of disconnected sessions.',
    ],
  },
  {
    title: 'How We Work — Clear, Guided, and Predictable',
    paragraphs: [
      'We follow a structured process so you always know what to expect. We understand your requirement, plan the shoot around your comfort and style, guide you during the session, and deliver everything in a clean, organised format.',
      'There is no confusion, no last-minute stress, and no need to coordinate multiple things on your own.',
    ],
  },
  {
    title: 'Built Around Comfort, Not Pressure',
    paragraphs: [
      'A major reason shoots fail is discomfort. We remove that completely. Our sessions are designed to feel calm, flexible, and natural—especially with newborns, toddlers, or large families.',
      'You do not have to worry about how to act or where to stand. We guide you in a way that feels effortless.',
    ],
  },
  {
    title: 'Studio, Home, or Outdoor — We Adapt to You',
    paragraphs: [
      'Every family prefers a different environment. We offer premium indoor studio setups, outdoor sessions, and flexible locations around Surat. The setting changes, but the experience and quality remain consistent.',
    ],
    bullets: [
      'Premium indoor studio setups for clean, controlled visuals',
      'Outdoor sessions in natural light',
      'At-home sessions for a familiar, relaxed experience',
      'Festival and celebration coverage on location',
    ],
  },
  {
    title: 'Styling, Preparation and Coordination — Already Handled',
    paragraphs: [
      'Preparation is where most people struggle, especially with little ones involved. We simplify that with outfit guidance, colour coordination, props, and optional styling support—planned so you do not manage it separately.',
    ],
  },
  {
    title: 'Designed for Real Families, Not Ideal Conditions',
    paragraphs: [
      'We work with real-life situations—babies who need time, children who do not sit still, large families with cousins and grandparents, and the beautiful chaos that comes with it.',
    ],
  },
  {
    title: 'Photography and Reels Designed Together',
    paragraphs: [
      'At Shyam Studio, photography and reels are part of the same process. Photos capture moments. Reels capture movement, emotion, and continuity. Together, they create a complete memory of the experience.',
    ],
  },
  {
    title: 'What You Actually Get',
    paragraphs: ['After your shoot, you receive professionally edited photographs, mobile reels where included in your package, and albums or prints as per your plan—delivered in a structured, easy-to-use format.'],
    bullets: [
      'Professionally edited photographs with a natural finish',
      'Mobile reels for sharing (package-dependent)',
      'Albums, prints, and digital delivery as per your package',
    ],
  },
  {
    title: 'Why Families Trust Shyam Studio',
    paragraphs: [
      'Trust comes from consistency, not claims. Families choose us for a predictable, well-managed experience, calm execution even in complex shoots, and long-term reliability across multiple milestones.',
    ],
  },
] as const;

export const testimonials = [
  {
    text: "Shyam Studio captured our baby's first moments so beautifully. Every photo tells a story.",
    author: 'Priya Sharma',
    role: 'Newborn session',
    image: '/images/newborn/nb1.webp',
  },
  {
    text: 'Our kids had a blast and the photos are priceless treasures.',
    author: 'Anita Desai',
    role: 'Family session',
    image: '/images/family/f2.webp',
  },
  {
    text: 'The consistency in quality and warm environment keeps us coming back.',
    author: 'Vikram & Sunita Reddy',
    role: 'Premium package',
    image: '/images/family/f6.webp',
  },
] as const;

export const portfolioCarouselImages = [
  '/images/family/f1.webp',
  '/images/newborn/nb1.webp',
  '/images/kids/kid2.webp',
  '/images/festival/fe1.webp',
  '/images/family/f3.webp',
] as const;
