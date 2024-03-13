import { Chip } from '@mui/material';

interface IChipProps {
  labelType: string;
  selectFilterName: string;
  onDeleteChip: () => void;
}

function FilterChip({ labelType, selectFilterName, onDeleteChip }: IChipProps) {
  return (
    <Chip
      label={`${labelType}: ${selectFilterName}`}
      variant="outlined"
      onDelete={onDeleteChip}
      className="text-main border-main mx-1 mb-1 h-10"
    />
  );
}

export default FilterChip;
