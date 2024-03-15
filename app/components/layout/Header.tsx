'use client';

import clsx from 'clsx';
import { Box, Typography } from '@mui/material';
import { gruppo } from '@/app/modules/constants';

/**
 * 레이아웃 > 헤더 컴포넌트
 */
function Header() {
  return (
    <>
      <Box className="text-center p-12">
        <Typography
          className={clsx(
            gruppo.className,
            'text-3xl ease-in-out transition-all',
          )}
        >
          Listing Products
        </Typography>
      </Box>
    </>
  );
}

export default Header;
