import { Skeleton } from '@mui/material';

/**
 * 메인 페이지 > 스켈레톤 UI 컴포넌트
 */
function SkeletonUI() {
  return (
    <div>
      <Skeleton
        variant="rectangular"
        width="13rem"
        height="15rem"
        className="m-auto my-3"
      />
      <Skeleton
        variant="rectangular"
        width="16rem"
        height="2rem"
        className="my-3"
      />
      <Skeleton
        variant="rectangular"
        width="10rem"
        height="2rem"
        className="my-2"
      />
      <Skeleton
        variant="rectangular"
        width="14rem"
        height="2rem"
        className="my-2"
      />
      <Skeleton
        variant="rectangular"
        width="6rem"
        height="2rem"
        className="my-2"
      />
    </div>
  );
}

export default SkeletonUI;
