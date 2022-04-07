import React, { useEffect, useMemo, useRef, useState } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/system";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/KeyboardArrowUp";
import { grey } from "@mui/material/colors";

import { CuotosCard } from "./cuotos/CuotosCard";
import { getPaid } from "../helpers/getPaid";
import { CuotosPendingCard } from "./cuotos/CuotosPendingCard";
import { getDue } from "../helpers/getDue";
import { getOutstanding } from "../helpers/getOutstanding";
import { CuotosOutstanCard } from "./cuotos/CuotosOutstanCard";
import { CuotosPrimaryCard } from "./cuotos/CuotosPrimaryCard";

export const SubBox1 = ({ data, cuotos, carga }) => {
  const cuoto = useMemo(() => getPaid(cuotos), [cuotos]);
  const cuotoPeding = useMemo(() => getDue(cuotos), [cuotos]);
  const cuotoStanding = useMemo(() => getOutstanding(cuotos), [cuotos]);


  useEffect(() => {}, []);


  const StatWrapper2 = styled("div")(
    ({ theme }) => `
            
        box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.37);
        -webkit-box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.37);
        -moz-box-shadow: 0px 0px 7px -3px rgba(0,0,0,0.37);
          `
  );

  return (
    <>
      <CuotosPrimaryCard data={data} cuotoPeding={cuotoPeding} />

      {carga ? (
        <div>...</div>
      ) : (
        <StatWrapper2 sx={{ mb: 4, width: "100%" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ fontSize: 38, color: grey[500] }} />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <div>
                <Box sx={{ fontWeight: "bold" }}>Cuotas pagadas</Box>
                <Box
                  sx={{
                    typography: "body2",
                    color: "text.disabled",
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Dale click para expandir
                </Box>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {cuoto.map((item) => (
                <CuotosCard key={item.id} {...item} />
              ))}
            </AccordionDetails>
          </Accordion>
        </StatWrapper2>
      )}

      {carga ? (
        <div>...</div>
      ) : (
        <StatWrapper2 sx={{ mb: 4 }}>
          <Box sx={{ width: "100%" }}>
            <Accordion expanded={true}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ fontSize: 38, color: grey[500] }} />
                }
                aria-controls="panel1bh-content"
                id="panel2bh-header"
              >
                <div>
                  <Box sx={{ fontWeight: "bold" }}>Cuotas pendientes</Box>
                  <Box
                    sx={{
                      typography: "body2",
                      color: "text.disabled",
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
                  >
                    Puedes seleccionar mas de uno
                  </Box>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                {cuotoPeding.map((item) => (
                  <CuotosPendingCard
                    key={item.id}
                    {...item}
                    cuotoPeding={cuotoPeding}
                    
                  />
                ))}
              </AccordionDetails>
            </Accordion>
          </Box>
        </StatWrapper2>
      )}
      <StatWrapper2>
        <Box sx={{ width: "100%" }}>
          <Accordion>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ fontSize: 38, color: grey[500] }} />
              }
              aria-controls="panel1bh-content"
              id="panel3bh-header"
            >
              <div>
                <Box sx={{ fontWeight: "bold" }}>Cuotas futuras</Box>
                {/* <Box sx={{ typography: 'body2', color: 'text.disabled', fontSize: 12, fontWeight: 'bold' }}>Dale click para expandir</Box> */}
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {cuotoStanding.map((item) => (
                <CuotosOutstanCard key={item.id} {...item} />
              ))}
            </AccordionDetails>
          </Accordion>
        </Box>
      </StatWrapper2>
      
    </>
  );
};
