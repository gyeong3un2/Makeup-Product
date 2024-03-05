import { Typography } from "@mui/material";
import { cardInfo } from "@/src/data/dummy";

function ProductInfo() {
  return (
    <>
      <Typography className="my-4" gutterBottom>
        {cardInfo.brand}
      </Typography>

      <Typography className="my-3">
        {cardInfo.name}
      </Typography>

      <Typography className="mt-3">
        Category: {cardInfo.category}
      </Typography>

      <Typography className="mt-1">
        $ {cardInfo.price}0
      </Typography>
    </>
  )
}

export default ProductInfo;