import React from 'react';
import {AppBar, Toolbar, makeStyles, Typography,Box, IconButton, Drawer, ListItem, List} from '@material-ui/core';
import SearchBox from './SearchBox';
import HeaderButton from './HeaderButton'
import Menu from '@material-ui/icons/Menu';

import {Link} from 'react-router-dom';
import {useState} from 'react';

// material css overide
const useStyle= makeStyles( theme => ({
    header:{
        background: '#2874f0',
        height: 55
    },
    logo:{
        width: 75
    },
    subURL:{
        width: 10,
        marginLeft: 4,
        height: 10
    },
    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    component:{
        marginLeft: '12%',
        lineheight: 0,
        textDecoration: 'none',
        color: 'white'
    },
    subheading:{
        fontSize: 10,
        fontStyle: 'italic'
    },
    list: {
        width: 250
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        }
    },
    customButtons: {
        margin: '0 7% 0 auto',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }
    }
}));

const Header= ()=>{
    // material css overide
    const classes= useStyle();

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const[open, setOpen]= useState(false);
    const handleClose= ()=>{
        setOpen(false);
    }
    const handleOpen= ()=>{
        setOpen(true);
    }

    const list= ()=>{
        return(
            <>
                <Box className={classes.list}>
                <List>
                    <ListItem>
                        <HeaderButton/>
                    </ListItem>
                </List>
                </Box>
            </>
        )
    }

    return(
        <>
            <AppBar className={classes.header}>
                <Toolbar>
                    <IconButton
                        color= 'inherit'
                        className={classes.menuButton}
                        onClick= {handleOpen}
                    >
                        <Menu/>
                    </IconButton>

                    <Drawer open={open} onClose={handleClose}>
                        {list()}
                    </Drawer>

                    <Link to='/' className={classes.component}>
                        <img src={logoURL} alt="flipkart logo" className={classes.logo}/>
                        <Box className={classes.container}>
                            <Typography className={classes.subheading}>Explore Plus</Typography>
                            <img src={subURL} alt="logo" className={classes.subURL} />
                        </Box>
                    </Link>
                    <SearchBox/>
                    <span className={classes.customButtons}>
                        <HeaderButton/>
                    </span>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;