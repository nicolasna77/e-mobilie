import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import { deepOrange, deepPurple } from '@mui/material/colors';

import {data} from '../data.js';





export default function CardPop(props) {  
   

    return (

        <Box sx={{ flexGrow: 1 }}>
            <div className="titleCardPop">
                <Typography gutterBottom variant="h5" component="div">
                    Produits populaires
                </Typography>
                <Divider className="divider"/>
               
            </div>
            <Grid container margin="0 auto" xs={12} sm={12} md={10}  spacing={2}>
     
            { data.map((data) => {
                return (
   
             
                <Grid item  xs={6} sm={4} md={3}>

                    <Card sx={{ maxWidth: 300 }} className="cardProduct">
                    
                            <IconButton className="buttonFavorite" >
                             
                            </IconButton>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="170"
                                image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
                                alt="green iguana"
                            />

                            <CardContent>

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

                         

                                <Typography gutterBottom variant="h6" component="div">
                                   {data.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </Typography>

                                <Grid container alignItems="center" xs={12} >

                                    <Grid item xs={9} spacing={2}>
                                        <Stack direction="row" spacing={1}>
                                            <Avatar sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}></Avatar>
                                            <Avatar sx={{ width: 24, height: 24, bgcolor: deepPurple[500] }}></Avatar>
                                            <Avatar sx={{ width: 24, height: 24, bgcolor: deepOrange[500] }}></Avatar>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={3}>
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
