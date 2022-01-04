import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function SubFooter() {
  return (
    <Box pb={"25px"} sx={{ bgcolor: "#e7e7e7" }}>
      <Grid
        container
        justifyItems="center"
        justifie="center"
        justifyContent="center"
        alignContent="center"
        spacing={4}
      >
        <Grid item xs="6" md="4" sm="6">
          <Box justifyItems="center">
            <img className="imgSubFooter" src="../secure-payment.png" />
          </Box>
          <Typography
            textAlign="center"
            variant="h6"
            color="secondary"
            component="div"
          >
            Payment simplifier
          </Typography>
        </Grid>

        <Grid item xs="6" md="4" sm="6">
          <Box>
            <img className="imgSubFooter" src="../livraison.png" />
          </Box>
          <Typography textAlign="center" color="secondary" variant="h6">
            Livraison rapide
          </Typography>
        </Grid>

        <Grid item xs="6" md="4" sm="6">
          <Box>
            <img className="imgSubFooter" src="../return.png" />
          </Box>
          <Typography variant="h6" color="secondary" textAlign="center">
            Retours Gratuits
          </Typography>
          <Typography variant="body2" textAlign="center">
            Sous 30 jours
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
