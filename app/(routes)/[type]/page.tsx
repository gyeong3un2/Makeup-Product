import { PRODUCT_MENU } from '../../modules/constants';
import { DisplayProducts } from '../../components';
import { Container } from '@mui/material';

export function generateStaticParams() {
  return PRODUCT_MENU.productType.map((type) => ({ type: type.toString() }));
}

/**
 * 상품 타입별 페이지
 */
async function ProductTypePage() {
  return (
    <main className="flex flex-col items-center">
      <Container className="max-w-xl">
        <DisplayProducts />
      </Container>
    </main>
  );
}

export default ProductTypePage;
