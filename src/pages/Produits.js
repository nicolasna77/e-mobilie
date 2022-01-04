import * as React from "react";
import { Box } from "@mui/system";
import CardPop from "../componant/CardPop";
import { Divider, Grid, Typography } from "@mui/material";
import data from "../data";

export default function Produits() {
  return (
    <Box
      pb={{ xs: 5, md: 5 }}
      sx={{
        maxWidth: [1100],
        margin: "0 auto!important",
        padding: "10px",
      }}
    >
      <Typography classname variant="body1">
        <Box pb={{ xs: 5, md: 5 }} pt={{ xs: 5, md: 5 }}>
          Recherche :
        </Box>
      </Typography>
      <Grid container spacing={3}>
        {data.map((data) => {
          return <CardPop {...data} />;
        })}
      </Grid>{" "}
    </Box>
  );
}
