import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { apiFetch } from '../app/utils/httpClient';
import { GetProductListResponse } from '../types';

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
