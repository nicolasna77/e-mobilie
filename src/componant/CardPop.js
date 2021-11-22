import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import CardActions from '@mui/material/CardActions';
import { data } from '../data.js';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Chip from '@mui/material/Chip';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import ClickAwayListener from '@mui/material/ClickAwayListener';


// import handleClick from 'react';

class FavoriteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoriteIcon: false,
        }
    }

    render() {
        return (
            <IconButton className="buttonFavorite" onClick={() => this.setState({ favoriteIcon: !this.state.favoriteIcon })}>
                {this.state.favoriteIcon ? <Favorite color='error' /> : <FavoriteBorderIcon />
                }

            </IconButton>
        );
    }

}


export default function CardPop() {

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

        <Box sx={{ flexGrow: 1 }}>
            <Grid container margin="0 auto" textAlign="center" xs={12} sm={12} md={11}  >

                <Grid item xs={6} sm={4} md={2} >
                    <div className="titleCardPop">
                        <Typography gutterBottom variant="h5" component="div">
                            Produits populaires
                        </Typography>

                        <Divider className="divider" />

                    </div>
                </Grid>
                <Grid container xs={3} sm={6} md={9}  >

                </Grid>
                <Grid container xs={3} sm={2} md={1}  >


                    <Grid item xs={6} sm={6} md={6} >
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
                                role={undefined}
                                placement="bottom-start"
                                transition
                                disablePortal
                                className="menuFilter"
                            >

                                {({ TransitionPropsFilter, placementFilter }) => (

                                    <Grow
                                        {...TransitionPropsFilter}
                                        style={{
                                            transformOrigin:
                                            placementFilter = 'right top',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleCloseFilter}>
                                                <MenuList
                                                    autoFocusItem={openFilter}
                                                    id="menuFilter"
                                                    aria-labelledby="filter-button"
                                                >
                                                    <MenuItem onClick={handleCloseFilter}>Prix croissants</MenuItem>
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



            <Grid container margin="0 auto" xs={12} sm={12} md={10} spacing={2}>

                {data.map((data, i) => {
                    return (

                        <Grid item id={i} xs={6} sm={4} md={3}>

                            <Card sx={{ maxWidth: 300 }} className="cardProduct">

                                <FavoriteButton />


                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="170"
                                        image={process.env.PUBLIC_URL + '/SalleDeBain.jpg'}
                                        alt="green iguana"
                                    />

                                    <CardContent>
                                        <Grid container xs={12}  >

                                            <Grid item xs={8} >
                                                <div>
                                                    <Box >
                                                        <Rating
                                                            value={data.stars}
                                                            name="rating"
                                                            size="small"
                                                            readOnly
                                                            precision={0.5}
                                                        />
                                                    </Box>
                                                </div>
                                            </Grid>

                                            <Grid item xs={3} float="right" >
                                                <Chip label={data.category} variant="outlined" size="small" />
                                            </Grid>
                                        </Grid>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {data.title}
                                        </Typography>

                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </Typography>

                                        <Grid container alignItems="center" xs={12} spacing="3">

                                            <Grid container xs={12} sm={12} md={12}  >

                                                <CardActions >

                                                    <Grid item xs={2} sm={6} md={8} >




                                                    </Grid>

                                                </CardActions>
                                            </Grid>


                                            <Grid item xs={4} sm={4} md={4} >
                                                <Typography className="priceCardProduct" gutterBottom variant="h5" component="div">
                                                    13€
                                                </Typography>
                                            </Grid>
                                        </Grid>


                                    </CardContent>





                                </CardActionArea>

                            </Card>

                        </Grid>

                    )
                })}


            </Grid>
        </Box>
    );
}
