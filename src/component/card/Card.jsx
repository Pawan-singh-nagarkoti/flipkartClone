import {makeStyles, Box} from '@material-ui/core';
const useStyle= makeStyles({
    container: {
        margin: '0 80px',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        fontSize: '50px',
        color: 'rgb(33, 33, 33)',
        opacity: 0.6
    }
})


const Cart= ()=>{
    const classes= useStyle();
    return(
        <>

                <Box className={classes.container}>
                    <Box>
                        No Items Is Add On The Cart...
                    </Box>
                </Box>
        </>
    )
}
export default Cart;