'use client';

import { useState } from 'react';
import { Box, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SNBFilterContainer from './SNBFilterContainer';

const DRAWER_WIDTH = '80';

/**
 * 레이아웃 > 사이드 네비게이션 바 컴포넌트
 */
function SideNavigationBar() {
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

  return (
    <Box>
      {/* 작은 화면에서만 보이는 Drawer를 열기 위한 버튼 */}
      <Box
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className="absolute top-4 left-4 block xl2:hidden hover:cursor-pointer"
      >
        <MenuIcon />
      </Box>

      {/* 작은 화면에서만 보이는 Drawer */}
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
          <SNBFilterContainer onClose={handleDrawerClose} />
        </Drawer>

        {/* 큰 화면에서만 보이는 Box */}
        <Box
          className="absolute hidden mt-2 xl2:block xl2:-ml-50 ease-in-out transition-all"
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
            },
          }}
        >
          <SNBFilterContainer onClose={handleDrawerClose} />
        </Box>
      </Box>
    </Box>
  );
}

export default SideNavigationBar;
