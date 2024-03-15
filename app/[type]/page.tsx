import { PRODUCT_MENU } from '../modules/constants';
import { GetProductListResponse } from '../modules/types';
import { DisplayProducts } from '../components';
import { Container } from '@mui/material';

export function generateStaticParams() {
  return PRODUCT_MENU.productType.map((type) => ({ type: type.toString() }));
}

interface IProductTypePageProps {
  params: { type: string };
}

async function ProductTypePage({ params }: IProductTypePageProps) {
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
        <DisplayProducts />
      </Container>
    </main>
  );
}

export default ProductTypePage;
