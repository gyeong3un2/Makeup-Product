'use client';

import { useRouter } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * 뒤로가기 버튼
 */
function BackIconButton() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex hover:cursor-pointer w-fit m-3 text-[#404040] underline underline-offset-4"
    >
      <ArrowBackIcon />
      <span className="mx-2">Back</span>
    </div>
  );
}

export default BackIconButton;
