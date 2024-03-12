'use client';

import Image from 'next/image';
import { Container, Divider, Grid } from '@mui/material';
import { ProductColor } from '@/components/ui';
import ProductContents from './_components/ProductContents';
import { GetProductListResponse } from '@/types';
import ProductOverview from './_components/ProductOverview';

function ProductPage() {
  const product =
    typeof window !== 'undefined'
      ? sessionStorage.getItem('productInfo')
      : undefined;
  const productInfo: GetProductListResponse = product && JSON.parse(product);

  return (
    <div className="flex flex-col items-center">
      <Container className="max-w-xl">
        <Divider />

        <Grid
          container
          rowSpacing={2}
          gridAutoRows={1}
          className="h-full shadow-none m-auto items-center p-2"
        >
          <Grid item xs={12} sm={5} md={5}>
            <Image
              className="w-36 my-3 m-auto"
              draggable={false}
              src={`http:${productInfo.api_featured_image}`}
              alt={productInfo.name}
              width={32}
              height={32}
            />
          </Grid>

          <Grid item xs={12} sm={7} md={7}>
            <ProductOverview productInfo={productInfo} />
          </Grid>
        </Grid>

        <Divider />

        <ProductColor
          productColors={productInfo.product_colors}
          type="detail"
        />
        <Divider />

        <ProductContents productInfo={productInfo} />
      </Container>
    </div>
  );
}

export default ProductPage;
