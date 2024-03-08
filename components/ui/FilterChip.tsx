import { Chip } from '@mui/material';

interface IChipProps {
  labelType: string;
  selectFilterName: string;
  onDeleteChip: (name: string) => void;
}

function FilterChip({ labelType, selectFilterName, onDeleteChip }: IChipProps) {
  return (
    <Chip
      label={`${labelType}: ${selectFilterName}`}
      variant="outlined"
      onDelete={onDeleteChip}
      className="text-main border-main mx-[0.25rem] mb-[0.25rem] h-[2.5rem]"
    />
  );
}

export default FilterChip;
