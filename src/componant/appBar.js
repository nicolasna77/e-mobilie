import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function PrimarySearchAppBar() {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setAnchorEl(null);
  }



  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="default" position="relative"  >
        <Toolbar>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}>

              <MenuIcon />

            </IconButton>

          </Box>

          <div>
            <img onClick={() => navigate('/')} class="logoHeader" alt="logo" src={process.env.PUBLIC_URL + '/logo.png'} />
          </div>

          <Box sx={{ marginLeft: "20px", alignSelf: "center" }} >
            <Button size="large" variant="" color="primary" aria-label="menu" >

              <Box sx={{ marginRight: "20px" }} >
                <Typography variant="caption"> Categorie</Typography>
              </Box>
              <ArrowDropDownIcon />
            </ Button>
          </Box>

          <Grid container justifyContent="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>


            <Paper component="form" elevation="0" sx={{ borderRadius: "26px", maxWidth: "600px", border: "1px solid #dbdbdb" }} >
              <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Recherche" inputProps={{ 'aria-label': 'Recherche' }} />


            </Paper>

          </Grid>


          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: { xs: 'none', md: 'flex', sm: 'flex' } }}>
            <IconButton onClick={() => navigate('/Panier')} size="large" >
              <Badge badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" onClick={handleClick}  >
              <PersonIcon />
            </IconButton>

          </Box>


          {/* version mobile */}



          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton size="large" >
              <SearchIcon />
            </IconButton>

            <IconButton size="large" onClick={() => navigate('/Panier')} >
              <Badge badgeContent={4} color="secondary" >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>


            <IconButton onClick={handleClick} size="large"  >
              <PersonIcon />
            </IconButton>
          </Box>


          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 1,
                sx: {

                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',

                  },
                },
              }}

              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} >


              <MenuItem onClick={() => navigate('/Inscription')}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                S'inscrire
              </MenuItem>
              <MenuItem onClick={() => navigate('/Connection')}>
                <ListItemIcon >
                  <LockIcon fontSize="small" />
                </ListItemIcon>
                Connection
              </MenuItem>

            </Menu>

          </Box>


        </Toolbar>

      </AppBar>

    </Box>
  );
}