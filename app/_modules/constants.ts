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
  TYPE: [
    { name: 'Blush', url: 'blush' },
    { name: 'Bronzer', url: 'bronzer' },
    { name: 'Eyebrow', url: 'eyebrow' },
    { name: 'Eyeliner', url: 'eyeliner' },
    { name: 'EyeShadow', url: 'eyeShadow' },
    { name: 'Foundation', url: 'foundation' },
    { name: 'Lip liner', url: 'lip_liner' },
    { name: 'Lipstick', url: 'lipstick' },
    { name: 'Mascara', url: 'mascara' },
    { name: 'Nail polish', url: 'nail_polish' },
  ],
  CATEGORY: [
    'Powder',
    'Cream',
    'Pencil',
    'Gel',
    'Liquid',
    'Palette',
    'Concealer',
    'Contour',
    'Bb cc',
    'Mineral',
    'Highlighter',
    'Lipstick',
    'Lip gloss',
    'Lip stain',
  ],
  TAG: [
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
 * 스켈레톤 UI 개수
 */
export const skeletonCounts = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

/**
 * 기본 이미지
 */
export const defaultImage =
  'https://montevista.greatheartsamerica.org/wp-content/uploads/sites/2/2016/11/default-placeholder.png';
