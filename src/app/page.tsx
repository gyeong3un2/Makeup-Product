'use client';

import { useEffect } from 'react';
import { Box, Chip, Container, Divider } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

import {
  Header,
  DisplayProducts,
  GlobalNavigationBar,
  SideNavigationBar,
} from './_components';
import { FilterChip } from '@/src/components/ui';
import { useGetFilterProductList } from '../api/product';
import {
  productTypeStore,
  IProductTypeState,
  IProductCategoryState,
  productCategoryStore,
  IProductTagState,
  productTagStore,
} from '../store/productStore';

function Home() {
  const { selectProductType, removeSelectProductType } =
    productTypeStore<IProductTypeState>((state) => state);
  const { selectProductCategory, removeSelectProductCategory } =
    productCategoryStore<IProductCategoryState>((state) => state);
  const { selectProductTag, removeSelectProductTag } =
    productTagStore<IProductTagState>((state) => state);

  const { fetchStatus, data: productList, refetch } = useGetFilterProductList();

  useEffect(() => {
    refetch();
  }, [selectProductType, selectProductCategory, selectProductTag]);

  const handleFilterReset = () => {
    removeSelectProductType();
    removeSelectProductCategory();
    removeSelectProductTag();
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <SideNavigationBar refetch={refetch} />

      <Container className="max-w-6xl">
        <Header />

        <GlobalNavigationBar />

        <Divider className="border-gray-400 mb-3" />

        <Box className="h-10 space-x-2">
          {(selectProductType || selectProductCategory || selectProductTag) && (
            <Chip
              icon={<RestartAltIcon className=" fill-white" />}
              label="reset"
              onClick={handleFilterReset}
              className="text-white bg-main hover:bg-[#5b3e40]"
            />
          )}
          {selectProductType && (
            <FilterChip
              labelType="Type"
              selectFilterName={selectProductType}
              onDeleteChip={removeSelectProductType}
            />
          )}
          {selectProductCategory && (
            <FilterChip
              labelType="Category"
              selectFilterName={selectProductCategory}
              onDeleteChip={removeSelectProductCategory}
            />
          )}
          {selectProductTag && (
            <FilterChip
              labelType="Tag"
              selectFilterName={selectProductTag}
              onDeleteChip={removeSelectProductTag}
            />
          )}
        </Box>

        <DisplayProducts productList={productList} fetchStatus={fetchStatus} />
      </Container>
    </main>
  );
}

export default Home;
