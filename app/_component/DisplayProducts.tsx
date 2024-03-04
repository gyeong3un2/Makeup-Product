import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import ProductColors from "./ProductColors";
import ProductInfo from "./ProductInfo";

const dummy = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
]

const cardDummy = {
  product_image: 'https://sdcdn.io/mac/kr/mac_sku_SK6P04_1x1_0.png?width=1080&height=1080',
  brand: 'colourpop',
  name: 'Lippie Pencil',
  category: 'pencil',
  price: '5.0'
}

function DisplayProducts() {
  return (
    <Grid container rowSpacing={2}>
      {
        dummy.map((index) => (
          <Grid item xs={12} sm={3} md={3} key={index}>
            <Card className="shadow-none max-screen-w-64 hover:cursor-pointer hover:shadow-2xl transition ease-in-out hover:-translate-y-1 duration-300">
              <Image className="w-36 m-auto my-3" src={cardDummy.product_image} alt={cardDummy.name} width={24} height={24}/>

              <CardContent>
                <ProductInfo />

                <ProductColors />
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default DisplayProducts;