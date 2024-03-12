import { Grid } from '@mui/material';
import { GetProductListResponse } from '@/types';
import clsx from 'clsx';
import { Gruppo } from 'next/font/google';

interface IProductInfoProps {
  productColors: GetProductListResponse['product_colors'];
  type?: string;
}

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function ProductColor({ productColors, type }: IProductInfoProps) {
  return (
    <Grid container spacing={0.7}>
      {productColors.map((color, index) => (
        <Grid item key={index}>
          <div className={clsx(type === 'detail' && 'flex m-2')}>
            <div
              style={{ backgroundColor: `${color.hex_value}` }}
              className={`rounded-full w-5 h-5 m-0.7`}
            />
            {type === 'detail' ? (
              <span className={clsx(gruppo.className, 'text-sm m-auto ml-2')}>
                {color.colour_name}
              </span>
            ) : null}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductColor;
