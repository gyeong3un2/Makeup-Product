'use client';

import Image from 'next/image';
import { Button, Container, Divider, Grid } from '@mui/material';
import { useGetProductInfo } from '../api/product';
import { IProductState, productStore } from '../modules/store/productStore';
import { defaultImage } from '../modules/constants';
import { ProductColor, ProductContents, ProductOverview } from '.';

/**
 * 상품 상세 페이지
 */
function ProductDetail() {
  const { selectProductId, setSelectProductId } = productStore<IProductState>(
    (state) => state,
  );
  const { data: productInfo } = useGetProductInfo({
    productId: selectProductId,
  });

  return (
    <div className="flex flex-col items-center">
      <Container className="w-xl">
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

        <Grid container justifyContent="center">
          <Button
            variant="contained"
            onClick={() => setSelectProductId(0)}
            className="px-10 py-2 bg-main hover:bg-[#654548]"
          >
            Close
          </Button>
        </Grid>
      </Container>
    </div>
  );
}

export default ProductDetail;
