import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';


export default function cardPiece() {
  return (

    <Box sx={{ flexGrow: 1 }}>
        <div className="titleCardPiece">
        <Typography gutterBottom variant="h5" component="div">
    Nos piéces
  </Typography>
  <Divider  flexItem>
    </Divider>
</div>

      <Grid container justifyItems="center" xs={12} sm={8} md={10}  spacing={3}>
        <Grid item >
        
        <Card sx={{ minWidth:250, maxWidth: 380 }}>
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
        <Grid item>
        
        <Card sx={{ minWidth:250, maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
          alt="green iguana"
        />
  
      </CardActionArea>
    </Card>

        </Grid>
        <Grid item >
        
        <Card sx={{ minWidth:250, maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + '/Salon.jpg'}
          alt="green iguana"
        />
      
      </CardActionArea>
    </Card>

        </Grid>

        <Grid item>
               
                <Card sx={{ minWidth:250, maxWidth: 380 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
                alt="green iguana"
                />
          
            </CardActionArea>
            </Card>

        </Grid>
        <Grid item >
        
        <Card sx={{ minWidth:250, maxWidth: 380 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={process.env.PUBLIC_URL + '/Salon.jpg'}
          alt="green iguana"
        />
    
      </CardActionArea>
    </Card>

        </Grid>
      </Grid>
    </Box>
  );
}