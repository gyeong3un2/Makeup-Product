import { Box, Typography } from "@mui/material";
import { useState } from "react";

const productType = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'EyeShadow', 'Foundation', 'Lip liner', 'Lipstick', 'Mascara', 'Nail polish']

function GlobalNavigationBar() {
  const [selectType, setSelectType] = useState<string>('');

  const handleSelectType = (name: string) => {
    setSelectType(name);
  }

  return(
    <Box className="w-full h-12 flex items-center justify-center">
      {
        productType.map((type) => (
          <Typography onClick={() => handleSelectType(type)} className={`my-auto mx-5 ${selectType === type ? 'text-main underline underline-offset-8' : ''} hover:underline hover:underline-offset-8 hover:cursor-pointer hover:text-main transition-all ease-in-out`} key={type}>
            {type}
          </Typography>
        ))
      }
    </Box>
  )
}

export default GlobalNavigationBar;