import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import { Gruppo } from 'next/font/google';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  return (
    <Box className="text-center p-[3rem]">
      <Typography className={clsx(gruppo.className, 'text-[3rem]')}>
        Listing Products
      </Typography>
    </Box>
  );
}

export default Header;
