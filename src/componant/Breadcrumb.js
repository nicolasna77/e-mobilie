import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';

export default function AppBreadcrumbs() {
    const navigate = useNavigate();
    const location = useLocation();

    let currentRoutes = []

    currentRoutes = location.pathname !== '/' ? location.pathname.split('/') : [];

    if (currentRoutes.length > 0) {
        currentRoutes.shift();
        return (
            <Box pt={{ xs: 3, md: 3 }} pl={{ xs: 3, md: 5 }}>
        <Breadcrumbs aria-label="breadcrumb" style={{ marginBottom: 15 }}>
        <Link color="inherit" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        Accueil
        </Link>
        {
        currentRoutes.length === 1
        ? <Typography color="textPrimary">{currentRoutes[0]}</Typography>
        : currentRoutes.map((route, index) => {
        return (index !== currentRoutes.length - 1
        ? <Link key={index} color="inherit" style={{ cursor: 'pointer' }} onClick={() => {
        navigate(route)
        }} >
        {route}
        </Link>
        : <Typography key={index} color="textPrimary">{route}</Typography>)
        })
        }
        </Breadcrumbs>
        </Box>
        );
        }
        else
          return <></>
  }