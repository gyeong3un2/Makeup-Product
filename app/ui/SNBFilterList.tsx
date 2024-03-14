import { Grid, ListItem, Typography } from '@mui/material';
import clsx from 'clsx';

interface FilterListProps {
  data: string[];
  selectFilter: string;
  onSelectFilter: (name: string) => void;
}

/**
 * 사이드 네비게이션 바 > 필터 리스트 컴포넌트
 */
function SNBFilterList({
  data,
  selectFilter,
  onSelectFilter,
}: FilterListProps) {
  return (
    <Grid item xs={6}>
      {data.map((name: string) => (
        <ListItem key={name} className="w-52">
          <Typography
            onClick={() => onSelectFilter(name)}
            className={clsx(
              'text-4 textHover',
              selectFilter === name && 'selectFilter',
            )}
          >
            {name}
          </Typography>
        </ListItem>
      ))}
    </Grid>
  );
}

export default SNBFilterList;
