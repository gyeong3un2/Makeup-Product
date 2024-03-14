import { GetProductListResponse } from '@/app/types';
import { Button, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import clsx from 'clsx';
import { Gruppo } from 'next/font/google';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

interface IProductContentsProps {
  productInfo: GetProductListResponse | undefined;
}

/**
 * 상품 상세 페이지 > 상품 개요 컴포넌트
 */
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
        className={clsx(
          gruppo.className,
          'mt-5  bg-[#bb9da0] hover:bg-[#9b8184]',
        )}
      >
        <ShoppingCartIcon className="h-5 mr-3" />
        Buy Now
      </Button>
    </>
  );
}

export default ProductOverview;
