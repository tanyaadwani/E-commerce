
import { Box, makeStyles } from '@material-ui/core';

//component
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./slide";
import MidSection from './MidSection';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProducts as listProducts } from '../../redux/actions/productActions';

//import { products } from '../../constants/data';

const useStyle = makeStyles({
    component: {
        padding: 10,

    }
})


const Home = () => {
    const classes = useStyle();

    const { products } = useSelector(state => state.getProducts)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box style={{ width: '99%' }}>
                        <Slide
                            button={true}
                            title="Deal of the day."
                            products={products}
                        />
                    </Box>
                </Box>
                <MidSection />
                <Slide
                    button={false}
                    title="GAMING LAPTOP."
                    products={products}
                />
                <Slide
                    button={false}
                    title="RAM"
                    products={products}
                />

            </Box>

        </div>
    )
}

export default Home;