import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material'; 


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});




export default function ListPanier() {
    // const [Quantiter, setQuantiter] = React.useState('');

    // const handleChange = (event) => {
    //     setQuantiter(event.target.value);
    // };


    return (
       <Box pt={{ xs: 8, md: 10 }}>
           <Grid container spacing={5} md={10} sx={{  margin: 'auto', flexGrow: 1 }}>
            
             <Grid item xs={12} md={9}>
              
                <Box >
                    <Typography variant="body1" component="div">Total Articles : 2 Articles</Typography>
                </Box>
    </Grid>

 <Grid container xs={8} sm={8}  md={8} sx={{  margin: 'auto', flexGrow: 1 }}>
                   
 <Paper sx={{  margin: 'auto', flexGrow: 1 }}>
 <Grid container sm={12} spacing={2}>
        <Grid item >
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="./salon.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs sm container>
          <Grid item xs spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>

            <Grid container>
                <Grid item>

            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>

          </Grid>

            <Grid item>
            <Button color="error" size="small" startIcon={<DeleteIcon />}/>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      </Grid>

<Divider />
<Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="/static/images/grid/complex.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
          </Grid>
        </Grid>
      </Grid>


    </Paper>
   </Grid>
            

        

          


            <Grid item xs={12} sm={12} md={4} >
                <Box sx={{ width: '100%', textAlign:'center' }}>
                    <Paper >
                        <Box sx={{ width: '100%' }}    >
                            <Box sx={{ width: '100%' }} mb="15px"  mt="15px" >
                                <Typography variant="h6" component="span"  >Total :</Typography>
                                <Typography variant="h6" component="span"  > 9,99€</Typography>
                            </Box>



                            <Box sx={{ width: '100%' }}  >
                                <Button variant="contained" > Valider mon panier</Button>
                            </Box>
                            <Box sx={{ width: '100%' }} pt="10px" >
                                <Button  color="info"> Continue mes achat</Button>
                            </Box>
                        </Box>
                    </Paper>

                </Box>
                </Grid>
                </Grid>

</Box>



                )





}