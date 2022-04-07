import React, { useEffect, useState } from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";


const StatWrapper2 = styled("div")(
    ({ theme }) => `
            
        box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.37);
        -webkit-box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.37);
        -moz-box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.37);
          `
  );
export const CuotosPrimaryCard = ({data, cuotoPeding}) => {
    
 const [total, setTotal] = useState('')

  useEffect(() => {
    
    const clickMouse = (e) => {
     
      let uniqId = e.target.name
      let getTotal = localStorage.getItem('precioTotal')
      
       if(e.target.checked === true){
        
           cuotoPeding.forEach(obj => {
           
             if(uniqId === obj.id){
               let precio1 = parseInt(obj.price)
               let interes = parseInt(obj.interest)
              
             
               let toPrecio = precio1+interes;
               setTotal(toPrecio)
               
              if(getTotal !== null){
             
                let getNuevoLocal = parseInt(getTotal);
                let nuevo = getNuevoLocal+toPrecio
               
                localStorage.setItem('precioTotal', nuevo)
                setTotal(nuevo)
                return false;
              }else {
               
                localStorage.setItem('precioTotal', toPrecio)
                return false;
              }
              
             }
             
           })
       }
       if(e.target.checked === false){
        let uniqId = e.target.name
        let getTotal = localStorage.getItem('precioTotal')
        cuotoPeding.forEach(obj => {
           
          if(uniqId === obj.id){
            let precio1 = parseInt(obj.price)
            let interes = parseInt(obj.interest)
           
          
            let toPrecio = precio1+interes;
            let resNuevoPriceLs = parseInt(getTotal);
            let nuevoPriceRes = resNuevoPriceLs-toPrecio;
            

            localStorage.setItem('precioTotal', nuevoPriceRes)
            setTotal(nuevoPriceRes)
            return false;
          }
          
        })
       }
    }

    window.addEventListener("click", clickMouse)
      
    //setfirst(localStorage.getItem('precioTotal'))
      
    return () => {
      window.removeEventListener("click", clickMouse)
    }
   
  },[])

  return (
    <StatWrapper2>
        <Card sx={{ minWidth: 275, mb: 4 }} elevation={0}>
          <CardContent>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  {data.first_name} {data.last_name}
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ textAlign: "right" }}>1ro {data.cohort}</Box>
                </Grid>
                <Grid item xs={6}>
                  Total a Pagar
                </Grid>
                <Grid item xs={6}>
                  {
                    total == ''
                    ? (<Box sx={{ textAlign: "right" }}>$ --</Box>)
                    : (<Box sx={{ textAlign: "right" }}>$ {total}</Box>)
                  }
                  
                </Grid>
              </Grid>
            </Box>
          </CardContent>
        </Card>
      </StatWrapper2>
  )
}
