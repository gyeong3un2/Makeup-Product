import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetProductListResponse } from '@/types';

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
        `${process.env.NEXT_PUBLIC_API}?` +
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
