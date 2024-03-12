import { GetProductListResponse } from '@/types';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { Gruppo } from 'next/font/google';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

interface IProductContentsProps {
  productInfo: GetProductListResponse;
}

function ProductOverview({ productInfo }: IProductContentsProps) {
  return (
    <>
      <Typography className={clsx(gruppo.className, 'text-3xl mb-5')}>
        {productInfo?.name}
      </Typography>
      <Typography className={clsx(gruppo.className, 'text-xl')}>
        Brand: {productInfo?.brand}
      </Typography>
      <Typography className={clsx(gruppo.className, 'text-xl')}>
        Price: {productInfo?.price_sign}
        {productInfo?.price}
      </Typography>
      <Typography className={clsx(gruppo.className, 'text-xl')}>
        Star rating:{' '}
        {(productInfo?.rating && `★ ${productInfo?.rating}`) || 'unrated'}
      </Typography>

      <Button
        variant="contained"
        onClick={() => window.open(productInfo?.product_link)}
        className={clsx(gruppo.className, 'mt-5  bg-main hover:bg-[#654548]')}
      >
        Buy Now
      </Button>
    </>
  );
}

export default ProductOverview;
