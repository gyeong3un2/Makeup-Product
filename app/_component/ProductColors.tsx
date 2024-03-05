import { Box, Grid } from "@mui/material";
import { numbers } from "@/src/data/dummy";

function ProductColors() {
  return (
    <Grid container spacing={0.7}>
      {
        numbers.map((index) => (
          <Grid item key={index}>
            <Box className="rounded-full w-5 h-5 m-0.7 bg-slate-500"/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ProductColors;