import { Box, Divider, Typography } from '@mui/material';
import { PRODUCT_MENU } from '@/app/modules/constants';
import { IProductState, productStore } from '@/app/modules/store/productStore';
import SNBFilterList from './SNBFilterList';

interface IProductFilterContainerProps {
  onClose: () => void;
}

function SNBFilterContainer({ onClose }: IProductFilterContainerProps) {
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

        <SNBFilterList
          data={PRODUCT_MENU.category}
          selectFilter={selectProductCategory}
          onSelectFilter={handleSelectCategory}
        />
      </Box>

      <Box>
        <Typography className="p-2 text-xs text-gray-500">By Tags</Typography>
        <Divider />

        <SNBFilterList
          data={PRODUCT_MENU.tag}
          selectFilter={selectProductTag}
          onSelectFilter={handleSelectTag}
        />
      </Box>
    </div>
  );
}

export default SNBFilterContainer;
