import React from "react";

import { Box, Button, Container } from "@mui/material";

import { Sidebar } from "./sidebar/Sidebar";
import { SubBox1 } from "./SubBox1";
import { styled } from "@mui/system";
import { useFetch } from "./hooks/useFetch";
import CircularProgress from '@mui/material/CircularProgress';
import { SidebarGap } from "./sidebar/SidebarGap";

const BoxCenter = styled("div")(
  ({ theme }) => `
          
  position: absolute;
  bottom: -46px;
  margin: auto;
  text-align: center;
  /* justify-content: center; */
  /* display: flex; */
  right: 0;
  left: 0;
        `
);

export const BoxScreen = () => {
  const url = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/';
   const url2 = 'http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/api/v1/students/3b35fb50-3d5e-41b3-96d6-c5566141fab0/orders/'
  
  const {data, loading} = useFetch(url)

 
  const {data:cuotos, loading:carga} = useFetch(url2)

  

  return (
    <>
      {
        loading
         ?  <SidebarGap />
         :  <Sidebar data={data} />
      }
      

      <Container sx={{ mb: 1, mt: 4  }} style={{ position: "relative" }}>

        {
          loading 
          ? 
          (
            <Box style={{display: 'flex' ,justifyContent: 'center'}}>

              <CircularProgress color="inherit" />
            </Box>
          ) 
          : (<SubBox1 data={ data } cuotos={cuotos} carga={carga} />)
        }
          

        <BoxCenter sx={{ zIndex: 'tooltip'}}>
          <div className="d-grid gap-2 col-9 mx-auto"> 
            <Button className="btn bg-dark bg-gradient text-white" type="button">IR A PAGAR</Button>
           </div>  
        </BoxCenter>
      </Container>
    </>
  );
};
