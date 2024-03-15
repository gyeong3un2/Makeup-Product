import { PRODUCT_MENU } from '../../modules/constants';
import { DisplayProducts } from '../../components';
import { Container } from '@mui/material';

export function generateStaticParams() {
  return PRODUCT_MENU.productType.map((type) => ({ type: type.toString() }));
}

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
