import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

function FloatingUpButton() {
  return (
    <Fab
      className="fixed right-[2rem] bottom-[2rem] bg-main text-white hover:bg-[#654548]"
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
    >
      <UpIcon />
    </Fab>
  );
}

export default FloatingUpButton;
