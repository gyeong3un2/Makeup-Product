import { Typography } from '@mui/material';
import { cardDetailInfo } from '@/src/data/dummy';
import { Abel } from 'next/font/google';
import clsx from 'clsx';

const abel = Abel({
  subsets: ['latin'],
  weight: '400',
});

function ProductInfo() {
  return (
    <>
      <Typography className={clsx(abel.className, 'my-3')} gutterBottom>
        {cardDetailInfo.brand}
      </Typography>

      <Typography variant="h6" className={abel.className}>
        {cardDetailInfo.name}
      </Typography>

      <Typography className={clsx(abel.className, 'mt-3')}>
        Category: {cardDetailInfo.category}
      </Typography>

      <Typography className={clsx(abel.className, 'my-1')}>
        $ {cardDetailInfo.price}
      </Typography>
    </>
  );
}

export default ProductInfo;
