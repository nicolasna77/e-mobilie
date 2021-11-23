
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import {data} from '../data.js';



export default function cardPiece(props) {

  return (

    <Box sx={{ flexGrow: 1 }}>
        <div className="titleCardPiece">
  <Typography gutterBottom variant="h5" component="div">
    Nos piéces
  </Typography>
  <Divider  className="divider">
    </Divider>
</div>

      <Grid container  xs={12} sm={12} md={10} spacing={2} >
 
      { data.map((data, i) => {
                return (
             <div key={i}>
       
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

      
 
  
      </div>   
        )})}
     
      </Grid>
    </Box>
  );
}

