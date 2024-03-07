import clsx from 'clsx';
import { Typography } from '@mui/material';
import { Abel } from 'next/font/google';
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
        {product.category && 'Category:'} {product.category}
      </Typography>

      <Typography className={clsx(abel.className, 'my-1')}>
        {product.price_sign && product.price_sign} {product.price}
      </Typography>

      <Typography className={clsx(abel.className, 'my-1')}>
        {product.rating && '★'} {product.rating}
      </Typography>
    </>
  );
}

export default ProductInfo;
