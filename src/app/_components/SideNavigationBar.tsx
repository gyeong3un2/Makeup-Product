import { useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { PRODUCT_MENU } from '@/src/data/product';
import FilterListName from '../../components/ui/FilterList';

import MenuIcon from '@mui/icons-material/Menu';
import { productStore, IProductState } from '@/src/store/productStore';

const DRAWER_WIDTH = 240;

interface ISideNavigationBarProps {
  refetch: () => void;
}

function SideNavigationBar({ refetch }: ISideNavigationBarProps) {
  const {
    selectProductCategory,
    selectProductTag,
    setSelectProductCategory,
    setSelectProductTag,
  } = productStore<IProductState>((state) => state);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

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

  const handleSelectCategory = (name: typeof selectProductCategory) => {
    refetch();
    handleDrawerClose();
    setSelectProductCategory(name);
  };
  const handleSelectTag = (name: typeof selectProductTag) => {
    refetch();
    handleDrawerClose();
    setSelectProductTag(name);
  };

  const drawer = (
    <div className="border rounded-lg mt-12 p-2">
      <Box className="mb-5">
        <Typography className="p-2 text-xs text-gray-500">
          By Categorys
        </Typography>
        <Divider />

        <Grid container>
          <FilterListName
            data={PRODUCT_MENU.categoryLeft}
            selectCategory={selectProductCategory}
            onSelectFilter={handleSelectCategory}
          />
          <FilterListName
            data={PRODUCT_MENU.categoryRight}
            selectCategory={selectProductCategory}
            onSelectFilter={handleSelectCategory}
          />
        </Grid>
      </Box>

      <Box>
        <Typography className="p-2 text-xs text-gray-500">By Tags</Typography>
        <Divider />

        <Grid container>
          <FilterListName
            data={PRODUCT_MENU.tagLeft}
            selectCategory={selectProductTag}
            onSelectFilter={handleSelectTag}
          />
          <FilterListName
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
        className="absolute left-0"
        sx={{ display: { xl: 'none' } }}
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
          className="absolute -ml-[52.5rem]"
          sx={{
            display: { lg: 'none', xl: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          <Box className="h-36" />
          {drawer}
        </Box>
      </Box>
    </Box>
  );
}

export default SideNavigationBar;
