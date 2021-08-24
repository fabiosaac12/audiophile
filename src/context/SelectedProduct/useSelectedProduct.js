import { useContext } from 'react';
import { SelectedProductContext } from './SelectedProductContext';

export const useSelectedProduct = () => useContext(SelectedProductContext);
