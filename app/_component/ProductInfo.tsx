import { Typography } from "@mui/material";

const cardDummy = {
  product_image: 'https://sdcdn.io/mac/kr/mac_sku_SK6P04_1x1_0.png?width=1080&height=1080',
  brand: 'colourpop',
  name: 'Lippie Pencil',
  category: 'pencil',
  price: '5.0'
}

function ProductInfo() {
  return (
    <>
      <Typography className="my-4" gutterBottom>
        {cardDummy.brand}
      </Typography>

      <Typography className="my-3">
        {cardDummy.name}
      </Typography>

      <Typography className="mt-3">
        Category: {cardDummy.category}
      </Typography>

      <Typography className="mt-1">
        $ {cardDummy.price}0
      </Typography>
    </>
  )
}

export default ProductInfo;