import { useState } from 'react';
import { Dialog, DialogContent, Button, TextField, makeStyles, Box, Typography } from '@material-ui/core'
import { authenticateSignup, authenticateLogin } from '../../service/api';

const useStyle = makeStyles({
    component: {
        height: '70vh',
        width: '90vh',

    },
    image: {
        backgroundImage: `url(${'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/graphicstock-creative-illustration-of-smartphone-with-other-infographic-elements-for-online-shopping-concept_BJLIyH4h6e_thumb.jpg'})`,//url image
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#85C1E9',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& >*': {
            color: '#FFFFFF',
            fontWeight: 600,
        }
    },

    login: {
        padding: '20px 20px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& >*': {
            marginTop: 20
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginBtn: {
        textTransform: 'none',
        background: '#5DADE2',
        color: '#fff',
        height: 48,
        borderRadius: 2
    },
    requestBtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createText: {
        margin: 'auto 0 5px 0',
        textAlign: 'center',
        color: '#2874f0',
        fontWeight: 600,
        fontSize: 14,
        cursor: 'pointer'
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        lineHeight: 0,
        marginTop: 10,
        fontWeight: 600
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you are new here!',
        subheading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: ''
}
const loginInitialValues = {
    username: '',
    password: ''
}


const Login = ({ open, setOpen, setAccount }) => {

    const classes = useStyle();

    const [account, toggleAccount] = useState(initialValue.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(initialValue.login)
    }

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup)
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.username);
    }

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) {
            setError(true);
            return
        }
        handleClose();
        setAccount(login.username);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogContent className={classes.component}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                                <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                {error && <Typography className={classes.error}>Invalid username or password</Typography>}
                                <Typography className={classes.text}>By continuing, you agree to Digisonic's term of use and Privacy Policy</Typography>
                                <Button variant="contained" onClick={() => loginUser()} className={classes.loginBtn}>Login</Button>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <Button varient="contained" className={classes.requestBtn}>Request OTP</Button>
                                <Typography onClick={() => toggleUserAccount()} className={classes.createText}>New to Digisonic? Create an Account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter lastname' />
                                <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter username' />
                                <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter password' />
                                <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter phone number' />
                                <Button varient="contained" onClick={() => signupUser()} className={classes.loginBtn}>Sign up</Button>
                            </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;