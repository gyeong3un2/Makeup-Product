'use client';

import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

/**
 * 레이아웃 > 상단으로 이동 버튼 컴포넌트
 */
function FloatingUpButton() {
  return (
    <Fab
      className="fixed right-8 bottom-8 w-16 h-16 bg-main text-white hover:bg-[#654548]"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <UpIcon />
    </Fab>
  );
}

export default FloatingUpButton;
