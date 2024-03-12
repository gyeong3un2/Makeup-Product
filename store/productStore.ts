import { create } from 'zustand';
import { GetProductListResponse } from '@/types';
import { persist } from 'zustand/middleware';

export interface IProductState {
  selectProductType: string;
  setSelectProductType: (selectProductType: string) => void;
  removeSelectProductType: () => void;

  selectProductCategory: string;
  setSelectProductCategory: (selectProductCategory: string) => void;
  removeSelectProductCategory: () => void;

  selectProductTag: string;
  setSelectProductTag: (selectProductTag: string) => void;
  removeSelectProductTag: () => void;
}

export const productStore = create<IProductState>((set) => ({
  selectProductType: '',
  setSelectProductType: (selectProductType: string) =>
    set({ selectProductType }),
  removeSelectProductType: () => set({ selectProductType: '' }),

  selectProductCategory: '',
  setSelectProductCategory: (selectProductCategory: string) =>
    set({ selectProductCategory }),
  removeSelectProductCategory: () => set({ selectProductCategory: '' }),

  selectProductTag: '',
  setSelectProductTag: (selectProductTag: string) => set({ selectProductTag }),
  removeSelectProductTag: () => set({ selectProductTag: '' }),
}));
