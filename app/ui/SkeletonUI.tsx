import { Skeleton } from '@mui/material';

/**
 * 메인 페이지 > 스켈레톤 UI 컴포넌트
 */
function SkeletonUI() {
  return (
    <div className="h-96">
      <Skeleton
        variant="rectangular"
        width={144}
        height={216}
        className="m-auto my-3"
      />
      <Skeleton
        variant="rectangular"
        width={250}
        height={32}
        className="my-3"
      />
      <Skeleton
        variant="rectangular"
        width={120}
        height={24}
        className="my-2"
      />
      <Skeleton
        variant="rectangular"
        width={150}
        height={24}
        className="my-2"
      />
      <Skeleton
        variant="rectangular"
        width={100}
        height={24}
        className="my-2"
      />
    </div>
  );
}

export default SkeletonUI;
