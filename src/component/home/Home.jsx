import Navbar from './Navbar';
import Banner from './Banner';
import {Box, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'
import MultiImageOne from './MultiImageOne'
import MidImage from './MidImage'


// advertisement image
const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';


// covid image
const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


const useStyle= makeStyles( theme => ({
    bannerCarousel:{
        padding: 10,
        background: '#f2f2f2',
    },
    component: {
        display: 'flex',
    },
    leftWraper : {
        width: '80%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    rightWraper:{
        background: '#ffffff',
        padding: 6,
        margin: '0 0 0 7px',
        width: '18%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    }

}));

const Home= ()=>{
    const classes= useStyle();
    return(
        <>
            <Navbar/>
            <Box className={classes.bannerCarousel}>
                <Banner/>
                <Box className={classes.component}>
                    <Box className={classes.leftWraper}>
                        <MultiImageOne/>
                    </Box>
                    <Box className={classes.rightWraper}>
                        <img src={adURL} alt="advertisement image" style={{width: 188}}/>
                    </Box>
                </Box>
                <Divider/>
                <MidImage/>
                <MultiImageOne/>
                <Divider/>
                <Box>
                    <img src={coronaURL} alt="covid image" style={{width: '100%', margin: '5px 0'}}/>
                </Box>

            </Box>
        </>
    )
}

export default Home;