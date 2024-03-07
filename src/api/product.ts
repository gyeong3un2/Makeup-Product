import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetProductListResponse } from '../types';
import { apiFetch } from '../app/utils/httpClient';

/**
 * 상품 전체 목록 조회
 */
export const useGetAllProductList = <
  T extends GetProductListResponse[],
>(): UseQueryResult<T> => {
  return useQuery({
    queryKey: ['all product'],
    queryFn: apiFetch,
  });
};

interface IFetchProps {
  selectProductType: string;
  selectCategory: string;
  selectTag: string;
}
/**
 * 상품 타입별 목록 조회
 */
export const useGetFilterProductList = <T extends GetProductListResponse[]>({
  selectProductType,
  selectCategory,
  selectTag,
}: IFetchProps): UseQueryResult<T> => {
  return useQuery({
    queryKey: ['filter product type'],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API}?` +
          new URLSearchParams({
            product_type: selectProductType,
            product_category: selectCategory,
            product_tags: selectTag,
          }),
        {
          method: 'GET',
        },
      );

      const data = await response.json();
      // console.log('data: ', data);
      return data;
    },
    staleTime: 1000 * 60 * 60, // 1시간
  });
};
