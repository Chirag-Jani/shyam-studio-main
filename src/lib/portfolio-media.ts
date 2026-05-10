/**
 * Public portfolio assets under /public/images — referenced as absolute URLs.
 */

export const portfolio = {
  hero: '/images/family/f1.jpg',
  about: '/images/mother/m2.jpg',
} as const;

/** Studio / setup shots under `public/images/setup` (keep this list in sync with files on disk). */
const STUDIO_SETUP_FILES = ['s1.jpeg', 's4.jpeg', 's5.jpeg', 's6.jpeg', 's7.jpeg'] as const;

export const studioSetupPhotos = STUDIO_SETUP_FILES.map((f) => `/images/setup/${f}`);

export type HomePortfolioPhotoItem = {
  kind: 'photo';
  img: string;
  title: string;
  category: string;
};

export type HomePortfolioReelItem = {
  kind: 'reel';
  reel: string;
  title: string;
  category: string;
};

export type HomePortfolioItem = HomePortfolioPhotoItem | HomePortfolioReelItem;

export const homePortfolioPreview: HomePortfolioItem[] = [
  { kind: 'photo', img: '/images/kids/kid2.jpg', title: 'Toddlers', category: 'toddlers' },
  { kind: 'photo', img: '/images/family/f2.jpg', title: 'Family Shoots', category: 'family-shoots' },
  { kind: 'photo', img: '/images/newborn/nb1.jpg', title: 'Newborn', category: 'newborn' },
  { kind: 'reel', reel: '/images/reels/reel1.mp4', title: 'Outdoor Reels', category: 'reels-outdoor' },
  { kind: 'reel', reel: '/images/reels/reel2.mp4', title: 'Indoor Reels', category: 'reels-indoor' },
];

export type PortfolioCategoryId =
  | 'all'
  | 'toddlers'
  | 'newborn'
  | 'family-shoots'
  | 'festival'
  | 'reels-outdoor'
  | 'reels-indoor';

export type PhotoGalleryItem = {
  kind: 'photo';
  id: number;
  src: string;
  category: Exclude<PortfolioCategoryId, 'all' | 'reels-outdoor' | 'reels-indoor'>;
  title: string;
  aspect: 'portrait' | 'landscape';
};

export type ReelGalleryItem = {
  kind: 'reel';
  id: number;
  src: string;
  category: 'reels-outdoor' | 'reels-indoor';
  title: string;
};

export type PortfolioGalleryItem = PhotoGalleryItem | ReelGalleryItem;

const KIDS = ['kid1.jpg', 'kid2.jpg', 'kid3.jpg', 'kid4.JPG', 'kid5.jpg'] as const;
const NEWBORN = ['nb1.jpg', 'nb2.JPG', 'nb3.JPG', 'nb4.jpg', 'nb5.JPG'] as const;
const FAMILY = ['f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg', 'f5.jpg', 'f6.jpg'] as const;
const FESTIVAL = [
  'fe1.JPG',
  'fe2.JPG',
  'fe3.jpg',
  'fe4.JPG',
  'fe5.jpg',
  'fe6.JPG',
  'fe7.jpg',
  'fe8.jpg',
  'fe9.JPG',
  'fe10.JPG',
  'fe11.JPG',
] as const;

function pushPhotos(
  acc: Omit<PhotoGalleryItem, 'id'>[],
  files: readonly string[],
  dir: string,
  category: PhotoGalleryItem['category'],
  titlePrefix: string,
) {
  files.forEach((file, i) => {
    acc.push({
      kind: 'photo',
      src: `/images/${dir}/${file}`,
      category,
      title: `${titlePrefix} ${i + 1}`,
      aspect: i % 3 === 0 ? 'landscape' : 'portrait',
    });
  });
}

function buildPhotoItems(): PhotoGalleryItem[] {
  const raw: Omit<PhotoGalleryItem, 'id'>[] = [];
  pushPhotos(raw, KIDS, 'kids', 'toddlers', 'Toddlers');
  pushPhotos(raw, NEWBORN, 'newborn', 'newborn', 'Newborn');
  pushPhotos(raw, FAMILY, 'family', 'family-shoots', 'Family shoot');
  pushPhotos(raw, FESTIVAL, 'festival', 'festival', 'Festival');
  let id = 1;
  return raw.map((p) => ({ ...p, id: id++ }));
}

const reelItemsBase: Omit<ReelGalleryItem, 'id'>[] = [
  { kind: 'reel', src: '/images/reels/reel1.mp4', category: 'reels-outdoor', title: 'Outdoor reel' },
  { kind: 'reel', src: '/images/reels/reel2.mp4', category: 'reels-indoor', title: 'Indoor reel' },
];

export const portfolioGalleryItems: PortfolioGalleryItem[] = (() => {
  const photos = buildPhotoItems();
  let nextId = photos.length + 1;
  const reels: ReelGalleryItem[] = reelItemsBase.map((r, i) => ({
    ...r,
    id: nextId++,
    title: `${r.title} ${i + 1}`,
  }));
  return [...photos, ...reels];
})();
