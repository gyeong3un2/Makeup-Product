import { Box, Grid } from '@mui/material';
import { cardDetailInfo } from '@/src/data/dummy';

function ProductColor() {
  return (
    <Grid container spacing={0.7}>
      {cardDetailInfo.product_colors.map((color) => (
        <Grid item key={color.colour_name}>
          <Box
            className={`rounded-full w-5 h-5 m-0.7 bg-[${color.hex_value}]`}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductColor;
