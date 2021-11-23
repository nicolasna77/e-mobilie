import * as React from 'react';
import './App.css';
import PrimarySearchAppBar from './componant/appBar';
import CardPiece from './componant/CardPiece';
import Header from './componant/header'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';


function App() {

  const [open, setOpen] = React.useState(false);
  const [openFilter, setOpenFilter] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorRefFilter = React.useRef(null);

  const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
  };

  const handleToggleFilter = () => {
      setOpenFilter((prevOpenFilter) => !prevOpenFilter);
  };


  const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
          return;
      }

      setOpen(false);
  };

  const handleCloseFilter = (event) => {
      if (anchorRefFilter.current && anchorRefFilter.current.contains(event.target)) {
          return;
      }

      setOpenFilter(false);
  };


  return (
<div>
        <div>
          <PrimarySearchAppBar></PrimarySearchAppBar>
        </div>
        <div className="cardPiece">
          <CardPiece/>
        </div>
        <div>
   
          <Grid container  sx={{ maxWidth: [  1200], margin:"0 auto" }}  xs={12} sm={12} md={12}  >

              <Grid container xs={6} sm={6} md={8}  >
                  <div className="titleCardPop">
                      <Typography gutterBottom variant="h5" component="div">
                          Produits populaires
                      </Typography>

                      <Divider className="divider" />
                  </div>
                  
              </Grid>
              <Grid container  xs={3} sm={4} md={2.5}  >
              </Grid>

              <Grid container   xs={3} sm={2} md={1.5}  >


                  <Grid item margin="0 auto!important" xs={6} sm={6} md={6} >
                      <div>
                          <IconButton 
                              className="iconFilter" 
                              ref={anchorRefFilter}
                              id="filter-button"
                              aria-controls={openFilter ? 'menuFilter' : undefined}
                              aria-expanded={openFilter ? 'true' : undefined}
                              aria-haspopup="true"
                              onClick={handleToggleFilter} >
                              <  FilterAltIcon />
                          </IconButton>

                          <Popper
                              openFilter={openFilter}
                              anchorEl={anchorRefFilter.current}
                              placement="bottom-start"
                              transition
                              disablePortal
                              className="menuFilter"
                          >

                              {({ TransitionProps, placement }) => (

                                  <Grow
                                      {...TransitionProps}
                                      style={{
                                          transformOrigin:
                                          placement = 'right top',
                                      }}
                                  >
                                      <Paper>
                                          <ClickAwayListener onClickAway={handleCloseFilter}>
                                              <MenuList
                                                  autoFocusItem={openFilter}
                                                  id="menuFilter"
                                                  aria-labelledby="filter-button"
                                              >
                                                  <MenuItem onClick={handleCloseFilter}>hrthrhr</MenuItem>
                                                  <MenuItem onClick={handleCloseFilter}>Prix décroissants</MenuItem>
                                                  <MenuItem onClick={handleCloseFilter}>Notes croissantes</MenuItem>
                                                  <MenuItem onClick={handleCloseFilter}>Notes décroissantes</MenuItem>
                                              </MenuList>
                                          </ClickAwayListener>
                                      </Paper>
                                  </Grow>
                              )}
                          </Popper>

                      </div>
                  </Grid>


                  <Grid item xs={6} sm={6} md={6} >
                      <div>
                          <IconButton ref={anchorRef}
                              id="composition-button"
                              aria-controls={open ? 'composition-menu' : undefined}
                              aria-expanded={open ? 'true' : undefined}
                              aria-haspopup="true"
                              onClick={handleToggle} className="iconSort" >
                              <SortIcon />
                          </IconButton>

                          <Popper
                              open={open}
                              anchorEl={anchorRef.current}
                              role={undefined}
                              placement="bottom-start"
                              transition
                              disablePortal
                              className="menuSort"
                          >

                              {({ TransitionProps, placement }) => (

                                  <Grow
                                      {...TransitionProps}
                                      style={{
                                          transformOrigin:
                                              placement = 'right top',
                                      }}
                                  >
                                      <Paper>
                                          <ClickAwayListener onClickAway={handleClose}>
                                              <MenuList
                                                  autoFocusItem={open}
                                                  id="composition-menu"
                                                  aria-labelledby="composition-button" >
                                                  <MenuItem onClick={handleClose}>Prix croissants</MenuItem>
                                                  <MenuItem onClick={handleClose}>Prix décroissants</MenuItem>
                                                  <MenuItem onClick={handleClose}>Notes croissantes</MenuItem>
                                                  <MenuItem onClick={handleClose}>Notes décroissantes</MenuItem>

                                              </MenuList>
                                          </ClickAwayListener>
                                      </Paper>
                                  </Grow>
                              )}
                          </Popper>

                      </div>
                  </Grid>


              </Grid>

          </Grid>


      </div>

      <div>
        <Header></Header>
      </div>
    </div>



  );
}

export default App;
