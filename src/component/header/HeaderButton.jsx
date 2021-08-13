import {useState} from 'react';
import {Box, Button, makeStyles, Typography, Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import LoginDialog from '../login/Login';
import {Link} from 'react-router-dom';

const useStyle= makeStyles( theme => ({
    login:{
        background: '#ffffff',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: "#2874f0",
            color: '#ffffff'

        },
    },
    wraper:{
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: 'white',
            [theme.breakpoints.down('sm')]: {
                color: "#2874f0",
                display: 'flex',
                alignItems: 'center',
                flexDirection:'column',
                marginTop: 10

            },
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },

    },
    cartItem:{
        display: 'flex',
    }
}));

const HeaderButton= ()=>{
    const classes= useStyle();

    // create hook for dialog
    const[open, setopen]= useState(false);
    const openLoginDialog= ()=>{
        setopen(true)
    }


    return(
        <>
            <Box className={classes.wraper}>
                <Link> <Button variant='contained' className={classes.login}
                    onClick= {()=>{
                        openLoginDialog()
                    }}
                >Login </Button> </Link>
                <Link> <Typography>More</Typography> </Link>
                <Link to='/cart' className={classes.cartItem}>
                    <Badge badgeContent={1} color='secondary'>
                        <ShoppingCart/>
                    </Badge>
                    <Typography style={{marginLeft: 10}}>Cart</Typography>
                </Link>
                <LoginDialog open={open} setopen= {setopen}/>
            </Box>
        </>
    )
}

export default HeaderButton;