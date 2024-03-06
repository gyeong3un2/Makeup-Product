import { Box, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/src/data/dummy';

interface IGlobalNavigationBarProps {
  selectType: string;
  onSelectType: (name: string) => void;
}

function GlobalNavigationBar({
  selectType,
  onSelectType,
}: IGlobalNavigationBarProps) {
  return (
    <Box className="w-full h-12 flex items-center justify-center">
      {PRODUCT_MENU.productType.map((type) => (
        <Typography
          onClick={() => onSelectType(type)}
          className={`my-auto mx-5 ${
            selectType === type ? 'text-main underline underline-offset-8' : ''
          } hover:underline hover:underline-offset-8 hover:cursor-pointer hover:text-main transition-all ease-in-out`}
          key={type}
        >
          {type}
        </Typography>
      ))}
    </Box>
  );
}

export default GlobalNavigationBar;
