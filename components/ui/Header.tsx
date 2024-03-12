'use client';

import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import clsx from 'clsx';
import { Gruppo } from 'next/font/google';
import { useRouter, usePathname } from 'next/navigation';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Box className="text-center p-12">
        {pathname !== '/' && (
          <div
            className="hover:cursor-pointer w-fit ml-52"
            onClick={router.back}
          >
            <ArrowBackIcon />
          </div>
        )}

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
