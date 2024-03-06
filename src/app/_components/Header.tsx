import { Box, Typography } from '@mui/material';
import { Gruppo } from 'next/font/google';

const gruppo = Gruppo({
  subsets: ['latin'],
  weight: '400',
});

function Header() {
  return (
    <Box className="text-center p-12">
      <Typography variant="h3" className={gruppo.className}>
        Listing Products
      </Typography>
    </Box>
  );
}

export default Header;
