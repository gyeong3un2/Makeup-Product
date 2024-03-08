import { Skeleton } from '@mui/material';

function SkeletonUI() {
  return (
    <div className="h-[24rem]">
      <Skeleton
        variant="rectangular"
        width={144}
        height={216}
        className="m-auto my-[0.75rem]"
      />
      <Skeleton
        variant="rectangular"
        width={250}
        height={32}
        className="my-[0.75rem]"
      />
      <Skeleton
        variant="rectangular"
        width={120}
        height={24}
        className="my-[0.5rem]"
      />
      <Skeleton
        variant="rectangular"
        width={150}
        height={24}
        className="my-[0.5rem]"
      />
      <Skeleton
        variant="rectangular"
        width={100}
        height={24}
        className="my-[0.5rem]"
      />
    </div>
  );
}

export default SkeletonUI;
