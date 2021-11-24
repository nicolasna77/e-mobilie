
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
// import {data} from '../data.js';



export default function cardPiece(props) {

  return (

    <Box sx={{ flexGrow: 1 }}>
        <div className="titleCardPiece">
  {/* <Typography gutterBottom variant="h5" component="div">
    Nos piéces
  </Typography>
  <Divider  className="divider" /> */}

</div>

      <Grid container  xs={12} sm={12} md={12} spacing={2} >
 
      {/* { _.map((_, i) => { */}
                {/* return ( */}
          
             <Grid item  xs={2} sm={4} md={4}  >
        {/* <Card sx={{ minWidth:200, maxWidth: 300, minHeight:100, maxHeight:200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
        
          image={process.env.PUBLIC_URL + '/salon.jpg'}
          alt="green iguana"
        />
     
      </CardActionArea>
    </Card> */}
    </Grid>

      
 
  
      
        {/* )})} */}
     
      </Grid>
    </Box>
  );
}

