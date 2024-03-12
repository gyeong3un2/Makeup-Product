'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { Gruppo } from 'next/font/google';
import clsx from 'clsx';
import { ProductColor } from '@/components/ui';
import { useParams } from 'next/navigation';
import { IProductState, productStore } from '@/store/productStore';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function ProductPage() {
  const { productId: productId } = useParams();
  const { productInfo } = productStore<IProductState>((state) => state);

  console.log('productId:', productId);
  console.log('productInfo:', productInfo);

  return (
    <main className="flex flex-col items-center">
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
            <Typography className={clsx(gruppo.className, 'text-3xl mb-5')}>
              {productInfo.name}
            </Typography>
            <Typography className={clsx(gruppo.className, 'text-xl')}>
              Brand: {productInfo.brand}
            </Typography>
            <Typography className={clsx(gruppo.className, 'text-xl')}>
              Price: {productInfo.price_sign}
              {productInfo.price}
            </Typography>
            <Typography className={clsx(gruppo.className, 'text-xl')}>
              Star rating:{' '}
              {(productInfo.rating && `★ ${productInfo.rating}`) || 'unrated'}
            </Typography>

            <Button
              variant="contained"
              href={productInfo.product_link}
              className={clsx(
                gruppo.className,
                'mt-5  bg-main hover:bg-[#654548]',
              )}
            >
              Buy Now
            </Button>
          </Grid>
        </Grid>
        <Divider />

        <ProductColor
          productColors={productInfo.product_colors}
          type="detail"
        />
        <Divider />

        <Box>
          <div className={clsx(gruppo.className, 'm-2')}>
            <span className="font-bold text-lg">Description:</span> <br />{' '}
            {productInfo.description}
          </div>

          <div className={clsx(gruppo.className, 'm-2 mt-5')}>
            <span className="font-bold text-lg">Tags:</span> <br />{' '}
            {productInfo.tag_list &&
              productInfo.tag_list.map((tag) => (
                <li key={tag} className="mx-2">
                  {tag}
                </li>
              ))}
          </div>
        </Box>
      </Container>
    </main>
  );
}

export default ProductPage;
