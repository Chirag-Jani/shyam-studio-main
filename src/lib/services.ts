import imgHeroStudio from '@/assets/hero-studio.jpg';
import imgBaby from '@/assets/portfolio-baby.jpg';
import imgKids from '@/assets/portfolio-kids.jpg';
import imgMaternity from '@/assets/portfolio-maternity.jpg';
import imgNewborn from '@/assets/portfolio-newborn.jpg';
import imgPhotographer from '@/assets/about-photographer.jpg';

export const packages = [
    {
        id: 'essential-memories',
        slug: 'essential-memories',
        category: 'Basic Plans',
        title: 'Essential Memories',
        price: '₹11,500',
        description: '*Only baby photo package',
        includes: ['12 photo [Edited]', '8x12 Karizma Album', 'Only Selected Photo', '2 MB Document'],
        featured: false,
        images: [imgNewborn, imgBaby, imgPhotographer]
    },
    {
        id: 'classic-keepsake',
        slug: 'classic-keepsake',
        category: 'Basic Plans',
        title: 'Classic Keepsake',
        price: '₹15,500',
        description: '*Only baby photo package',
        includes: ['12 photo [Edited HD]', '16x24 [1 copy]', '8x12 Karizma Album', '4 mobile reels [without edit]', '1 bag', 'All Hd Raw img [Pendrive / Harddisk]'],
        featured: false,
        images: [imgBaby, imgNewborn, imgPhotographer]
    },
    {
        id: 'sweet-beginnings',
        slug: 'sweet-beginnings',
        category: 'Basic Plans',
        title: 'Sweet Beginnings',
        price: '₹20,500',
        description: '*Only baby photo package',
        includes: ['24 photos [Edited]', '2 MB document', '4 mobile reels [without edit]', '8x12 Karizma album', '1 photo Family [Only seleted photo]'],
        featured: false,
        images: [imgMaternity, imgBaby, imgKids]
    },
    {
        id: 'joyful-collection',
        slug: 'joyful-collection',
        category: 'Standard Plans',
        title: 'Joyful Collection',
        price: '₹23,500',
        description: '*Only baby photo package',
        includes: ['24 photo (Edited)', '1 to 2 MB document', '8x12 Karizma album', '20x30 (1 copy)', '6 mobile reels (Without edit)', '1 bag', '1 photo Family (Selected photo)'],
        featured: false,
        images: [imgKids, imgMaternity, imgHeroStudio]
    },
    {
        id: 'radiant-moments',
        slug: 'radiant-moments',
        category: 'Standard Plans',
        title: 'Radiant Moments',
        price: '₹25,500',
        description: '*Only baby photo package',
        includes: ['24 photo [Edited]', '1 copy (20x30)', '1 to 2 MB mobile document', '4x6 (12 copy)', '1 Album Bag', '10x15 Karizma Album', '8 mobile reels without Edit', '1 photo Family'],
        featured: false,
        images: [imgHeroStudio, imgBaby, imgKids]
    },
    {
        id: 'signature-star',
        slug: 'signature-star',
        category: 'Standard Plans',
        title: 'Signature Star',
        price: '₹30,500',
        description: '*Only baby photo package',
        includes: ['24 photos [Edited HD]', '1 copy (20x30)', '10x15 Karizma Album', '4x6 (12 copy)', '1 Mug/1 Keychain/ 1 bag', '12 Mobile Reels [without edit]', 'All Hd Raw Img [Pendrive / Harddisk]', 'Only selected Angel hd family photo'],
        featured: true,
        images: [imgBaby, imgMaternity, imgNewborn]
    },
    {
        id: 'luxe-heirloom',
        slug: 'luxe-heirloom',
        category: 'Premium Plans',
        title: 'Luxe Heirloom',
        price: '₹40,500',
        description: '*Only baby photo package',
        includes: ['36 photo [10x15 album]', '1 copy (20x30)', '1 to 2 MB Mobile Document', '4x6 (12 copy)', '1 Mug/ 1 Keychain/ 1 Bag/ 1 Calendar', '20 Mobile Reels (without edit)', 'All Hd Raw img (Pendrive / Harddisk)', 'Only Selected Angel HD family photo'],
        featured: false,
        images: [imgNewborn, imgHeroStudio, imgMaternity]
    },
    {
        id: 'platinum-legacy',
        slug: 'platinum-legacy',
        category: 'Premium Plans',
        title: 'Platinum Legacy',
        price: '₹48,500',
        description: '*Only baby photo package',
        includes: ['48 photo [10x15 album]', '1 copy (20x30)', 'Original Document', '4x6 (12 copy)', '1 Mug/ 1 Keychain/ 1 Bag / 1 Calendar', '24 Mobile Reels (Without edit)', 'All Hd Raw img [pendrive / harddisk]', 'Only selected Angel Hd Family photo'],
        featured: false,
        images: [imgMaternity, imgBaby, imgHeroStudio]
    },
];

export const packageCategories = ['Basic Plans', 'Standard Plans', 'Premium Plans'];
