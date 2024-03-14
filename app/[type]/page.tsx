import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { PRODUCT_MENU } from '../modules/constants';
import { GetProductListResponse } from '../modules/types';

// export async function generateStaticParams() {
//   const productInfos: GetProductListResponse[] = [];

//   PRODUCT_MENU.productType.map(async (type: string) => {
//     const data = await fetch(
//       `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`,
//     );
//     const products = await data.json();

//     productInfos.push(products);
//   });

//   return productInfos.map((productInfo) => ({
//     params: {
//       type: productInfo.product_type,
//     },
//   }));
// }

// export async function generateStaticParams({
//   params: { type },
// }: {
//   params: { type: string };
// }) {
//   const data = await fetch(
//     `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${type}`,
//   );
//   const products = await data.json();
//   console.log('type: ', type);
//   console.log('data: ', data);
//   console.log('products: ', products);

//   return products.map((product: GetProductListResponse) => ({
//     params: {
//       id: product.id.toString(),
//     },
//   }));
// }

export async function generateStaticParams() {
  const data = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json`,
  );
  const products = await data.json();

  const paths = products.map((product: GetProductListResponse) => ({
    params: {
      type: product.product_type,
      id: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

function ProductTypePage({ params }: { params: { type: string; id: string } }) {
  // console.log('type', params.type);
  // console.log('id', params.id);

  return (
    <div>
      <h1>ProductTypePage</h1>
      <div>type: {params.type}</div>
      <div>id: {params.id}</div>
    </div>
  );
}

export default ProductTypePage;
