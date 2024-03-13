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

// export async function getStaticPaths() {
//   // 모든 상품 데이터를 가져옵니다.
//   const { data: productList } = useGetProductList({
//     selectProductType: '',
//     selectProductCategory: '',
//     selectProductTag: '',
//   });

//   // 경로 객체의 배열을 생성합니다.
//   const paths =
//     productList &&
//     productList.map((product) => ({
//       params: { productId: product.id },
//     }));

//   // fallback: false로 설정하면 getStaticProps에서 반환하지 않은 경로에 대한 404 페이지가 자동으로 생성됩니다.
//   return { paths, fallback: false };
// }

// export async function getStaticProps() {
//   // 특정 상품 데이터를 가져옵니다. 이 예제에서는 모든 상품을 불러오는 것으로 간주합니다.
//   // 실제로는 params.productId를 사용하여 특정 상품을 조회하는 API를 호출해야 합니다.
//   const { data: productList } = useGetProductList({
//     selectProductType: '',
//     selectProductCategory: '',
//     selectProductTag: '',
//   });

//   return {
//     props: {
//       productList,
//       title: ['Home', 'ProductPage'], // 필요한 경우 여기에 추가적인 props를 전달할 수 있습니다.
//     },
//     revalidate: 60, // 페이지 리젠 시간(초)을 설정합니다. (선택적)
//   };
// }

// export async function getStaticPaths() {
//   const res = await fetch(
//     'http://makeup-api.herokuapp.com/api/v1/products.json',
//   );
//   const data = await res.json();
//   return {
//     paths: data.slice(0, 10).map((item) => ({
//       params: {
//         id: item.id.toString(),
//       },
//     })),

//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const res = await fetch(
//     `http://makeup-api.herokuapp.com/api/v1/products/${id}.json?`,
//   );
//   const item = await res.json();
//   return {
//     props: {
//       item,
//     },
//   };
// }
