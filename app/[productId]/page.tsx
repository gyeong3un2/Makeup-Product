'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { product } from '@/data/product';
import Image from 'next/image';
import { Gruppo } from 'next/font/google';
import clsx from 'clsx';
import { ProductColor } from '@/components/ui';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function ProductPage({
  params: { productId },
}: {
  params: { productId: number };
}) {
  // const { id: productId } = useParams();

  useEffect(() => {
    console.log('productId:', productId);
  }, [productId]);

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
              src={`http:${product.api_featured_image}`}
              alt={product.name}
              width={32}
              height={32}
            />
          </Grid>

          <Grid item xs={12} sm={7} md={7}>
            <Typography className={clsx(gruppo.className, 'text-3xl mb-5')}>
              {product.name}
            </Typography>
            <Typography className={clsx(gruppo.className, 'text-xl')}>
              Brand: {product.brand}
            </Typography>
            <Typography className={clsx(gruppo.className, 'text-xl')}>
              Price: {product.price_sign}
              {product.price}
            </Typography>
            <Typography className={clsx(gruppo.className, 'text-xl')}>
              Star rating:{' '}
              {(product.rating && `★ ${product.rating}`) || 'unrated'}
            </Typography>

            <Button
              variant="contained"
              href={product.product_link}
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

        <ProductColor productColors={product.product_colors} type="detail" />
        <Divider />

        <Box>
          <div className={clsx(gruppo.className, 'm-2')}>
            <span className="font-bold text-lg">Description:</span> <br />{' '}
            {product.description}
          </div>

          <div className={clsx(gruppo.className, 'm-2 mt-5')}>
            <span className="font-bold text-lg">Tags:</span> <br />{' '}
            {product.tag_list.map((tag) => (
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
