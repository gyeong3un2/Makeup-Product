'use client';

import { Container, Fab } from '@mui/material';
import {
  Header,
  DisplayProducts,
  GlobalNavigationBar,
  SideNavigationBar,
  FilterChipsBox,
} from './_components';
import { useGetProductList } from '@/api/product';
import { productStore, IProductState } from '@/store/productStore';
import FloatingUpButton from './_components/FloatingUpButton';

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

      <Container className="max-w-6xl">
        <Header />

        <GlobalNavigationBar />

        <FilterChipsBox />

        <DisplayProducts productList={productList} fetchStatus={fetchStatus} />
      </Container>
    </main>
  );
}

export default Home;
