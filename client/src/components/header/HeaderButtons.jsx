import { useState, useContext } from 'react';
import { Box, Button, makeStyles, Typography, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

//component
import LoginDialog from '../login/Login';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
    login: {
        backgroundColor: '#ffffff',
        color: '#000000',
        textTransform: 'none',
        fontWeight: 600,
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
            background: '#2874f0',
            color: '#FFFFFF'
        }
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff',
            [theme.breakpoints.down('sm')]: {
                color: '#2874f0',
                alignItems: 'center',
                dislay: 'flex',
                flexDirection: 'column',
                marginTop: 10
            }
        },
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    },
    container: {
        display: 'flex',
        marginLeft: -15,
        [theme.breakpoints.down('sm')]: {
            display: 'block'
        }
    }
}));

const HeaderButtons = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const { cartItems } = useSelector(state => state.cart);

    const openLoginDialog = () => {
        setOpen(true);
    }

    return (
        <Box className={classes.wrapper}>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <Link>
                        <Button varient="contained" onClick={() => openLoginDialog()} className={classes.login}>Login</Button>
                    </Link>
            }
            <Link><Typography style={{ marginTop: 5 }}>More</Typography></Link>
            <Link to='/cart' className={classes.container}>
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }} >Cart</Typography>
            </Link>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButtons;