import React from "react";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import CardActions from "@mui/material/CardActions";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grow from "@mui/material/Grow";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// api pour gerer le system de couleur pour un article
import { CirclePicker } from "react-color";

class FavoriteButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteIcon: false,
    };
  }

  render() {
    return (
      <IconButton
        className="buttonFavorite"
        onClick={() =>
          this.setState({ favoriteIcon: !this.state.favoriteIcon })
        }
      >
        {this.state.favoriteIcon ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorderIcon color="action" />
        )}
      </IconButton>
    );
  }
}

interface Props {
  image: string;
  title: string;
  description: string;
  stars: Number;
  price: Number;
  color: string;
}

export default function CardPop({
  title,
  image,
  description,
  stars,
  price,
  color,
}): props {
  return (
    <Grid item xs="6" sm="4" md="3">
      <Grow in="to">
        <Card elevation="0" className="cardProduct">
          <FavoriteButton />

          <CardActionArea>
            <CardMedia component="img" height="170" src={image} alt={title} />

            <CardContent>
              <Box>
                <Rating
                  value={stars}
                  name="rating"
                  size="small"
                  readOnly
                  precision={0.5}
                />
              </Box>

              <Typography gutterBottom variant="subtitle2" component="div">
                {title}
              </Typography>

              <Typography variant="body2" color="text.primary">
                {description}
              </Typography>

              <Grid container alignItems="center" xs={12} md={12} spacing="3">
                <Grid container xs={12} sm={12} md={12}>
                  <CardActions>
                    <FormControl>
                      {/* {option.keys(option).map((key) => {

                                                        return( */}
                      <CirclePicker
                        circleSize={20}
                        height="12px"
                        colors={["#D9E3F0", "#F47373", "#697689"]}
                      />
                      {/* )})};  */}
                    </FormControl>
                  </CardActions>
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                  <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>{" "}
                  <Typography
                    sx={{ float: "right" }}
                    className="priceCardProduct"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                    {price} €
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grow>
    </Grid>
  );
}
