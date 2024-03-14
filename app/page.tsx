'use client';

import { Container } from '@mui/material';
import { useGetProductList } from '@/app/api/product';
import { productStore, IProductState } from '@/app/modules/store/productStore';
import {
  DisplayProducts,
  FilterChipsBox,
  FloatingUpButton,
  GlobalNavigationBar,
  ProductDetail,
  SideNavigationBar,
} from './components';

/**
 * 메인 페이지
 */
function Home() {
  const {
    selectProductId,
    selectProductType,
    selectProductCategory,
    selectProductTag,
  } = productStore<IProductState>((state) => state);

  const { fetchStatus, data: productList } = useGetProductList({
    selectProductType,
    selectProductCategory,
    selectProductTag,
  });

  return (
    <main className="flex flex-col items-center">
      {selectProductId !== 0 ? (
        <ProductDetail />
      ) : (
        <>
          <SideNavigationBar />

          <FloatingUpButton />

          <Container className="max-w-xl">
            <GlobalNavigationBar />

            <FilterChipsBox />

            <DisplayProducts
              productList={productList}
              fetchStatus={fetchStatus}
            />
          </Container>
        </>
      )}
    </main>
  );
}

export default Home;
