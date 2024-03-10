'use client';

import { Container } from '@mui/material';
import {
  Header,
  DisplayProducts,
  GlobalNavigationBar,
  SideNavigationBar,
  FilterChipsBox,
  FloatingUpButton,
} from './_components';
import { useGetProductList } from '@/api/product';
import { productStore, IProductState } from '@/store/productStore';

function Home() {
  const { selectProductType, selectProductCategory, selectProductTag } =
    productStore<IProductState>((state) => state);

  const { fetchStatus, data: productList } = useGetProductList({
    selectProductType,
    selectProductCategory,
    selectProductTag,
  });

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SideNavigationBar />

      <FloatingUpButton />

      <Container className="max-w-[72rem]">
        <Header />

        <GlobalNavigationBar />

        <FilterChipsBox />

        <DisplayProducts productList={productList} fetchStatus={fetchStatus} />
      </Container>
    </main>
  );
}

export default Home;
