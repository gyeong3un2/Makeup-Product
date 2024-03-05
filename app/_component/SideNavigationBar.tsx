import { useState } from 'react';
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { categorys, tags } from '@/src/data/dummy';

import MenuIcon from '@mui/icons-material/Menu';

const DRAWER_WIDTH = 240;

function SideNavigationBar() {
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

  const handleSelectFilter = () => {
    handleDrawerClose();
  }

  const drawer = (
    <div>
      <Box className='h-36'/>
      <Typography className='p-2 text-sm text-gray-500'>
        By Categorys
      </Typography>
      <Divider />
      <List>
        {categorys.map((category) => (
          <ListItem key={category}>
            <ListItemText primary={category} onClick={handleSelectFilter} className='hover:underline hover:underline-offset-8 hover:cursor-pointer hover:text-main transition-all ease-in-out'/>
          </ListItem>
        ))}
      </List>
      <Typography className='p-2 text-sm text-gray-500'>
        By Tags
      </Typography>
      <Divider />
      <List>
        {tags.map((tag) => (
          <ListItem key={tag}>
            <ListItemText primary={tag} onClick={handleSelectFilter} className='hover:underline hover:underline-offset-8 hover:cursor-pointer hover:text-main transition-all ease-in-out'/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className='absolute left-0'
      >
        <MenuIcon />
      </IconButton>
      <Box
        component="nav"
        className={`w-sm-${DRAWER_WIDTH}`}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs:'block', sm: 'block', md: 'block', lg: 'block', xl: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs:'none', sm: 'none', md: 'none', lg: 'none', xl: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default SideNavigationBar;