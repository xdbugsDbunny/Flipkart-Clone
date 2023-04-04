import { Grid, Typography,Box,styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    background: ' #FFF',
    [theme.breakpoints.down('md')]:{
        padding: '15px 0',
    }
}))

const Header = styled(Box)(({theme})=>({
    padding: '15px 24px',
}))

const PlaceOrderWrapper = styled(Box)(({theme})=>({
    padding: '16px 22px',
    background: '#FFF',
    boxShadow: '0 -2px 10px 0 rgb(0 0 0 / 10%)',
    borderTop: '1px solid #F0F0F0',
}))

const StyledButton = styled(Button)(({theme})=>({
    display: 'flex',
    marginLeft: 'auto',
    background: '#fb641b',
    color: '#FFF',
    width: 250,
    height: 51,
    borderRadius: 2,
}))

const LeftGrid=styled(Grid)(({theme})=>({
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginBottom: 15,
    }
}))

const Cart = ()=>{
    const {cartItems} = useSelector(state=>state.cart)
    return(
        <>
            {
                cartItems.length ?
                <Container container>
                    <LeftGrid item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item=>(
                                <CartItems item={item}/>
                            ))
                        }
                        <PlaceOrderWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </PlaceOrderWrapper>
                    </LeftGrid>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems}/>
                    </Grid>
                </Container>
                :
                <EmptyCart></EmptyCart>
            }
        </>
    )
}

export default Cart;