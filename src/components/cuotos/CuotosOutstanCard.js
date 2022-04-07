import React from "react";
import Checkbox from "@mui/material/Checkbox";
import { Typography } from "@mui/material";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

const DisFlx2 = styled("div")(
  ({ theme }) => `
            
            display: flex;
            justify-content: end;
          `
);

export const CuotosOutstanCard = ({ id, name, due, price }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  var options = { month: "long", day: "numeric" };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Box
            sx={{
              fontSize: 14,
            }}
          >
            {name}
          </Box>
          <Typography variant="caption" display="block" gutterBottom>
            Vence el {new Date(due).toLocaleDateString("es-ES", options)}
          </Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <DisFlx2>
            <div>
              <Box
                sx={{
                  fontSize: 14,
                }}
              >
                ${price}
              </Box>
            </div>

            <Checkbox
              {...label}
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
  );
};
