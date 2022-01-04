import * as React from "react";
import { Box } from "@mui/system";
import CardPop from "../componant/CardPop";
import { Grid } from "@mui/material";
import data from "../data";
import Filter from "../componant/Filter";

export default function Produits() {
  return (
    <div>
      <Filter />
      <Box
        pb={{ xs: 5, md: 5 }}
        pt={{ xs: 5, md: 5 }}
        sx={{
          maxWidth: [1100],
          margin: "0 auto!important",
          padding: "10px",
        }}
      >
        <Grid container spacing={3}>
          {data.map((data) => {
            return <CardPop {...data} />;
          })}
        </Grid>
      </Box>
    </div>
  );
}
