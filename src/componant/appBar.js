import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';

// import MailIcon from '@mui/material/Mail'
// import MailIcon from '@mui/icons-material/mail';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import {  Grid } from '@mui/material';
import {  useNavigate } from 'react-router-dom';






export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
 
  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  const menuId = 'seconde-search-account-menu';

  
  const mobileMenuId = 'primary-search-account-menu-mobile';


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="relative" style={{ flexWrap: 'wrap'}} >
        <Toolbar>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
           
          >
            <MenuIcon />
          </IconButton>
          </Box>
        <div>
        <img onClick={() => navigate('/')} class="logoHeader" alt="logo" src={process.env.PUBLIC_URL + '/logo.png'} /> 
        </div>

   
<Grid container justifyContent="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Paper component="form" >
              <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
              </IconButton>
           
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Recherche" inputProps={{ 'aria-label': 'Recherche' }}
              />
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>

            </Paper>

  </Grid>
    
     
          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex', sm:'flex' } }}>
            <IconButton onClick={() => navigate('/Panier')} size="large" >
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button onClick={() => navigate('/Connection')} color="inherit">S'identifier</Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <IconButton size="large" >
                <SearchIcon/>
            </IconButton>
            
          <IconButton size="large"  > 
          <Badge badgeContent={4} color="secondary" onClick={() => navigate('/Panier')}>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
        
          <Button onClick={() => navigate('/Connection')} color="inherit">S'identifier</Button>
          </Box>
        </Toolbar>
      </AppBar>
    
    </Box>
  );
}