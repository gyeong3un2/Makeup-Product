import { useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
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
            selectCategory={selectProductCategory}
            onSelectFilter={handleSelectCategory}
          />
          <SNBFilterList
            data={PRODUCT_MENU.categoryRight}
            selectCategory={selectProductCategory}
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
            selectCategory={selectProductTag}
            onSelectFilter={handleSelectTag}
          />
          <SNBFilterList
            data={PRODUCT_MENU.tagRight}
            selectCategory={selectProductTag}
            onSelectFilter={handleSelectTag}
          />
        </Grid>
      </Box>
    </div>
  );

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className="absolute left-0 block xl3:hidden"
      >
        <MenuIcon />
      </IconButton>
      <Box component="nav" className={`w-sm-${DRAWER_WIDTH}`}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xl: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Box
          className="absolute hidden xl2:block xl2:-ml-[50rem] ease-in-out transition-all"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          <Box className="h-[9rem]" />
          {drawer}
        </Box>
      </Box>
    </Box>
  );
}

export default SideNavigationBar;
