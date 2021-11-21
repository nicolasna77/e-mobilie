import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import {data} from '../data.js';
import Favorite  from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';


// import handleClick from 'react';

class FavoriteButton extends React.Component { 
    constructor(props) {
      super(props);
      this.state = {
        favoriteIcon: false,
      }
    } 
  
    render() {
      return (
        <IconButton className="buttonFavorite" onClick={()=>this.setState({ favoriteIcon: !this.state.favoriteIcon })}>
          { this.state.favoriteIcon ? <Favorite color='error'/>: <FavoriteBorderIcon />
          }
        
        </IconButton>
      );
    }
  
  }


export default function CardPop(props) {  
  
    return (

        <Box sx={{ flexGrow: 1 }}>
             <Grid container margin="0 auto" textAlign="center" xs={12} sm={12} md={11}  >

            <Grid item  xs={6} sm={4} md={2} >
                <div className="titleCardPop">
                    <Typography gutterBottom variant="h5" component="div">
                        Produits populaires
                    </Typography>

                    <Divider className="divider"/>
                
                </div>
            </Grid>
            <Grid item  xs={3} sm={6} md={8}  >
              
              </Grid>
            <Grid item  xs={3} sm={2} md={2}  >
            <IconButton  className="iconFilter" >
                <SortIcon />
             </IconButton>
             <IconButton  className="iconFilter" >
                <  FilterAltIcon/>
             </IconButton>
            </Grid>

            </Grid>



            <Grid container margin="0 auto" xs={12} sm={12} md={10}  spacing={2}>
     
            { data.map((data, i) => {
                return ( 
                           
                <Grid item id={i} xs={6} sm={4} md={3}>

                    <Card sx={{ maxWidth: 300 }} className="cardProduct">
                    
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
                            
                            <Grid item xs={8} >
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

                            <Grid item xs={3} float="right" >
                                <Chip label={data.category} variant="outlined" size="small"/>
                            </Grid>
                            </Grid>
                                <Typography gutterBottom variant="h6" component="div">
                                   {data.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </Typography>

                                <Grid container alignItems="center" xs={12} spacing="3">

                                    <Grid container xs={12} sm={12} md={12}  >
                                    
                                        <CardActions >  
                                          
                                        <Grid item xs={2} sm={6} md={8} >

                                      
                                       
          
                                            </Grid>  
                                           
                                          </CardActions>
                                         </Grid>
                                    
                               
                                    <Grid item xs={4} sm={4} md={4} >
                                        <Typography className="priceCardProduct" gutterBottom variant="h5" component="div">
                                            13€
                                        </Typography>
                                    </Grid>  
                                </Grid>

                               
                            </CardContent>





                        </CardActionArea>

                    </Card>

                </Grid>
       
   )})}
      
               
            </Grid>
        </Box>
    );
}
