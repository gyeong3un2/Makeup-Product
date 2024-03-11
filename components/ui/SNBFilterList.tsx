import { Grid, ListItem, Typography } from '@mui/material';

interface FilterListProps {
  data: string[];
  selectCategory: string;
  onSelectFilter: (name: string) => void;
}

function SNBFilterList({
  data,
  selectCategory,
  onSelectFilter,
}: FilterListProps) {
  return (
    <Grid item xs={6}>
      {data.map((name: string) => (
        <ListItem key={name} className="w-[13rem]">
          <Typography
            onClick={() => onSelectFilter(name)}
            className={`text-[1rem] ${
              selectCategory === name
                ? 'text-main underline underline-offset-[0.4rem]'
                : ''
            } textHover`}
          >
            {name}
          </Typography>
        </ListItem>
      ))}
    </Grid>
  );
}

export default SNBFilterList;
