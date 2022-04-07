

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";


const DisFlx2 = styled("div")(
    ({ theme }) => `
            
            display: flex;
            justify-content: end;
          `
  );

export const CuotosPendingCard = ({ id, name, due, price, interest}) => {
    
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    var options = { month: "long", day: "numeric" };

  
    
  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={6} md={9}>
        <Box  sx={{
              fontSize: 13,
            }}>{name}</Box>
        <Typography variant="caption" display="block" gutterBottom>
          Vence el { new Date(due).toLocaleDateString("es-ES", options)}
        </Typography>
      </Grid>
      <Grid item xs={6} md={3}>
        <DisFlx2>
          <div>
            <Box sx={{
              textAlign: 'right',
              fontSize: 14,
            }} >${price}</Box>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              sx={{fontSize: 10}}
            >
              {
                interest == null 
                ? (<div></div>)
                : (<div> Interes: ${interest} </div>)
              }
              
            </Typography>
          </div>

          <Checkbox
            {...label}
            // onChange={handleTotalPrice}
            name={id}
            
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 1,
              paddingRight: 0,
              color: grey[900],
              "&.Mui-checked": {
                color: grey[900],
              }, 
              
            }}
          />
        </DisFlx2>
      </Grid>
    </Grid>
  </Box>
  )
}
