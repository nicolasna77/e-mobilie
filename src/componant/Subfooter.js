import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function SubFooter() {
  return (
    <Box pb={"20px"} sx={{ bgcolor: "#e7e7e7" }}>
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md="4" sm="6">
          <Box>
            <img src="../secure-payment.png" width="64px" />
          </Box>
          <Typography variant="h6" color="primary" component="div">
            Payment simplifier
          </Typography>
          <Box margin="0 auto"></Box>
        </Grid>

        <Grid item md="4" sm="6">
          <Box>
            <img src="../livraison.png" width="64px" />
          </Box>
          <Typography color="primary" variant="h6">
            Livraison rapide
          </Typography>
        </Grid>

        <Grid item md="4" sm="6">
          <Box>
            <img src="../return.png" width="64px" />
          </Box>
          <Typography variant="h6" color="secondary">
            Retours Gratuits
          </Typography>
          <Typography variant="body2">Sous 30 jours</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
