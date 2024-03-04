import { Box, Typography } from "@mui/material";

const productType = ['Blush', 'Bronzer', 'Eyebrow', 'Eyeliner', 'EyeShadow', 'Foundation', 'Lip liner', 'Lipstick', 'Mascara', 'Nail polish']

function GlobalNavigation() {
  return(
    <Box className="w-full h-12 flex items-center justify-center">
      {
        productType.map((type) => (
          <Typography className="my-auto mx-5 hover:underline hover:underline-offset-8 hover:cursor-pointer hover:text-main transition-all ease-in-out" key={type}>
            {type}
          </Typography>
        ))
      }
    </Box>
  )
}

export default GlobalNavigation;