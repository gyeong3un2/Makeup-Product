import { useState } from 'react';
import { Box, Divider, Drawer, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PRODUCT_MENU } from '@/data/product';
import { SNBFilterList } from '@/components/ui';

import { productStore, IProductState } from '@/store/productStore';

const DRAWER_WIDTH = '21rem';

function SideNavigationBar() {
  const {
    selectProductCategory,
    selectProductTag,
    setSelectProductCategory,
    setSelectProductTag,
  } = productStore<IProductState>((state) => state);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false); // Drawer를 열고 닫기 위한 변수
  const [isClosing, setIsClosing] = useState<boolean>(false); // Drawer 트랜지션을 위한 변수, Drawer가 닫히는 중인지 여부를 확인하기 위한 변수

  // Drawer를 닫기 위한 함수
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  // Drawer가 닫히는 중인지 여부를 확인하기 위한 변수
  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  // Drawer를 열고 닫기 위한 함수
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  // 카테고리와 태그를 선택하기 위한 함수
  const handleSelectCategory = (name: string) => {
    setSelectProductCategory(name);
    handleDrawerClose();
  };
  const handleSelectTag = (name: string) => {
    setSelectProductTag(name);
    handleDrawerClose();
  };

  const drawer = (
    <div className="border rounded-lg mt-[2rem] p-[0.5rem]">
      <Box className="mb-[1.25rem]">
        <Typography className="p-[0.5rem] text-[0.9rem] text-gray-500">
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
        <Typography className="p-[0.5rem] text-[0.9rem] text-gray-500">
          By Tags
        </Typography>
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

  return (
    <Box>
      <Box
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className="absolute top-[1rem] left-[1rem] block xl2:hidden hover:cursor-pointer"
      >
        <MenuIcon />
      </Box>
      <Box component="nav" className={`w-sm-${DRAWER_WIDTH}`}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          className="block xl:hidden"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Box
          className="absolute hidden mt-[9rem] xl2:block xl2:-ml-[50rem] ease-in-out transition-all"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Box>
      </Box>
    </Box>
  );
}

export default SideNavigationBar;
