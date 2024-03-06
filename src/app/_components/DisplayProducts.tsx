import { Card, CardContent, Grid } from '@mui/material';
import { numbers, cardDetailInfo } from '@/src/data/dummy';
import Image from 'next/image';
import ProductColor from '../../components/ui/ProductColor';
import ProductInfo from '../../components/ui/ProductInfo';

function DisplayProducts() {
  return (
    <Grid container rowSpacing={2}>
      {numbers.map((index) => (
        <Grid item xs={12} sm={3} md={3} key={index}>
          <Card className="shadow-none max-screen-w-64 hover:cursor-pointer hover:shadow-2xl transition ease-in-out hover:-translate-y-1 duration-300">
            <Image
              className="w-36 m-auto my-3"
              src={cardDetailInfo.image_link}
              alt={cardDetailInfo.name}
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
