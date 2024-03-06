import { Typography } from '@mui/material';
import { cardDetailInfo } from '@/src/data/dummy';

function ProductInfo() {
  return (
    <>
      <Typography className="my-4" gutterBottom>
        {cardDetailInfo.brand}
      </Typography>

      <Typography className="my-3">{cardDetailInfo.name}</Typography>

      <Typography className="mt-3">
        Category: {cardDetailInfo.category}
      </Typography>

      <Typography className="mt-1">$ {cardDetailInfo.price}</Typography>
    </>
  );
}

export default ProductInfo;
