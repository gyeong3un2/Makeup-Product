import Image from 'next/image';
import { Container, Divider, Grid } from '@mui/material';
import { defaultImage } from '@/app/data/product';
import { ProductColor } from '@/app/ui';
import { ProductContents, ProductOverview } from './_components';
import { useGetProductInfo } from '../api/product';
import { GetProductListResponse } from '../types';

export async function generateStaticParams() {
  const products = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json',
  ).then((res) => res.json());

  return products.map((product: GetProductListResponse) => ({
    productId: product.id.toString(),
  }));
}
interface IProductPageProps {
  params: { productId: string };
}

/**
 * 상품 상세 페이지
 */
function ProductPage({ params: { productId } }: IProductPageProps) {
  // const productInfo = useGetProductInfo({
  //   productId: productId,
  // });

  // console.log('productId: ', productId);
  // console.log('productInfo: ', productInfo);

  return (
    <div className="flex flex-col items-center">
      {/* <Container className="max-w-xl">
        <Divider />

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
                productInfo.data?.api_featured_image
                  ? `http:${productInfo.data?.api_featured_image}`
                  : defaultImage
              }
              alt="image"
              width={40}
              height={40}
            />
          </Grid>

          <Grid item xs={12} sm={7} md={7}>
            <ProductOverview productInfo={productInfo.data} />
          </Grid>
        </Grid>

        <Divider />

        <ProductColor
          productColors={productInfo.data?.product_colors}
          type="detail"
        />
        <Divider />

        <ProductContents productInfo={productInfo.data} />
      </Container> */}
    </div>
  );
}

export default ProductPage;
