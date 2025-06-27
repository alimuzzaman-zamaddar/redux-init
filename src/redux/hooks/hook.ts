// redux/hooks/hooks.ts
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';


// Custom hook to use dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook to use selector with any state type
export const useAppSelector = <T>(selector: (state: RootState) => T): T => {
  return useSelector(selector);
};
