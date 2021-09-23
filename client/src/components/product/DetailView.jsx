import { Box, makeStyles, Typography, Table, TableBody, TableCell, TableRow, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductDetails } from '../../redux/actions/productActions';
import { LocalOffer as Badge } from '@material-ui/icons';
import clsx from 'clsx';

//component
import ActionItems from './ActionItems';

const useStyle = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        //margin: ' 0 80px',
        background: '#F2F2F2',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    smallText: {
        fontSize: 14,
        verticalAlign: 'baseline',
        '& > *': {
            fontSize: 14,
            marginTop: 10
        }
    },
    greyTextColor: {
        color: '#878787'
    },
    price: {
        fontSize: 28
    },
    badge: {
        fontSize: 14,
        marginRight: 10,
        color: '#00CC00'
    },
}));

const DetailView = ({ match }) => {
    const classes = useStyle();

    const { product } = useSelector(state => state.getProductDetails);

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductDetails(match.params.id));
    }, [dispatch])

    return (
        <Box className={classes.component}>
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12} >
                        <ActionItems product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.smallText, classes.greyTextColor)}>
                            8 ratings & 1 review

                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span> &nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>  &nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>₹{product.price.discount} off</span>
                        </Typography>
                        <Typography style={{ marginTop: 20, fontWeight: 600 }}>Available Offers</Typography>
                        <Box className={classes.smallText}>
                            <Typography><Badge className={classes.badge} />Discount on SBI account</Typography>
                            <Typography><Badge className={classes.badge} />Get 30% off during morning booking</Typography>
                        </Box>

                        <Table>
                            <TableBody>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Delivery</TableCell>
                                    <TableCell style={{ fontWeight: 600 }}>{date.toDateString()} ₹40</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Warranty</TableCell>
                                    <TableCell>No Warranty</TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Seller</TableCell>
                                    <TableCell className={classes.smallText}>
                                        <span style={{ color: '#2874F0' }}>ttaa</span>
                                        <Typography>GST invoice available</Typography>
                                        <Typography> 14 Days Return Policy</Typography>
                                        <Typography>View more seller starting from ₹300 </Typography>
                                    </TableCell>
                                </TableRow>
                                <TableRow className={classes.smallText}>
                                    <TableCell className={classes.greyTextColor}>Description</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default DetailView;