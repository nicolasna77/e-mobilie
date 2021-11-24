import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
      <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
           <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Accueil
        </Typography>
      </Breadcrumbs>
    </div>
  );
}