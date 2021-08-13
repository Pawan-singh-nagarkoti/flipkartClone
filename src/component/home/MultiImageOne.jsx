import { products } from "../image/MultiCarousel";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { makeStyles, Box, Typography } from "@material-ui/core";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const useStyle= makeStyles({
    image:{
        height: 150,
        padding: '15px 10px'
    }
})

const MultiImageOne= ()=>{
    const classes= useStyle();
    return(
        <>
        <Box style={{background: '#ffffff'}}>
            <Carousel responsive={responsive}
                infinite= {true}
                draggable= {false}
                swipeable= {false}
                centerMode= {true}
                autoPlay= {true}
                autoPlaySpeed= {10000}
                keyBoardControl= {true}
                showDots= {false}
                // removeArrowOnDeviceType= {['tablet','mobile']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <Box style={{textAlign: 'center'}}>
                            <img src={product.url} alt="image"
                            className={classes.image} />
                            <Typography>{product.title.shortTitle}</Typography>
                            <Typography style={{color: 'green'}}>{product.discount}</Typography>
                            <Typography style={{color: '#212121', opacity: '.6'}}>{product.tagline}</Typography>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>
        </>
    )
}

export default MultiImageOne;