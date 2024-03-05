import { Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { productType } from '@/src/data/dummy';

interface IGlobalNavigationBarProps {
  selectType: string;
  setSelectType: Dispatch<SetStateAction<string>>;
  onClick: () => void;
}

function GlobalNavigationBar({
  selectType,
  setSelectType,
  onClick,
}: IGlobalNavigationBarProps) {
  const handleSelectType = (name: string) => {
    setSelectType(name);
    onClick();
  };

  return (
    <Box className="w-full h-12 flex items-center justify-center">
      {productType.map((type) => (
        <Typography
          onClick={() => handleSelectType(type)}
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
