import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { PRODUCT_MENU } from '../modules/constants';
import { GetProductListResponse } from '../modules/types';
import { DisplayProducts, SideNavigationBar } from '../components';
import { Container } from '@mui/material';

export function generateStaticParams() {
  return PRODUCT_MENU.productType.map((type) => ({ type: type.toString() }));
}

async function ProductTypePage({ params }: Params) {
  async function useTypeGetProductList(): Promise<GetProductListResponse[]> {
    const data = await fetch(
      `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${params.type}`,
    );
    const productList: GetProductListResponse[] = await data.json();

    return productList;
  }

  const productList = await useTypeGetProductList();

  return (
    <main className="flex flex-col items-center">
      <Container className="max-w-xl">
        <DisplayProducts productList={productList} />
      </Container>
    </main>
  );
}

export default ProductTypePage;
