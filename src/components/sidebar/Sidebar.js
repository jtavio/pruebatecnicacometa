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
function stringAvatar(name) {
  return {
    // sx: {
    //   bgcolor: stringToColor(name),
    // },
    children: `${name.split(' ')[0][0]}`,
  };
}
export const Sidebar = ({ data }) => {
  const { school } = data;
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
            <Avatar {...stringAvatar(school.name)}/>
          </Box>

          <Toolbar>
            <Typography variant="subtitle1" gutterBottom component="div">{school.name}</Typography>
          </Toolbar>
        </Box>
      </AppBar>
    </StatWrapper>
  );
};
