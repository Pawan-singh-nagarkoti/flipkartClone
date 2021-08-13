import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../image/BannerCarousel';
import { makeStyles } from '@material-ui/core';

const useStyle= makeStyles (theme => ((
    {
        images:{
            width: '100%',
            height: 280,
            [theme.breakpoints.down('sm')]: {
                objectFit: 'cover',
                height: 180
            },
        }
    }
)));

const Banner= ()=>{
    const classes= useStyle();
    return(
        <>
            <Carousel
                autoPlay={true}
                animation= 'slide'
                indicators= {false}
                navButtonsAlwaysVisible= {true}
                cycleNavigation= {true}
            >
            {
                bannerData.map( image=>(
                    <img src={image} className={classes.images}/>
                ))
            }
            </Carousel>
        </>
    )
}

export default Banner;