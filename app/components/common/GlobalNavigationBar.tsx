'use client';

import { Box, Divider, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/app/modules/constants';
import { productStore, IProductState } from '@/app/modules/store/productStore';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

/**
 * 레이아웃 > 상단 네비게이션 바 컴포넌트
 */
function GlobalNavigationBar() {
  const router = useRouter();
  const { selectProductType, setSelectProductType } =
    productStore<IProductState>((state) => state);

  function handleTypeClick(type: string) {
    setSelectProductType(type);
    router.push(`/${type}/`);
  }

  return (
    <>
      <Divider className="border-gray-300 mt-10 mb-2" />

      <Box className="w-full min-h-10 flex flex-wrap items-center justify-center ease-in-out transition-all">
        {PRODUCT_MENU.productType.map((type) => (
          <Typography
            onClick={() => handleTypeClick(type)}
            className={clsx(
              'my-auto mx-4 text-4 textHover',
              selectProductType === type && 'selectFilter',
            )}
            key={type}
          >
            {type.replace('%20', ' ')}
          </Typography>
        ))}
      </Box>

      <Divider className="border-gray-300 mt-2 mb-4" />
    </>
  );
}

export default GlobalNavigationBar;
