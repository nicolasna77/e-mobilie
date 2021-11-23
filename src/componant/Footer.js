import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export default function Footer() {
  return (
    <footer>
    <Box
      pt={{ xs: 3, md: 5 }}
    //  py={{ xs: 5, sm: 12 }}
      bgcolor="text.primary"
      color="grey.400"
    >
        
              <Grid container justifyContent="center">
                  <Grid item justifyContent="center">

                      <div>
                          <img class="logoHeader" alt="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
                      </div>
                  </Grid>
              </Grid>
      <Container >
 
<Box  pt={{ xs: 3, md: 5 }}>
        <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={4} sm={4} md={2}>
            <Box margin="0 auto" >
                <Typography gutterBottom variant="h6" color="grey." component="div">Aide</Typography>
                </Box>
            
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Nous Contacter
              </Link>
            </Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Support
              </Link>
            </Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Box >   
                 <Typography gutterBottom variant="h6" component="div">Compte</Typography>
                 </Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Connection
              </Link>
            </Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                S'enregistrer
              </Link>
            </Box>
          </Grid>
          <Grid item xs={4} sm={4} md={2}>
            <Box pb={{ xs: 1, md: 1 }} >
                <Typography gutterBottom variant="h6" component="div">
                Pages
</Typography>
</Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Home
              </Link>
            </Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Produit
              </Link>
            </Box>
            <Box pb={{ xs: 1, md: 1 }}>
              <Link href="/" underline="hover" color="inherit">
                Compte
              </Link>
            </Box>
          </Grid>
        </Grid>
        </Box>




        <Box textAlign="center" color="grey.700" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 3 }}>
          Sirio.com &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
  );
}