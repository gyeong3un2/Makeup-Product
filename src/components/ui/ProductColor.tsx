import { Grid } from '@mui/material';
import { GetProductListResponse } from '@/src/types';

interface IProductInfoProps {
  productColors: GetProductListResponse['product_colors'];
}

function ProductColor({ productColors }: IProductInfoProps) {
  return (
    <Grid container spacing={0.7}>
      {productColors.map((color, index) => (
        <Grid item key={index}>
          <div
            style={{ backgroundColor: `${color.hex_value}` }}
            className={`rounded-full w-5 h-5 m-0.7`}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductColor;
