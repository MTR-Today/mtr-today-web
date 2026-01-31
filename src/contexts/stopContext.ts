import type { StopCode } from 'mtr-kit';
import { createContext } from 'react';

export const stopContext = createContext<{
  stop: StopCode;
  isSelected: boolean;
}>({
  stop: '' as StopCode,
  isSelected: false,
});
