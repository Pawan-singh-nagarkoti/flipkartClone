import {useState} from 'react';
import {Dialog, DialogContent, makeStyles, Box, Typography, TextField , Button} from '@material-ui/core';

const useStyle=  makeStyles({
    component: {
        width: '90vh',
        height: '70vh'
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *':{
            marginTop: 10
        }
    },
    text: {
        color: '#878787',
        fontSize: 14
    },
    loginBtn: {
        textTransfrom: 'none',
        background: '#FB641B',
        color: '#ffffff',
        height: 48,
        borderRadius: 2
    },
    requestBtn:{
        textTransfrom: 'none',
        background: '#FFFFFF',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgba(0 0 0 / 20%)'
    },
    createText: {
        textAlign: 'center',
        marginTop: '2rem',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'
    }
})

const Login= ({open, setopen})=>{
    const classes= useStyle();

    const [account, setAccount] = useState('login');

    const handleclose= ()=>{
        setopen(false);
        setAccount('login')
    }

    const toggleAccount= ()=>{
        setAccount('signup')
    }

    return(
        <>
            <Dialog open= {open} onClose= {handleclose}>
                <DialogContent className= {classes.component}>
                {
                    account === 'login' ?
                    <Box className={classes.login}>
                        <TextField name="username" placeholder='Enter Email/Mobile Number'/>
                        <TextField name='password' placeholder= 'Enter Password'/>
                        <Typography className= {classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <Button variant= 'contained' className={classes.loginBtn}>Login</Button>
                        <Typography style={{textAlign: 'center'}} className= {classes.text}>OR</Typography>
                        <Button variant= 'contained' className={classes.requestBtn}>Requsst OTP</Button>
                        <Typography className={classes.createText}
                        onClick= {()=> toggleAccount()} >New to Flipkart? Create an account</Typography>
                    </Box> :

                    <Box className={classes.login}>
                        <TextField name="username" placeholder='Enter Firstname'/>
                        <TextField name="username" placeholder='Enter Lastname'/>
                        <TextField name='password' placeholder= 'Enter Password'/>
                        <TextField name="username" placeholder='Enter Username'/>
                        <TextField name='password' placeholder= 'Enter Email'/>
                        <TextField name="username" placeholder='Enter Password'/>
                        <TextField name='password' placeholder= 'Enter Phone number'/>
                        <Button variant= 'contained' className={classes.loginBtn}>sign UP</Button>
                    </Box>
                }
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Login;