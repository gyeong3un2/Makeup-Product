import Image from 'next/image';
import { Card, CardContent, Grid } from '@mui/material';
import { GetProductListResponse } from '@/src/types/index';
import { skeletonCounts } from '@/src/data/product';
import { ProductInfo, ProductColor, SkeletonUI } from '@/src/components/ui';

interface IProductListProps {
  productList: GetProductListResponse[] | undefined;
  fetchStatus: string;
}

function DisplayProducts({ productList, fetchStatus }: IProductListProps) {
  return (
    <Grid container rowSpacing={2} gridAutoRows={1}>
      {productList && fetchStatus === 'idle'
        ? productList.map((product: GetProductListResponse) => (
            <Grid item xs={12} sm={3} md={3} key={product.id}>
              <Card className="h-full shadow-none max-screen-w-64 hover:cursor-pointer hover:shadow-2xl transition ease-in-out hover:-translate-y-1 duration-300">
                <Image
                  className="w-36 m-auto my-3"
                  src={`http:${product.api_featured_image}`}
                  alt={product.name}
                  width={24}
                  height={24}
                />

                <CardContent>
                  <ProductInfo product={product} />

                  <ProductColor productColors={product.product_colors} />
                </CardContent>
              </Card>
            </Grid>
          ))
        : skeletonCounts.map((count) => (
            <Grid item xs={12} sm={3} md={3} key={count}>
              <SkeletonUI />
            </Grid>
          ))}
    </Grid>
  );
}

export default DisplayProducts;
