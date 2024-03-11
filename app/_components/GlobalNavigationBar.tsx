import { Box, Divider, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/data/product';
import { productStore, IProductState } from '@/store/productStore';
import clsx from 'clsx';

function GlobalNavigationBar() {
  const { selectProductType, setSelectProductType } =
    productStore<IProductState>((state) => state);

  return (
    <>
      <Divider className="border-gray-300 mt-10 mb-2" />

      <Box className="w-full min-h-10 flex flex-wrap items-center justify-center ease-in-out transition-all">
        {PRODUCT_MENU.productType.map((type) => (
          <Typography
            onClick={() => setSelectProductType(type)}
            className={clsx(
              'my-auto mx-4 text-4 textHover',
              selectProductType === type && 'selectFilter',
            )}
            key={type}
          >
            {type}
          </Typography>
        ))}
      </Box>

      <Divider className="border-gray-300 mt-2 mb-4" />
    </>
  );
}

export default GlobalNavigationBar;
