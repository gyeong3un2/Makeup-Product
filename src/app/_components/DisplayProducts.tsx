import { Card, CardContent, Grid } from '@mui/material';
import Image from 'next/image';
import ProductColor from '../../components/ui/ProductColor';
import ProductInfo from '../../components/ui/ProductInfo';
import { useGetAllProductList } from '@/src/api/product';
import { useEffect } from 'react';
import { GetProductListResponse } from '@/src/types/index';

function DisplayProducts() {
  const { status, data: productList } = useGetAllProductList();

  useEffect(() => {
    console.log('status: ', status);
  }, [status]);

  return (
    <Grid container rowSpacing={2}>
      {productList &&
        productList.map((product: GetProductListResponse) => (
          <Grid item xs={12} sm={3} md={3} key={product.id}>
            <Card className="shadow-none max-screen-w-64 hover:cursor-pointer hover:shadow-2xl transition ease-in-out hover:-translate-y-1 duration-300">
              <Image
                className="w-36 m-auto my-3"
                src={`http:${product.api_featured_image}`}
                alt={product.name}
                width={24}
                height={24}
              />

              <CardContent>
                <ProductInfo />

                <ProductColor />
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}

export default DisplayProducts;
