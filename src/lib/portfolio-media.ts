/**
 * Public portfolio assets under /public/images — referenced as absolute URLs.
 */

export const portfolio = {
  hero: '/images/family/f1.jpg',
  about: '/images/mother/m2.jpg',
  aboutStudio: '/images/family/f3.jpg',
  aboutDetail: '/images/kids/kid1.jpg',
} as const;

export const homePortfolioPreview = [
  { img: '/images/kids/kid2.jpg', title: 'Baby Shoots', category: 'baby-shoots' },
  { img: '/images/mother/m1.jpg', title: 'Maternity', category: 'maternity' },
  { img: '/images/newborn/nb1.jpg', title: 'Newborn', category: 'newborn' },
  { img: '/images/family/f2.jpg', title: 'Baby & Kids', category: 'baby-kids' },
] as const;

export type PortfolioCategoryId =
  | 'all'
  | 'baby-shoots'
  | 'maternity'
  | 'newborn'
  | 'baby-kids'
  | 'festival'
  | 'reels';

export type PhotoGalleryItem = {
  kind: 'photo';
  id: number;
  src: string;
  category: Exclude<PortfolioCategoryId, 'all' | 'reels'>;
  title: string;
  aspect: 'portrait' | 'landscape';
};

export type ReelGalleryItem = {
  kind: 'reel';
  id: number;
  src: string;
  category: 'reels';
  title: string;
};

export type PortfolioGalleryItem = PhotoGalleryItem | ReelGalleryItem;

const KIDS = ['kid1.jpg', 'kid2.jpg', 'kid3.jpg', 'kid4.JPG', 'kid5.jpg'] as const;
const MOTHER = ['m1.jpg', 'm2.jpg', 'm3.jpg', 'm4.jpg', 'm5.jpg', 'm6.jpg', 'm7.jpg'] as const;
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
  pushPhotos(raw, KIDS, 'kids', 'baby-shoots', 'Baby shoot');
  pushPhotos(raw, MOTHER, 'mother', 'maternity', 'Maternity');
  pushPhotos(raw, NEWBORN, 'newborn', 'newborn', 'Newborn');
  pushPhotos(raw, FAMILY, 'family', 'baby-kids', 'Family');
  pushPhotos(raw, FESTIVAL, 'festival', 'festival', 'Festival');
  let id = 1;
  return raw.map((p) => ({ ...p, id: id++ }));
}

const reelItemsBase: Omit<ReelGalleryItem, 'id'>[] = [
  { kind: 'reel', src: '/images/reels/reel1.mp4', category: 'reels', title: 'Reel' },
  { kind: 'reel', src: '/images/reels/reel2.mp4', category: 'reels', title: 'Reel' },
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
