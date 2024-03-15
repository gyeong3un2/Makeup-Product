/**
 * 상품 상세 조회 API
 */
export const getProductInfo = async (productId: string) => {
  return fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`,
    { method: 'GET' },
  ).then((res) => res.json());
};
