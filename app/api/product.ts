import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetProductListResponse } from '@/app/modules/types';

interface IGetProductList {
  selectProductType?: string;
  selectProductCategory?: string;
  selectProductTag?: string;
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

      const response = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products.json?${queryParams.toString()}`,
        {
          method: 'GET',
        },
      );

      return await response.json();
    },
    staleTime: 1000 * 60 * 60, // 1시간
  });
};

/**
 * 상품 상세 조회 API
 */
export const getProductInfo = async (productId: string) => {
  const response = fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`,
  );

  return (await response).json();
};
