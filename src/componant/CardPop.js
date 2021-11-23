import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import { data } from '../data.js';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';
import  { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';


class FavoriteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteIcon: false,
        }
    }

    render() {
        return (
            <IconButton className="buttonFavorite" onClick={() => this.setState({ favoriteIcon: !this.state.favoriteIcon })}>
                {this.state.favoriteIcon ? <Favorite color='error' /> : <FavoriteBorderIcon />
                }

            </IconButton>
        );
    }

}

function MyFormControlLabel(props) {
    const radioGroup = useRadioGroup();
  
    let checked = false;
  
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <FormControlLabel checked={checked} {...props} />;
  }
  
  MyFormControlLabel.propTypes = {
    /**
     * The value of the component.
     */
    value: PropTypes.any,
  };






export default function CardPop(props) {
  
  

  return(
<div>
            <Box sx={{ maxWidth: [1100], margin:"0 auto!important", padding:"10px" }}>
            <Grid container spacing={3}   >

                {data.map((data, i) => {
                    return (

                        <Grid item xs="6" sm="4" md="3" id={i} >

                            <Card  className="cardProduct">

                                <FavoriteButton />


                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="170"
                                        image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Grid container xs={12}  >

                                            <Grid item xs={12} sm={12} >
                                                <div>
                                                    <Box >
                                                        <Rating
                                                            value={data.stars}
                                                            name="rating"
                                                            size="small"
                                                            readOnly
                                                            precision={0.5}
                                                        />
                                                    </Box>
                                                </div>
                                            </Grid>

                                           
                                        </Grid>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {data.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </Typography>

                                        <Grid container alignItems="center" xs={12} md={12} spacing="3">

                                            <Grid container xs={9} sm={10} md={9.5}  >

                                                <CardActions >

                                                   

                                                    <FormControl  >

                                                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group" defaultValue="a">
                                                        <div>
                                                        <FormControlLabel value="a" label="" control={<Radio />} size="small"color="default"/>
                                                        <FormControlLabel value="b" label="" control={<Radio />} size="small"color="default"/>
                                                        </div>
                                                    </RadioGroup>
                                                    </FormControl>


                                           

                                                </CardActions>
                                            </Grid>


                                            <Grid item  xs={3} sm={2} md={2.5} >
                                                <Typography sx={{ float:"right"}} className="priceCardProduct" gutterBottom variant="h6" component="div">
                                                    13€
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                    </CardContent>





                                </CardActionArea>

                            </Card>

                        </Grid>

                    )
                })}


            </Grid>
            </Box>
            </div>
  );
}

