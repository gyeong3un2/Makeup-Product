'use client';

import { Container } from '@mui/material';
import { productStore, IProductState } from '@/app/modules/store/productStore';
import { DisplayProducts, ProductDetail } from './components';

/**
 * 메인 페이지
 */
function Home() {
  const { selectProductId } = productStore<IProductState>((state) => state);

  return (
    <main className="flex flex-col items-center">
      {selectProductId !== 0 ? (
        <ProductDetail />
      ) : (
        <Container className="max-w-xl">
          <DisplayProducts />
        </Container>
      )}
    </main>
  );
}

export default Home;
