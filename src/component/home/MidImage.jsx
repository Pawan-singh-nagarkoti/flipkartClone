import {ImageURL} from '../image/MidSection'
import {Box, makeStyles, Grid} from '@material-ui/core'

const useStyle= makeStyles( {
    container:{
        display: 'flex',
        marginTop: 20,
        justifyContent: 'space-between',
    },
});


const MidImage= ()=>{
    const classes= useStyle();
    return(
        <>
            <Grid lg={12} sm={12} md={12} xs={12} container className= {classes.container}>
                {
                    ImageURL.map((image)=>{
                        return(
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <img src={image} style={{width: '100%'}}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default MidImage;