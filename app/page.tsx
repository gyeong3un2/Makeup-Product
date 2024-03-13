'use client';

import { Container } from '@mui/material';
import {
  DisplayProducts,
  GlobalNavigationBar,
  SideNavigationBar,
  FilterChipsBox,
  FloatingUpButton,
} from './_components';
import { useGetProductList } from '@/api/product';
import { productStore, IProductState } from '@/store/productStore';

// export async function getStaticPaths() {
//   let { data: productList } = useGetProductList({
//     selectProductType,
//     selectProductCategory,
//     selectProductTag,
//   });

//   const paths =
//     productList &&
//     productList.map((product) => ({
//       params: { productId: product.id },
//     }));

//   return { paths, fallback: 'false' };
// }

// export async function getStaticProps() {
//   let { data: productList } = useGetProductList({
//     selectProductType,
//     selectProductCategory,
//     selectProductTag,
//   });

// }

// return {
//   props: {
//     title: 'Home',
//   },
// };

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

      <Container className="max-w-xl">
        <GlobalNavigationBar />

        <FilterChipsBox />

        <DisplayProducts productList={productList} fetchStatus={fetchStatus} />
      </Container>
    </main>
  );
}

export default Home;
