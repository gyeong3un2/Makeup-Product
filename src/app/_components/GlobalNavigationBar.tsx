import { Box, Divider, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/src/data/product';
import { productStore, IProductState } from '@/src/store/productStore';

function GlobalNavigationBar() {
  const { selectProductType, setSelectProductType } =
    productStore<IProductState>((state) => state);

  return (
    <>
      <Box className="w-full h-12 flex items-center justify-center">
        {PRODUCT_MENU.productType.map((type) => (
          <Typography
            onClick={() => setSelectProductType(type)}
            className={`my-auto mx-5 ${
              selectProductType === type
                ? 'text-main underline underline-offset-8'
                : ''
            } hover:underline hover:underline-offset-8 hover:cursor-pointer hover:text-main transition-all ease-in-out`}
            key={type}
          >
            {type}
          </Typography>
        ))}
      </Box>

      <Divider className="border-gray-400 mb-3" />
    </>
  );
}

export default GlobalNavigationBar;
