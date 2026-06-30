/**
 * Public portfolio assets under /public/images — referenced as absolute URLs.
 */

export const portfolio = {
  hero: '/images/family/f1.webp',
  about: '/images/mother/m2.webp',
} as const;

/** Studio / setup shots under `public/images/setup` (keep this list in sync with files on disk). */
const STUDIO_SETUP_FILES = ['s1.webp', 's4.webp', 's5.webp', 's6.webp', 's7.webp'] as const;

export const studioSetupPhotos = STUDIO_SETUP_FILES.map((f) => `/images/setup/${f}`);

export type PortfolioFilterCategory =
  | 'toddlers'
  | 'newborn'
  | 'family-shoots'
  | 'festival'
  | 'reels-outdoor'
  | 'reels-indoor';

export type PortfolioCategoryId = 'all' | PortfolioFilterCategory;

export const portfolioFilterCategoryIds: PortfolioFilterCategory[] = [
  'toddlers',
  'newborn',
  'family-shoots',
  'festival',
  'reels-outdoor',
  'reels-indoor',
];

export function isPortfolioFilterCategory(value: string | null): value is PortfolioFilterCategory {
  return portfolioFilterCategoryIds.includes(value as PortfolioFilterCategory);
}

export type HomePortfolioPhotoItem = {
  kind: 'photo';
  img: string;
  title: string;
  category: PortfolioFilterCategory;
};

export type HomePortfolioReelItem = {
  kind: 'reel';
  reel: string;
  title: string;
  category: PortfolioFilterCategory;
};

export type HomePortfolioItem = HomePortfolioPhotoItem | HomePortfolioReelItem;

export const homePortfolioPreview: HomePortfolioItem[] = [
  { kind: 'photo', img: '/images/kids/kid2.webp', title: 'Toddlers', category: 'toddlers' },
  { kind: 'photo', img: '/images/family/f2.webp', title: 'Family Shoots', category: 'family-shoots' },
  { kind: 'photo', img: '/images/newborn/nb1.webp', title: 'Newborn', category: 'newborn' },
  { kind: 'reel', reel: '/images/reels/reel1.mp4', title: 'Outdoor Reels', category: 'reels-outdoor' },
  { kind: 'reel', reel: '/images/reels/reel2.mp4', title: 'Indoor Reels', category: 'reels-indoor' },
];

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

const KIDS = ['kid1.webp', 'kid2.webp', 'kid3.webp', 'kid4.webp', 'kid5.webp'] as const;
const NEWBORN = ['nb1.webp', 'nb2.webp', 'nb3.webp', 'nb4.webp', 'nb5.webp'] as const;
const FAMILY = ['f1.webp', 'f2.webp', 'f3.webp', 'f4.webp', 'f5.webp', 'f6.webp'] as const;
const FESTIVAL = [
  'fe1.webp',
  'fe2.webp',
  'fe3.webp',
  'fe4.webp',
  'fe5.webp',
  'fe6.webp',
  'fe7.webp',
  'fe8.webp',
  'fe9.webp',
  'fe10.webp',
  'fe11.webp',
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
