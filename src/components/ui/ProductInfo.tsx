import { Typography } from '@mui/material';
import { Abel } from 'next/font/google';
import clsx from 'clsx';
import { GetProductListResponse } from '@/src/types';

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
      <Typography variant="h6" className={abel.className}>
        {product.name}
      </Typography>

      <Typography className={clsx(abel.className, 'my-3')} gutterBottom>
        {product.brand}
      </Typography>

      <Typography className={clsx(abel.className, 'mt-3')}>
        Category: {product.category}
      </Typography>

      <Typography className={clsx(abel.className, 'my-1')}>
        {product.price_sign} {product.price}
      </Typography>
    </>
  );
}

export default ProductInfo;
