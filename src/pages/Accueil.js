import * as React from "react";
import CardPiece from "../componant/CardPiece";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SortIcon from "@mui/icons-material/Sort";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import CardPop from "../componant/CardPop";
import { data } from "../data.js";
import Box from "@mui/material/Box";

function Accueil() {
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
    if (
      anchorRefFilter.current &&
      anchorRefFilter.current.contains(event.target)
    ) {
      return;
    }

    setOpenFilter(false);
  };

  return (
    <div>
      <CardPiece />
      <Box pt={{ xs: 3, md: 3 }} pl={{ xs: 5, md: 5 }}></Box>

      <div>
        <Grid
          container
          sx={{ maxWidth: [1200], margin: "0 auto", paddingTop: "15px" }}
          xs={12}
          sm={12}
          md={12}
        >
          <Grid container xs={6} sm={6} md={8}>
            <div className="titleCardPop">
              <Typography gutterBottom variant="h6" component="div">
                Produits populaires
              </Typography>

              <Divider className="divider" />
            </div>
          </Grid>
          <Grid container xs={3} sm={4} md={2.9}></Grid>

          <Grid container xs={3} sm={2} md={1.1}>
            <Grid item margin="0 auto!important">
              <div>
                <IconButton
                  className="iconFilter"
                  ref={anchorRefFilter}
                  id="filter-button"
                  aria-controls={openFilter ? "menuFilter" : undefined}
                  aria-expanded={openFilter ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                >
                  <FilterAltIcon />
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
                        transformOrigin: (placement = "right top"),
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleCloseFilter}>
                          <MenuList
                            autoFocusItem={openFilter}
                            id="menuFilter"
                            aria-labelledby="filter-button"
                          >
                            <MenuItem onClick={handleCloseFilter}>
                              hrthrhr
                            </MenuItem>
                            <MenuItem onClick={handleCloseFilter}>
                              Prix d??croissants
                            </MenuItem>
                            <MenuItem onClick={handleCloseFilter}>
                              Notes croissantes
                            </MenuItem>
                            <MenuItem onClick={handleCloseFilter}>
                              Notes d??croissantes
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </div>
            </Grid>

            <Grid item margin="0 auto!important">
              <div>
                <IconButton
                  ref={anchorRef}
                  id="composition-button"
                  aria-controls={open ? "composition-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
                  className="iconSort"
                >
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
                        transformOrigin: (placement = "right top"),
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                          >
                            <MenuItem onClick={handleClose}>
                              Prix croissants
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Prix d??croissants
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Notes croissantes
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              Notes d??croissantes
                            </MenuItem>
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
        <div>
          <Box
            pt={{ xs: 3, md: 3 }}
            pb={{ xs: 5, md: 10 }}
            sx={{
              maxWidth: [1100],
              margin: "0 auto!important",
              padding: "10px",
            }}
          >
            <Grid container spacing={3}>
              {data.map((data) => {
                return <CardPop {...data} />;
              })}
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
