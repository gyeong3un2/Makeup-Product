import { Grid } from '@mui/material';
import { GetProductListResponse } from '@/app/types';
import clsx from 'clsx';

interface IProductInfoProps {
  productColors: GetProductListResponse['product_colors'] | undefined;
  type?: string;
}

/**
 * 메인 페이지 and 상품 상세 페이지 > 상품 색상 정보 컴포넌트
 */
function ProductColor({ productColors, type }: IProductInfoProps) {
  return (
    <Grid container spacing={0.7}>
      {productColors &&
        productColors.map((color, index) => (
          <Grid item key={index}>
            <div className={clsx(type === 'detail' && 'flex m-2')}>
              <div
                style={{ backgroundColor: `${color.hex_value}` }}
                className={`rounded-full w-5 h-5 m-0.7`}
              />
              {type === 'detail' ? (
                <span className="text-xs m-auto ml-2">{color.colour_name}</span>
              ) : null}
            </div>
          </Grid>
        ))}
    </Grid>
  );
}

export default ProductColor;
