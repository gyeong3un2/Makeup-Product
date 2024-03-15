'use client';

import { Box, Chip } from '@mui/material';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { IProductState, productStore } from '@/app/modules/store/productStore';
import { FilterChip } from '..';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * 레이아웃 > 필터링 컴포넌트
 */
function FilterChipsBox() {
  const router = useRouter();

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

  useEffect(() => {
    if (!selectProductType) {
      router.push('/');
    }
  }, [selectProductType, selectProductCategory, selectProductTag]);

  return (
    <Box className="min-h-10">
      {(selectProductType || selectProductCategory || selectProductTag) && (
        <Chip
          icon={<RestartAltIcon className=" fill-white" />}
          label="reset"
          onClick={handleFilterReset}
          className="text-white bg-main hover:bg-[#5b3e40] mx-1 mb-1 h-10"
        />
      )}
      {selectProductType && (
        <FilterChip
          labelType="Type"
          selectFilterName={selectProductType.replace('%20', ' ')}
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
