import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { GetProductListResponse } from '../types';
import { getProductList } from '../api/product-api';

interface IGetProductList {
  selectProductType?: string;
  selectProductCategory?: string;
  selectProductTag?: string;
}

/**
 * 상품 목록 조회 API > 상품 목록 조회 커스텀 훅
 */
export const useGetProductList = <T extends GetProductListResponse[]>({
  selectProductType,
  selectProductCategory,
  selectProductTag,
}: IGetProductList): UseQueryResult<T, Error> => {
  return useQuery({
    queryKey: [selectProductType, selectProductCategory, selectProductTag],
    queryFn: async () => {
      const queryParams = new URLSearchParams();
      if (selectProductType) {
        queryParams.append('product_type', selectProductType);
      }
      if (selectProductCategory) {
        queryParams.append('product_category', selectProductCategory);
      }
      if (selectProductTag) {
        queryParams.append('product_tags', selectProductTag);
      }

      return await getProductList({ params: queryParams });
    },
    staleTime: 1000 * 60 * 60, // 1시간
  });
};
