import { Box, Grid } from "@mui/material";

const dummy = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

function ProductColors() {
  return (
    <Grid container spacing={0.7}>
      {
        dummy.map((index) => (
          <Grid item key={index}>
            <Box className="rounded-full w-5 h-5 m-0.7 bg-slate-500"/>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ProductColors;