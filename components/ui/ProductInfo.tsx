import clsx from 'clsx';
import { Abel } from 'next/font/google';
import { Typography } from '@mui/material';
import { GetProductListResponse } from '@/types';

const abel = Abel({
  subsets: ['latin'],
  weight: '400',
});

interface IProductInfoProps {
  product: GetProductListResponse;
}

function ProductInfo({ product }: IProductInfoProps) {
  return (
    <>
      <Typography className={clsx(abel.className, 'text-xl')}>
        {product?.name}
      </Typography>

      <Typography className={clsx(abel.className, 'text-lg my-3')} gutterBottom>
        {product?.brand}
      </Typography>

      <Typography className={clsx(abel.className, 'text-base mt-3')}>
        {product?.category && 'Category:'} {product?.category}
      </Typography>

      <Typography className={clsx(abel.className, 'text-base my-1')}>
        {product?.price_sign} {product?.price}
      </Typography>

      <Typography className={clsx(abel.className, 'text-base my-1')}>
        {product?.rating && '★'} {product?.rating}
      </Typography>
    </>
  );
}

export default ProductInfo;
