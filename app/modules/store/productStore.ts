import { create } from 'zustand';

export interface IProductState {
  selectProductId: number;
  setSelectProductId: (selectProductId: number) => void;

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
  selectProductId: 0,
  setSelectProductId: (selectProductId: number) => set({ selectProductId }),

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
