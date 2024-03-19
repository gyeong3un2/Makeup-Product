import { ProductListDisplay } from '@/app/_components';
import { PRODUCT_MENU } from '@/app/_modules/constants';
import ProductLayout from '@/app/_components/productLayout';

export function generateStaticParams() {
  return PRODUCT_MENU.TYPE.map((type) => ({
    type: type.url,
  }));
}

/**
 * 상품 타입별 페이지
 */
async function ProductTypePage() {
  return (
    <ProductLayout>
      <ProductListDisplay />
    </ProductLayout>
  );
}

export default ProductTypePage;
