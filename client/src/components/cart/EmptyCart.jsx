import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { CallMissedSharp } from "@material-ui/icons";
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        margin: '90px 180px',
        width: '80%',
        background: '#fff',
        height: '65vh',

    },
    image: {
        width: '15%'
    },
    container: {
        textAlign: 'center',
        paddingTop: 70,
        '& > *': {
            marginTop: 10,
            fontSize: 14,
        }
    },
    button: {
        marginTop: 20,
        padding: '12px 70px',
        borderRadius: 2,
        fontSize: 14,
        background: '#287480',
        color: '#fff'
    }
})

const EmptyCart = () => {
    const emptycarturl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    const classes = useStyle();
    const history = useHistory();

    const addItem = () => {
        history.push('/');
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.container}>
                <img src={emptycarturl} className={classes.image} />
                <Typography>Your cart is Empty</Typography>
                <Typography>Add items to it Now</Typography>
                <Button className={classes.button} varient="contained" onClick={() => addItem()}>Shop now</Button>
            </Box>
        </Box>
    )
}

export default EmptyCart;