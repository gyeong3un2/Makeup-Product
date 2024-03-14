import clsx from 'clsx';
import { abel } from '@/app/modules/constants';
import { Typography } from '@mui/material';
import { GetProductListResponse } from '@/app/modules/types';

interface IProductInfoProps {
  product: GetProductListResponse;
}

/**
 * 메인 페이지 > 상품 리스트 > 상품 상세 정보 컴포넌트
 */
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
