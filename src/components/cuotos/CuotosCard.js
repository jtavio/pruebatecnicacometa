import React from "react";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/system";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const DisFlx = styled("div")(
  ({ theme }) => `
            
            display: flex;
            justify-content: space-between;
          `
);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export const CuotosCard = ({ id, name, payin, price, interest }) => {
  const [open, setOpen] = React.useState(false);

  

  const handleClose = () => {
    setOpen(false);
  };
  var options = { month: "long", day: "numeric" };
  const handleClickOpen = () =>{
    console.log('hola mundo')
    setOpen(true);
  }
  return (
    <>
      <DisFlx>
        <Box>
          <Box
            sx={{
              fontSize: 14,
            }}
          >
            {name}
          </Box>
          <Typography variant="caption" display="block" gutterBottom>
            Pagado el 
            { new Date(payin.created).toLocaleDateString("es-ES", options)}
          </Typography>
        </Box>

        <ArrowForwardIosIcon sx={{ color: grey[500] }} onClick={handleClickOpen} />
      </DisFlx>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
            Pagado el 
            { new Date(payin.created).toLocaleDateString("es-ES", options)}
            </Grid>
            <Grid item xs={6}>
              Monto: $ {price} <br></br>
              Intereses: $ {interest}
            </Grid>
            <Grid item xs={6}>
             Estatus:
            </Grid>
            <Grid item xs={6}>
              Pagado
            </Grid>
          </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" sx={{ color: grey[500] }} onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
