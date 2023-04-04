import NavBar from './NavBar';
import { Fragment,useEffect } from 'react';
// Fragment alag node create ni krta and ye <div> se fast hote hai
import Banner from './Bannner';
import { Box,styled } from '@mui/material';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch,useSelector } from 'react-redux';
import Slide from './Slides';
import MidSilde from './MidSlide';
import MidSection from './MidSection';

const Component=styled(Box)`
    padding:10px;
    background: #F2F2F2;
`

const Home=()=>{

    const {products}=useSelector(state=>state.getProducts)
    //const {products}= getProducts;//object Destructuring process

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getProducts())
        // getProducts() agar directly call karunga tw chalega ni dispatch will be defined
        //getProducts() is a proper function for this we will use useDispatch()
    },[dispatch])

    //jaisi dispatch call hoga ye call karega getProducts(action se ) ko
    //getProducts call karega API ko jo database se data layengi aur values dispatch kr dega
    //eske baad values jayegi reducers pe aur switch case ke according ye REDUX_STORE pe store ho jayengi  
    //store ke data ko nikalengey Componenets pe
    return(
        <Fragment>

            <NavBar></NavBar>
            <Component>
                <Banner></Banner>
                <MidSilde products={products} title="Deal Of The Day" timer={true}/>
                <MidSection></MidSection>
                <Slide products={products} title=" Discounts For You" timer={false}/>
                <Slide products={products} title="Suggestions For You" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommeneded Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's Top Picks" timer={false}/>
                <Slide products={products} title="Top Deals On Asccessories" timer={false}/>
            </Component>
        </Fragment>
    )
}

export default Home;