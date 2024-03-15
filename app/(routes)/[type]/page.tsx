import { DisplayProducts } from '@/app/components';
import { PRODUCT_MENU } from '@/app/modules/constants';

export function generateStaticParams() {
  return PRODUCT_MENU.productType.map((type) => ({ type: type.toString() }));
}

/**
 * 상품 타입별 페이지
 */
async function ProductTypePage() {
  return (
    <>
      <DisplayProducts />
    </>
  );
}

export default ProductTypePage;
