import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetProductListResponse } from '../types';
import { productStore, IProductState } from '../store/productStore';

/**
 * 상품 목록 조회 API
 */
export const useGetFilterProductList = <
  T extends GetProductListResponse[],
>(): UseQueryResult<T> => {
  const { selectProductType, selectProductCategory, selectProductTag } =
    productStore<IProductState>((state) => state);

  return useQuery({
    queryKey: ['filter product type'],
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
