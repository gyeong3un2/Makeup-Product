import { Chip } from '@mui/material';

interface IChipProps {
  labelType: string;
  selectFilterName: string;
  onDeleteChip: () => void;
}

/**
 * 레이아웃 > 필터링 컴포넌트 > 필터 컴포넌트
 */
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
