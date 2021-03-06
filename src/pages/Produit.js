import { Button, Grid, Input, Typography } from "@mui/material";
import * as React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/system";

export default function Produit(props) {
  var items = [
    {
      original: "./salon.jpg",
      thumbnail: "./salon.jpg",
    },

    {
      original: "./SalleDeBain.jpg",
      thumbnail: "./salon.jpg",
    },
  ];

  return (
    <Box pb={{ xs: 10, md: 10 }}>
      <Grid
        container
        spacing={3}
        xs="10"
        justifyContent="center"
        sx={{ margin: "0 auto" }}
      >
        <Grid item xs="12" sm="" md="5">
          {/* carousel  */}
          <ImageGallery
            showThumbnails="true"
            showPlayButton="false"
            items={items}
          />
        </Grid>

        {/* description produit */}
        <Grid item xs="12" md="5">
          <Typography variant="h6">Table</Typography>
          <Box pt="10px" componant="div" color="secondary">
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              quisquam dolor labore excepturi vel reprehenderit quia blanditiis,
              dolorum tempora.
            </Typography>
          </Box>
          <Box pt="10px">
            <Typography variant="subtitle1">
              Taille : <span>l/L/p</span>
            </Typography>
          </Box>
          <Box pt="10px">
            <Typography variant="subtitle1">Couleur : </Typography>
          </Box>

          <Box pt="10px">
            <Typography variant="h6">9.99 €</Typography>
          </Box>
          <Box pt="10px">
            <Input
              defaultValue="1"
              sx={{ width: "35px" }}
              size="small"
              type="number"
            ></Input>

            <Box>
              <Button
                color="secondary"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
              >
                Ajouter au panier
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
