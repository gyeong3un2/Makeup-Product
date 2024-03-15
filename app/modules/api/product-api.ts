/**
 * 상품 목록 조회 API
 */
export const getProductList = async ({
  params,
}: {
  params: URLSearchParams;
}) => {
  return await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/v1/products.json?${params.toString()}`,
    {
      method: 'GET',
    },
  ).then((res) => res.json());
};

/**
 * 상품 상세 조회 API
 */
export const getProductInfo = async (productId: string) => {
  return await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/products/${productId}.json`,
    { method: 'GET' },
  ).then((res) => res.json());
};
