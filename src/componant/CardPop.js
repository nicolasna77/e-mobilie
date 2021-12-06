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
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';
import  { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grow from '@mui/material/Grow';


class FavoriteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteIcon: false,
        }
    }

    render() {
        return (
            <IconButton  className="buttonFavorite" onClick={() => this.setState({ favoriteIcon: !this.state.favoriteIcon })}>
                {this.state.favoriteIcon ? <Favorite color='error' /> : <FavoriteBorderIcon color="action"/>
                }

            </IconButton>
        );
    }

}

function MyFormControlLabel(Props) {
    const radioGroup = useRadioGroup();
    let checked = false;
    if (radioGroup) {
      checked = radioGroup.value === props.value;
    }
  
    return <FormControlLabel checked={checked} {...props} />;
  }
  
  MyFormControlLabel.propTypes = {
    value: PropTypes.any,
  };



  interface Props {
    image: string;
    title: string;
    description: string;
    stars: Number;
    price: Number;
    option: option[];

  }


export default function CardPop({title,image,description, stars, price, option}):props {
  
  

  return(


                        <Grid item xs="6" sm="4" md="3" >
                             <Grow in="true" style={{ transformOrigin: '0 0 0' }} timeout= "1000">

                            <Card elevation="0"  className="cardProduct">

                                <FavoriteButton />


                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="170"
                                        src={image}
                                        alt={`Preview of ${title}`}/>

                                    <CardContent>
                                      

                                          
                                                    <Box >
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

                                            <Grid container xs={12} sm={12} md={12}  >

                                              

                                                   
                                            <CardActions>
                                                    <FormControl  >

                                                    <RadioGroup row size="small" aria-label="gender" name="row-radio-buttons-group" defaultValue="a">
                                                       
                                                    {/* {option.keys(option).map((key) => {

                                                        return( */}
                                                        <FormControlLabel value="" label="" control={<Radio />} size="small" color="" />   
                                                        
                                                        {/* )})};  */}
                                                       
                                                        
                                                    </RadioGroup>
                                                    </FormControl>

</CardActions>
                                           

                                            
                                            </Grid>


                                            <Grid item  xs={12} sm={12} md={12} >
                                                <Typography sx={{ float:"right"}} className="priceCardProduct" gutterBottom variant="h6" component="div">
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

