import { Box, Chip } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IProductState, productStore } from '@/src/store/productStore';
import { FilterChip } from '@/src/components/ui';

function FilterChipsBox() {
  const {
    selectProductType,
    selectProductCategory,
    selectProductTag,
    removeSelectProductType,
    removeSelectProductCategory,
    removeSelectProductTag,
  } = productStore<IProductState>((state) => state);

  const handleFilterReset = () => {
    removeSelectProductType();
    removeSelectProductCategory();
    removeSelectProductTag();
  };

  return (
    <Box className="h-10 space-x-2">
      {(selectProductType || selectProductCategory || selectProductTag) && (
        <Chip
          icon={<RestartAltIcon className=" fill-white" />}
          label="reset"
          onClick={handleFilterReset}
          className="text-white bg-main hover:bg-[#5b3e40]"
        />
      )}
      {selectProductType && (
        <FilterChip
          labelType="Type"
          selectFilterName={selectProductType}
          onDeleteChip={removeSelectProductType}
        />
      )}
      {selectProductCategory && (
        <FilterChip
          labelType="Category"
          selectFilterName={selectProductCategory}
          onDeleteChip={removeSelectProductCategory}
        />
      )}
      {selectProductTag && (
        <FilterChip
          labelType="Tag"
          selectFilterName={selectProductTag}
          onDeleteChip={removeSelectProductTag}
        />
      )}
    </Box>
  );
}

export default FilterChipsBox;
