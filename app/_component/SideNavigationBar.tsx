import { Dispatch, SetStateAction, useState } from 'react';
import {
  Box,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import { PRODUCT_MENU } from '@/src/data/dummy';
import FilterListName from '../components/FilterList';

import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 240;

interface ISideNavigationBarProps {
  selectTag: string;
  selectCategory: string;
  setSelectTag: Dispatch<SetStateAction<string>>;
  setSelectCategory: Dispatch<SetStateAction<string>>;
}

function SideNavigationBar({
  selectTag,
  selectCategory,
  setSelectTag,
  setSelectCategory,
}: ISideNavigationBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

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
    handleDrawerClose();
    setSelectCategory(name);
  };
  const handleSelectTag = (name: string) => {
    handleDrawerClose();
    setSelectTag(name);
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
            selectCategory={selectCategory}
            onSelectFilter={handleSelectCategory}
          />
          <FilterListName
            data={PRODUCT_MENU.categoryRight}
            selectCategory={selectCategory}
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
            selectCategory={selectTag}
            onSelectFilter={handleSelectTag}
          />
          <FilterListName
            data={PRODUCT_MENU.tagRight}
            selectCategory={selectTag}
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
