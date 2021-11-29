import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import InputLabel from '@mui/material/InputLabel';
// import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


// const Img = styled('img')({
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
// });




export default function ListPanier() {
    // const [Quantiter, setQuantiter] = React.useState('');

    // const handleChange = (event) => {
    //     setQuantiter(event.target.value);
    // };


    return (
       <Box pt={{ xs: 8, md: 10 }}>
           <Grid container  md={10} sx={{  margin: 'auto', flexGrow: 1 }}>
            
             <Grid item xs={12} md={9}>
              
                <Box >
                    <Typography variant="body1" component="div">Total Articles : 2 Articles</Typography>
                </Box>
    </Grid>

 <Grid container xs={10} sm={8}  md={8} sx={{  margin: 'auto', flexGrow: 1 }}>
                   
 <Paper sx={{  margin: 'auto', flexGrow: 1 }}>
 <Grid container sm={12} >

<Grid item>
1
</Grid>

<Grid item>
3
</Grid>
<Grid item>
2
</Grid>

      </Grid>




    </Paper>
   </Grid>
            

        

          


            <Grid item xs={12} sm={12} md={3} >
                <Box sx={{ width: '100%', textAlign:'center' }}>
                    <Paper >
                        <Box sx={{ width: '100%' }}    >
                            <Box sx={{ width: '100%' }} mb="15px"  mt="15px" >
                                <Typography variant="h6" component="span"  >Total :</Typography>
                                <Typography variant="h6" component="span"  > 9,99€</Typography>
                            </Box>



                            <Box sx={{ width: '100%' }}  >
                                <Button variant="contained" color="secondary"> Valider mon panier</Button>
                            </Box>
                            <Box sx={{ width: '100%' }} pt="10px" >
                                <Button  color="secondary" > Continue mes achat</Button>
                            </Box>
                        </Box>
                    </Paper>

                </Box>
                </Grid>
                </Grid>

</Box>



                )





}