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
      <Typography className={clsx(abel.className, 'text-[1.35rem]')}>
        {product.name}
      </Typography>

      <Typography
        className={clsx(abel.className, 'text-[1.2rem] my-[0.75rem]')}
        gutterBottom
      >
        {product.brand}
      </Typography>

      <Typography
        className={clsx(abel.className, 'text-[1.1rem] mt-[0.75rem]')}
      >
        {product.category && 'Category:'} {product.category}
      </Typography>

      <Typography
        className={clsx(abel.className, 'text-[1.1rem] my-[0.25rem]')}
      >
        {product.price_sign && product.price_sign} {product.price}
      </Typography>

      <Typography
        className={clsx(abel.className, 'text-[1.1rem] my-[0.25rem]')}
      >
        {product.rating && '★'} {product.rating}
      </Typography>
    </>
  );
}

export default ProductInfo;
