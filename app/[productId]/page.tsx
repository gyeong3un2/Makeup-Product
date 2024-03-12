'use client';

import Image from 'next/image';
import { Container, Divider, Grid } from '@mui/material';
import { defaultImage } from '@/data/product';
import { ProductColor } from '@/components/ui';
import { IProductState, productStore } from '@/store/productStore';
import { ProductContents, ProductOverview } from './_components';

function ProductPage() {
  const product = productStore<IProductState>((state) => state);

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
              src={
                product.productInfo?.api_featured_image
                  ? `http:${product.productInfo?.api_featured_image}`
                  : defaultImage
              }
              alt="image"
              width={32}
              height={32}
            />
          </Grid>

          <Grid item xs={12} sm={7} md={7}>
            <ProductOverview productInfo={product.productInfo} />
          </Grid>
        </Grid>

        <Divider />

        <ProductColor
          productColors={product.productInfo?.product_colors}
          type="detail"
        />
        <Divider />

        <ProductContents productInfo={product.productInfo} />
      </Container>
    </div>
  );
}

export default ProductPage;
