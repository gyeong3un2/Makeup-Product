import { create } from 'zustand';

export interface IProductTypeState {
  selectProductType: string;
  setSelectProductType: (productType: string) => void;
  removeSelectProductType: () => void;
}

export const productTypeStore = create<IProductTypeState>((set) => ({
  selectProductType: '',
  setSelectProductType: (selectProductType: string) =>
    set({ selectProductType }),
  removeSelectProductType: () => set({ selectProductType: '' }),
}));

export interface IProductCategoryState {
  selectProductCategory: string;
  setSelectProductCategory: (productProductCategory: string) => void;
  removeSelectProductCategory: () => void;
}

export const productCategoryStore = create<IProductCategoryState>((set) => ({
  selectProductCategory: '',
  setSelectProductCategory: (selectProductCategory: string) =>
    set({ selectProductCategory }),
  removeSelectProductCategory: () => set({ selectProductCategory: '' }),
}));

export interface IProductTagState {
  selectProductTag: string;
  setSelectProductTag: (productProductTag: string) => void;
  removeSelectProductTag: () => void;
}

export const productTagStore = create<IProductTagState>((set) => ({
  selectProductTag: '',
  setSelectProductTag: (selectProductTag: string) => set({ selectProductTag }),
  removeSelectProductTag: () => set({ selectProductTag: '' }),
}));
