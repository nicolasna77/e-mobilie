import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Divider, Input } from "@mui/material";
// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
// import DeleteIcon from '@mui/icons-material/Delete';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
import Paper from "@mui/material/Paper";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItem from "@mui/material/ListItem";

// const Img = styled('img')({
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
// });

export default function ListPanier() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  return (
    <Box
      pt={{ xs: 8, md: 8 }}
      pb={{ xs: 8, md: 8 }}
      sx={{ margin: "auto", maxWidth: "1300px !important" }}
    >
      <Grid container md={10} sx={{ margin: "auto", flexGrow: 1 }}>
        <Grid
          container
          xs={12}
          sm={10}
          md={8}
          sx={{ margin: "auto", flexGrow: 1 }}
        >
          <Grid item xs={10} sx={{ maxWidth: "700px !important" }}>
            <Box>
              <Typography variant="subtitle1" component="div">
                Total Articles : 2 Articles
              </Typography>
            </Box>
          </Grid>

          <Grid container xs={12} md={12} sx={{ maxWidth: "700px !important" }}>
            <ListItem>
              <Grid item>
                <ListItem>
                  <img src="./salon.jpg" alt="" srcset="" width="120px" />
                </ListItem>
              </Grid>

              <Grid item xs={7}>
                <ListItemText primary="Table Salon" secondary="color : grey" />
              </Grid>

              <Grid item xs="3">
                <Input
                  defaultValue="1"
                  sx={{ width: "35px" }}
                  size="small"
                  type="number"
                ></Input>
              </Grid>

              <Grid item xs="3">
                <Typography variant="h6">9.99€</Typography>
              </Grid>

              <Grid item>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon fontSize="small" color="error" />
                </IconButton>
              </Grid>
            </ListItem>

            <ListItem>
              <Grid item>
                <ListItem>
                  <img src="./SalleDeBain.jpg" alt="" srcset="" width="120px" />
                </ListItem>
              </Grid>

              <Grid item xs={7}>
                <ListItemText primary="Table Salon" secondary="color : grey" />
              </Grid>

              <Grid item xs="3">
                <Input
                  defaultValue="1"
                  sx={{ width: "35px" }}
                  size="small"
                  type="number"
                ></Input>
              </Grid>

              <Grid item xs="3">
                <Typography variant="h6">9.99€</Typography>
              </Grid>

              <Grid item>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon fontSize="small" color="error" />
                </IconButton>
              </Grid>
            </ListItem>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={3}>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <Paper sx={{ bgcolor: "Background.secondary" }}>
              <Box
                sx={{
                  width: "100%",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                <Box sx={{ width: "100%" }} mb="25px" mt="15px">
                  <Typography variant="h6" component="span">
                    Total :
                  </Typography>
                  <Typography variant="h6" component="span">
                    9,99€
                  </Typography>
                </Box>

                <Box sx={{ width: "100%" }}>
                  <Button variant="outlined" color="secondary">
                    Valider mon panier
                  </Button>
                </Box>
                <Box sx={{ width: "100%" }} pt="10px">
                  <Button size="small" color="primary">
                    Continue mes achat
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
