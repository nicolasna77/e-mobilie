import react, { useEffect, useState  }  from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import StarRateIcon from '@mui/icons-material/StarRate';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';

import {data} from '../data.js';


export default function CardPop() {
        const [clicks, setClicks] = useState([])
         //add the id to the array of clicked items if it doesn't exist but if it does exist remove it. this makes sure that double clicking on an item brings it back to normal
        const handleIconClick = (id) => {
             let result =  clicks.includes(id)? clicks.filter(click => click != id): [...clicks, id]
             setClicks(result)
            // change <AddCircleIcon /> to <BlockIcon /> at "id"
        }

    return (

        <Box sx={{ flexGrow: 1 }}>
            <div className="titleCardPop">
                <Typography gutterBottom variant="h5" component="div">
                    Produits populaires
                </Typography>
                <Divider flexItem>
                </Divider>
            </div>
            <Grid container xs={12} sm={12} md={12} spacing={3}>
         <div>
            { data.map((data) => {
                return (
        <div id={data.id}>
             
                <Grid item xs={6} sm={4} md={3}>

                    <Card sx={{ maxWidth: 335 }} className="cardProduct">
                    
                            <IconButton className="buttonFavorite" onClick={handleIconClick(101)} >
                               {clicks.includes(101) ?  <FavoriteBorderIcon /> : <FavoriteIcon  />}
                            </IconButton>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="170"
                                image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
                                alt="green iguana"
                            />

                            <CardContent>

                                <Typography gutterBottom variant="h6" component="div">
                                    La cuisine
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

                                < StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>

                            </CardContent>





                        </CardActionArea>

                    </Card>

                </Grid>
                </div>
   )})};
         </div>
                <Grid item xs={6} sm={4} md={3}>

                    <Card sx={{ maxWidth: 345 }} className="cardProduct">
                        <CardActionArea>

                            <IconButton className="buttonFavorite" >
                                <FavoriteBorderIcon />
                            </IconButton>

                            <CardMedia
                                component="img"
                                height="170"
                                image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
                                alt="green iguana"
                            />

                            <CardContent>

                                <Typography gutterBottom variant="h6" component="div">
                                    La cuisine
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

                                < StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>

                            </CardContent>





                        </CardActionArea>

                    </Card>

                </Grid>

                <Grid item xs={6} sm={4} md={3}>

<Card sx={{ maxWidth: 345 }} className="cardProduct">
    <CardActionArea>

        <IconButton className="buttonFavorite" >
            <FavoriteBorderIcon />
        </IconButton>

        <CardMedia
            component="img"
            height="170"
            image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
            alt="green iguana"
        />

        <CardContent>

            <Typography gutterBottom variant="h6" component="div">
                La cuisine
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

            < StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>

        </CardContent>





    </CardActionArea>

</Card>

                </Grid>
                <Grid item xs={6} sm={4} md={3}>

<Card sx={{ maxWidth: 345 }} className="cardProduct">
    <CardActionArea>

        <IconButton className="buttonFavorite" >
            <FavoriteBorderIcon />
        </IconButton>

        <CardMedia
            component="img"
            height="170"
            image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
            alt="green iguana"
        />

        <CardContent>

            <Typography gutterBottom variant="h6" component="div">
                La cuisine
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

            < StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>

        </CardContent>





    </CardActionArea>

</Card>

                </Grid>
                <Grid item xs={6} sm={4} md={3}>

<Card sx={{ maxWidth: 345 }} className="cardProduct">
    <CardActionArea>

        <IconButton className="buttonFavorite" >
            <FavoriteBorderIcon />
        </IconButton>

        <CardMedia
            component="img"
            height="170"
            image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
            alt="green iguana"
        />

        <CardContent>

            <Typography gutterBottom variant="h6" component="div">
                La cuisine
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

            < StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>< StarRateIcon></StarRateIcon>

        </CardContent>





    </CardActionArea>

</Card>

                </Grid>
            </Grid>
        </Box>
    );
}
