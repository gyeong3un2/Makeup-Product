import { Grid, ListItem, Typography } from '@mui/material';

interface FilterListProps {
  data: string[];
  selectCategory: string;
  onSelectFilter: (name: string) => void;
}

function SideFilterList({
  data,
  selectCategory,
  onSelectFilter,
}: FilterListProps) {
  return (
    <Grid item xs={6}>
      {data.map((name: string) => (
        <ListItem key={name} className="w-32">
          <Typography
            onClick={() => onSelectFilter(name)}
            className={`text-sm ${
              selectCategory === name
                ? 'text-main underline underline-offset-4'
                : ''
            } hover:underline hover:underline-offset-4 hover:cursor-pointer hover:text-main transition-all ease-in-out`}
          >
            {name}
          </Typography>
        </ListItem>
      ))}
    </Grid>
  );
}

export default SideFilterList;
