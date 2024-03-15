import Image from 'next/image';
import { Container, Divider, Grid } from '@mui/material';
import { GetProductListResponse } from '../../../modules/types';
import { defaultImage } from '../../../modules/constants';
import {
  BackIconButton,
  ProductColor,
  ProductContents,
  ProductOverview,
} from '../../../components';
import { getProductInfo } from '../../../api/product';

export async function generateStaticParams() {
  const getProducts: GetProductListResponse[] = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json',
  ).then((res) => res.json());

  return getProducts.map((product: GetProductListResponse) => ({
    id: product.id.toString(),
  }));
}

interface IProductPageProps {
  params: { id: string };
}

/**
 * 상품 Id별 상품 상세 페이지
 */
async function ProductPage({ params }: IProductPageProps) {
  const productInfo: GetProductListResponse = await getProductInfo(params.id);

  return (
    <div className="flex flex-col items-center">
      <Container className="max-w-xl">
        <Divider className="mt-2" />
        <BackIconButton />

        <Grid
          container
          gridAutoRows={1}
          className="h-full shadow-none m-auto items-center p-2"
        >
          <Grid item xs={12} sm={5} md={5}>
            <Image
              className="w-52 my-3 m-auto"
              draggable={false}
              priority
              src={
                productInfo?.api_featured_image
                  ? `http:${productInfo?.api_featured_image}`
                  : defaultImage
              }
              alt="image"
              width={40}
              height={40}
            />
          </Grid>

          <Grid item xs={12} sm={7} md={7}>
            <ProductOverview productInfo={productInfo} />
          </Grid>
        </Grid>

        <Divider />

        <ProductColor
          productColors={productInfo?.product_colors}
          type="detail"
        />
        <Divider />

        <ProductContents productInfo={productInfo} />
      </Container>
    </div>
  );
}

export default ProductPage;
