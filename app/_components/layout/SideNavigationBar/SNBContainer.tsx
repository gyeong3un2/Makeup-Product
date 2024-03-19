import { Box, Divider, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/app/_modules/constants';
import { IProductState, productStore } from '@/app/_modules/store/productStore';
import SNBList from './SNBList';

interface ISNBContainerProps {
  onClose: () => void;
}

function SNBContainer({ onClose }: ISNBContainerProps) {
  const {
    selectProductCategory,
    selectProductTag,
    setSelectProductCategory,
    setSelectProductTag,
  } = productStore<IProductState>((state) => state);

  const handleSelectCategory = (name: string) => {
    setSelectProductCategory(name);
    onClose();
  };
  const handleSelectTag = (name: string) => {
    setSelectProductTag(name);
    onClose();
  };

  return (
    <div className="border rounded-lg -mt-2 p-2">
      <Box className="mb-5">
        <Typography className="p-2 text-xs text-gray-500">
          By Categorys
        </Typography>
        <Divider />

        <SNBList
          data={PRODUCT_MENU.CATEGORY}
          selectFilter={selectProductCategory}
          onSelectFilter={handleSelectCategory}
        />
      </Box>

      <Box>
        <Typography className="p-2 text-xs text-gray-500">By Tags</Typography>
        <Divider />

        <SNBList
          data={PRODUCT_MENU.TAG}
          selectFilter={selectProductTag}
          onSelectFilter={handleSelectTag}
        />
      </Box>
    </div>
  );
}

export default SNBContainer;
