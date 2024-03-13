import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetProductListResponse } from '@/app/types';
import { IProductState, productStore } from '../store/productStore';
import { GetStaticPropsContext } from 'next';
import { generateStaticParams } from '../[productId]/page';

interface IGetProductList {
  selectProductType: string;
  selectProductCategory: string;
  selectProductTag: string;
}

/**
 * 상품 목록 조회 API
 */
export const useGetProductList = <T extends GetProductListResponse[]>({
  selectProductType,
  selectProductCategory,
  selectProductTag,
}: IGetProductList): UseQueryResult<T> => {
  return useQuery({
    queryKey: [selectProductType, selectProductCategory, selectProductTag],
    queryFn: async () => {
      const response = await fetch(
        'http://makeup-api.herokuapp.com/api/v1/products.json?' +
          new URLSearchParams({
            product_type: selectProductType,
            product_category: selectProductCategory,
            product_tags: selectProductTag,
          }),
        {
          method: 'GET',
        },
      );

      return await response.json();
    },
    staleTime: 1000 * 60 * 60, // 1시간
  });
};

interface IGetProductInfoProps {
  productId: string;
}

/**
 * 상품 상세 조회 API
 */
export const useGetProductInfo = <T extends GetProductListResponse>({
  productId,
}: IGetProductInfoProps): UseQueryResult<T> => {
  return useQuery({
    queryKey: [productId],
    queryFn: async () => {
      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`,
      );

      return await response.json();
    },
    staleTime: 1000 * 60 * 60, // 1시간
  });
};
