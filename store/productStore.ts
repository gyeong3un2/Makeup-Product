import { create } from 'zustand';
import { GetProductListResponse } from '@/types';

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

  productInfo: GetProductListResponse;
  setProductInfo: (product: GetProductListResponse) => void;

  saveProductInfo: () => void;
  loadProductInfo: () => void;
}

export const productStore = create<IProductState>((set, get) => ({
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

  productInfo: {} as GetProductListResponse,
  setProductInfo: (productInfo: GetProductListResponse) => set({ productInfo }),

  saveProductInfo: () => {
    const { productInfo } = get();
    sessionStorage.setItem('productInfo', JSON.stringify(productInfo));
  },

  loadProductInfo: () => {
    const productInfo = sessionStorage.getItem('productInfo');
    if (productInfo) {
      set({ productInfo: JSON.parse(productInfo) });
    }
  },
}));
