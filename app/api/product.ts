import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { GetProductListResponse } from '@/app/types';

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
  productId: number;
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

export async function getStaticPaths() {
  const res = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json',
  );
  const data = await res.json();
  return {
    paths: data.slice(0, 10).map((item: GetProductListResponse) => ({
      params: {
        id: item.id.toString(),
      },
    })),

    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`,
  );
  const item = await res.json();
  return {
    props: {
      item,
    },
  };
}
