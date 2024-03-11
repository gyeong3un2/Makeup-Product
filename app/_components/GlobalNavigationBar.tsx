import { Box, Divider, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/data/product';
import { productStore, IProductState } from '@/store/productStore';

function GlobalNavigationBar() {
  const { selectProductType, setSelectProductType } =
    productStore<IProductState>((state) => state);

  return (
    <>
      <Divider className="border-gray-300 mt-6 mb-[0.5rem]" />

      <Box className="w-full min-h-[2.5rem] flex flex-wrap items-center justify-center ease-in-out transition-all">
        {PRODUCT_MENU.productType.map((type) => (
          <Typography
            onClick={() => setSelectProductType(type)}
            className={`my-auto mx-[1rem] text-[1rem] ${
              selectProductType === type
                ? 'text-main underline underline-offset-[0.4rem]'
                : ''
            } hover:underline hover:underline-offset-[0.4rem] hover:cursor-pointer hover:text-main transition-all ease-in-out`}
            key={type}
          >
            {type}
          </Typography>
        ))}
      </Box>

      <Divider className="border-gray-300 mt-[0.5rem] mb-[1rem]" />
    </>
  );
}

export default GlobalNavigationBar;
