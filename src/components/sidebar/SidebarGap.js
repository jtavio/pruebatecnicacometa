import React from "react";
import AppBar from "@mui/material/AppBar";
import { Avatar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StatWrapper = styled("div")(
  ({ theme }) => `
      
    box-shadow: 0px 2px 11px -1px rgba(0,0,0,0.37);
    -webkit-box-shadow: 0px 2px 11px -1px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 2px 11px -1px rgba(0,0,0,0.37);
    `
);

export const SidebarGap = () => {
  return (
    <StatWrapper>
      <AppBar
        position="absolute"
        elevation={0}
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              alignSelf: "center",
            }}
          >
            <Avatar>-</Avatar>
          </Box>

          <Toolbar>
            <Typography variant="h6">Colegio -</Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </StatWrapper>
  )
}
