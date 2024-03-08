'use client';

import { useEffect } from 'react';
import { Container, Divider } from '@mui/material';

import {
  Header,
  DisplayProducts,
  GlobalNavigationBar,
  SideNavigationBar,
  FilterChipsBox,
} from './_components';
import { useGetFilterProductList } from '../api/product';
import { IProductState, productStore } from '../store/productStore';

function Home() {
  const { selectProductType, selectProductCategory, selectProductTag } =
    productStore<IProductState>((state) => state);

  const { fetchStatus, data: productList, refetch } = useGetFilterProductList();

  useEffect(() => {
    refetch();
  }, [selectProductType, selectProductCategory, selectProductTag]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SideNavigationBar refetch={refetch} />

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
