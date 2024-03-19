import Image from 'next/image';
import type { GetProductListResponse } from '@/app/_modules/types';
import { Divider, Grid } from '@mui/material';
import { defaultImage } from '@/app/_modules/constants';
import { getProductInfo } from '@/app/_modules/api/product-api';
import { ProductColor } from '@/app/_components';
import {
  BackIconButton,
  ProductContents,
  ProductOverview,
} from './_components';

interface IProductPageProps {
  params: { id: string };
}

/**
 * 상품 ID별 상품 상세 페이지
 */
async function ProductPage({ params }: IProductPageProps) {
  const productInfo: GetProductListResponse = await getProductInfo(params.id);

  return (
    <>
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

      <ProductColor productColors={productInfo?.product_colors} type="detail" />
      <Divider />

      <ProductContents productInfo={productInfo} />
    </>
  );
}

export default ProductPage;
