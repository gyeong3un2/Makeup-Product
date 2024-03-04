import { Box, Divider, Typography } from "@mui/material";

const categorys = ['Powder', 'Cream'];
const tags = ['Vegan', 'Gluten free', 'Canadian', 'Natual', 'Non-gmo', 'Purpicks', 'Usda organic', 'Certclean', 'Ewg verified', 'Hypoallergenic', 'No talc'];


function ProductFilter() {
  return (
    <Box>
      <Typography className="text-sm text-gray-400">
        Filter
      </Typography>

      <Box>
        <Box className="flex h-8">
          <Typography className="text-xs text-gray-500">
            Category
          </Typography>

          {
            categorys.map((category) => (
              <>
                <Divider orientation="vertical" variant="middle" flexItem className="border-gray-400 mx-4" key={category}/>

                <Typography className="my-1 text-sm hover:cursor-pointer">
                  {category}
                </Typography>
              </>
            ))
          }
        </Box>

        <Box className="flex h-8">
          <Typography className="text-xs text-gray-500">
            Tag
          </Typography>

          {
            tags.map((tag) => (
              <>
                <Divider orientation="vertical" variant="middle" flexItem className="border-gray-400 mx-4" key={tag}/>

                <Typography className="my-1 text-sm hover:cursor-pointer">
                  {tag}
                </Typography>
              </>
            ))
          }
        </Box>
      </Box>
    </Box>
  )
}

export default ProductFilter;