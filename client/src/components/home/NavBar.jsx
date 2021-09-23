import { navData } from '../../constants/data';
import { Box, Typography, makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    component: {
        display: 'flex',
        marginTop: '60px',
        marginLeft: '75px',
        marginBottom: '0',
        marginRight: '75px',
        justifyContent: 'space-between',
        overflowX: 'overlay',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    container: {
        textAlign: 'center',
        padding: '15px 8px'
    },
    images: {
        width: 64,

    },
    text: {
        fontsize: 5,
        fontWeight: 'bold',

    }
}));

const NavBar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <img src={data.url} className=
                            {classes.images} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }


        </Box>
    )
}

export default NavBar;