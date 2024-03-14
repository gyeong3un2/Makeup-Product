import { GetProductListResponse } from '@/app/types';
import { Gruppo } from 'next/font/google';
import { Box } from '@mui/material';
import clsx from 'clsx';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

interface IProductContentsProps {
  productInfo: GetProductListResponse | undefined;
}

/**
 * 상품 상세 페이지 > 상품 상세 정보 컴포넌트
 */
function ProductContents({ productInfo }: IProductContentsProps) {
  return (
    <Box>
      <div className={clsx(gruppo.className, 'm-2 w-')}>
        <span className="font-bold text-lg">Description:</span> <br />{' '}
        {productInfo?.description}
      </div>

      <div className={clsx(gruppo.className, 'm-2 mt-5')}>
        <span className="font-bold text-lg">Categorys:</span> <br />{' '}
        <li className="mx-2">{productInfo?.category}</li>
      </div>
      <div className={clsx(gruppo.className, 'm-2 mt-5')}>
        <span className="font-bold text-lg">Tags:</span> <br />{' '}
        {productInfo?.tag_list &&
          productInfo?.tag_list.map((tag: string) => (
            <li key={tag} className="mx-2">
              {tag}
            </li>
          ))}
      </div>
    </Box>
  );
}

export default ProductContents;
