import { Box, Divider, Grid, Typography } from '@mui/material';
import SNBFilterList from './SNBFilterList';
import { PRODUCT_MENU } from '@/app/modules/constants';
import { IProductState, productStore } from '@/app/modules/store/productStore';

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

        <Grid container className="flex-col">
          <SNBFilterList
            data={PRODUCT_MENU.categoryLeft}
            selectFilter={selectProductCategory}
            onSelectFilter={handleSelectCategory}
          />
          <SNBFilterList
            data={PRODUCT_MENU.categoryRight}
            selectFilter={selectProductCategory}
            onSelectFilter={handleSelectCategory}
          />
        </Grid>
      </Box>

      <Box>
        <Typography className="p-2 text-xs text-gray-500">By Tags</Typography>
        <Divider />

        <Grid container className="flex-col">
          <SNBFilterList
            data={PRODUCT_MENU.tagLeft}
            selectFilter={selectProductTag}
            onSelectFilter={handleSelectTag}
          />
          <SNBFilterList
            data={PRODUCT_MENU.tagRight}
            selectFilter={selectProductTag}
            onSelectFilter={handleSelectTag}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default SNBFilterContainer;
