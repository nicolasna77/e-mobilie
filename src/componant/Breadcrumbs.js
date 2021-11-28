import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <Box pt={{ xs: 3, md: 3 }} pl={{ xs: 3, md: 5 }}>
    <div  onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
      <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Accueil / Panier
        </Typography>
      </Breadcrumbs>
    </div>
    </Box>
  );
}