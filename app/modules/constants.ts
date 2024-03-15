import { Gruppo } from 'next/font/google';
import { Abel } from 'next/font/google';

/**
 * 폰트 설정
 */
export const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});
export const abel = Abel({
  subsets: ['latin'],
  weight: '400',
});

/**
 * 상품 필터링 메뉴
 */
export const PRODUCT_MENU = {
  brands: [
    'almay',
    'alva',
    'anna sui',
    'annabelle',
    'benefit',
    'boosh',
    "burt's bees",
    'butter london',
    "c'est moi",
    'cargo cosmetics',
    'china glaze',
    'clinique',
    'coastal classic creation',
    'colourpop',
    'covergirl',
    'dalish',
    'deciem',
    'dior',
    'dr. hauschka',
    'e.l.f.',
    'essie',
    'fenty',
    'glossier',
    'green people',
    'iman',
    "l'oreal",
    'lotus cosmetics usa',
    "maia's mineral galaxy",
    'marcelle',
    'marienatie',
    'maybelline',
    'milani',
    'mineral fusion',
    'misa',
    'mistura',
    'moov',
    'nudus',
    'nyx',
    'orly',
    'pacifica',
    'penny lane organics',
    'physicians formula',
    'piggy paint',
    'pure anada',
    'rejuva minerals',
    'revlon',
    "sally b's skin yummies",
    'salon perfect',
    'sante',
    'sinful colours',
    'smashbox',
    'stila',
    'suncoat',
    'w3llpeople',
    'wet n wild',
    'zorah',
    'zorah biocosmetiques',
  ],
  productType: [
    'Blush',
    'Bronzer',
    'Eyebrow',
    'Eyeliner',
    'EyeShadow',
    'Foundation',
    'Lip%20liner',
    'Lipstick',
    'Mascara',
    'Nail%20polish',
  ],
  categoryLeft: [
    'Powder',
    'Cream',
    'Pencil',
    'Gel',
    'Liquid',
    'Palette',
    'Concealer',
  ],
  categoryRight: [
    'Contour',
    'Bb cc',
    'Mineral',
    'Highlighter',
    'Lipstick',
    'Lip gloss',
    'Lip stain',
  ],
  tagLeft: [
    'Vegan',
    'Canadian',
    'Natural',
    'Organic',
    'Usda organic',
    'Peanut free product',
    'Non-gmo',
    'Purpicks',
    'Hypoallergenic',
    'Certclean',
    'Ewg verified',
  ],
  tagRight: [
    'No talc',
    'Ecocert',
    'Oil free',
    'Water free',
    'Daily free',
    'Gluten free',
    'Cruelty free',
    'Alcohol free',
    'Silicone free',
    'Chemical free',
    'Fair trade',
  ],
};

/**
 * 스켈레톤 개수
 */
export const skeletonCounts = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

/**
 * 기본 이미지
 */
export const defaultImage =
  'https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png';
