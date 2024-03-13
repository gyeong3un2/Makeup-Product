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

export async function getStaticPaths() {
  // 모든 상품 데이터를 가져옵니다.
  const { data: productList } = useGetProductList({
    selectProductType: '',
    selectProductCategory: '',
    selectProductTag: '',
  });

  // 경로 객체의 배열을 생성합니다.
  const paths =
    productList &&
    productList.map((product) => ({
      params: { productId: product.id },
    }));

  // fallback: false는 정의되지 않은 경로에 대해 404 페이지를 보여줍니다.
  return { paths, fallback: 'false' };
}

export async function getStaticProps() {
  // 특정 상품 데이터를 가져옵니다. 이 예제에서는 모든 상품을 불러오는 것으로 간주합니다.
  // 실제로는 params.productId를 사용하여 특정 상품을 조회하는 API를 호출해야 합니다.
  const { data: productList } = useGetProductList({
    selectProductType: '',
    selectProductCategory: '',
    selectProductTag: '',
  });

  return {
    props: {
      productList,
      title: 'Home', // 필요한 경우 여기에 추가적인 props를 전달할 수 있습니다.
    },
    revalidate: 60, // 페이지 리젠 시간(초)을 설정합니다. (선택적)
  };
}
