import { Box, List, ListItemButton, ListItemText, ListSubheader } from "@mui/material";

const categorys = ['Powder', 'Cream'];
const tags = ['Vegan', 'Gluten free', 'Canadian', 'Natual', 'Non-gmo', 'Purpicks', 'Usda organic', 'Certclean', 'Ewg verified', 'Hypoallergenic', 'No talc'];

function SideNavigation() {
  return (
    <Box className="absolute left-0 mt-48 p-3 w-56">
      <List
        className="w-full max-w-64 mb-2"
        component="nav"
        aria-labelledby="categorys"
        subheader={
          <ListSubheader className="text-xs" component="div" id="nested-list-subheader">
            By Category
          </ListSubheader>
        }
      >
        {
          categorys.map((category) => (
            <ListItemButton key={category}>
              <ListItemText primary={category}/>
            </ListItemButton>
          ))
        }
      </List>

      <List
        className="w-full max-w-64"
        component="nav"
        aria-labelledby="tags"
        subheader={
          <ListSubheader className="text-xs" component="div" id="nested-list-subheader">
            By Tag
          </ListSubheader>
        }
      >
        {
          tags.map((tag) => (
            <ListItemButton key={tag}>
              <ListItemText primary={tag}/>
            </ListItemButton>
          ))
        }
      </List>
    </Box>
  )
}

export default SideNavigation;