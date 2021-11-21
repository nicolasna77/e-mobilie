import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Carousel } from '@trendyol-js/react-carousel';
import {data} from '../data.js';


export default function cardPiece() {
  return (

    <Box sx={{ flexGrow: 1 }}>
        <div className="titleCardPiece">
  <Typography gutterBottom variant="h5" component="div">
    Nos piéces
  </Typography>
  <Divider  className="divider">
    </Divider>
</div>

      <Grid container margin="0 auto" xs={12} sm={12} md={10} spacing={2} >
<Carousel show={3.5} responsive={true} swiping={true}>
      { data.map((data, i) => {
                return (

        <Grid item key={i}>
        <Card sx={{ minWidth:170, maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        
          image={process.env.PUBLIC_URL + '/salon.jpg'}
          alt="green iguana"
        />
     
      </CardActionArea>
    </Card>

      
      </Grid>

        )})}
        </Carousel>
      </Grid>
    </Box>
  );
}