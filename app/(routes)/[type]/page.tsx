import { ProductListDisplay } from '@/app/_components';
import { PRODUCT_MENU } from '@/app/modules/constants';

export function generateStaticParams() {
  return PRODUCT_MENU.productType.map((type) => ({
    type: type.toString().toLowerCase(),
  }));
}

/**
 * 상품 타입별 페이지
 */
async function ProductTypePage() {
  return <ProductListDisplay />;
}

export default ProductTypePage;
