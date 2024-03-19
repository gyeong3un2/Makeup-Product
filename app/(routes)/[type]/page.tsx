import { ProductListDisplay } from '@/app/_components';
import { PRODUCT_MENU } from '@/app/_modules/constants';

export function generateStaticParams() {
  return PRODUCT_MENU.TYPE.map((type) => ({
    type: type.url,
  }));
}

/**
 * 상품 타입별 페이지
 */
async function ProductTypePage() {
  return <ProductListDisplay />;
}

export default ProductTypePage;
