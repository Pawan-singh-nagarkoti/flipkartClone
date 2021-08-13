import {Box, Typography, makeStyles} from '@material-ui/core';
import {navData} from '../image/NavbarImage'


const useStyle= makeStyles (theme => ((
    {
        navbarCenter:{
            display: 'flex',
            margin: '55px 0 0 0',
            justifyContent: 'space-between',
            overflowX: 'overlay',
            [theme.breakpoints.down('md')]: {
                margin: 0
            },
        },
        navContainer:{
            textAlign: 'center',
            padding: '12px 8px'
        },
        image:{
            width: 64
        }
    }
)));

const Navbar= ()=>{
    const classes= useStyle()
    return(
        <>
            <Box className={classes.navbarCenter}>
                {
                    navData.map((element)=>{
                        return(
                            <>
                            <Box className={classes.navContainer}>
                                <img src={element.url} alt="navbar item image" className={classes.image}/>
                                <Typography>{element.text}</Typography>
                            </Box>
                            </>
                        )
                    })
                }
            </Box>
        </>
    )
}

export default Navbar;