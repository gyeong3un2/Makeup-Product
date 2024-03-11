import { useState } from 'react';
import { Box, Divider, Drawer, Grid, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { PRODUCT_MENU } from '@/data/product';
import { SNBFilterList } from '@/components/ui';
import { productStore, IProductState } from '@/store/productStore';

const DRAWER_WIDTH = '80';

function SideNavigationBar() {
  const {
    selectProductCategory,
    selectProductTag,
    setSelectProductCategory,
    setSelectProductTag,
  } = productStore<IProductState>((state) => state);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false); // Drawer 트랜지션을 위한 변수, Drawer가 닫히는 중인지 여부를 확인하기 위한 변수

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSelectCategory = (name: string) => {
    setSelectProductCategory(name);
    handleDrawerClose();
  };
  const handleSelectTag = (name: string) => {
    setSelectProductTag(name);
    handleDrawerClose();
  };

  const drawer = (
    <div className="border rounded-lg mt-8 p-2">
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

  return (
    <Box>
      <Box
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className="absolute top-4 left-4 block xl2:hidden hover:cursor-pointer"
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
          className="absolute hidden mt-36 xl2:block xl2:-ml-50 ease-in-out transition-all"
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
