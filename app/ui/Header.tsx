'use client';

import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import clsx from 'clsx';
import { Gruppo } from 'next/font/google';
import { useRouter, usePathname } from 'next/navigation';
import { IProductState, productStore } from '../store/productStore';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { selectProductId, setSelectProductId } = productStore<IProductState>(
    (state) => state,
  );

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
