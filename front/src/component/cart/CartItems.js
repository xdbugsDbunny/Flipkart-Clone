import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/commonUtils";
import QuantityButton from "./QuantityButton";
import {removeFromCart} from '../../redux/actions/cartAction'
import { useDispatch } from "react-redux";


const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    borderTop: '1px solid #F0F0F0',
    background: '#FFF',
}))
const LeftBox = styled(Box)(({ theme }) => ({
    margin: '20px',
    display: 'flex',
    flexDirection: 'column'
}))
const RightBox = styled(Box)(({ theme }) => ({
    margin: '20px',
}))
const SellerText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top:10px;
`
const Remove = styled(Button)`
    margin-top:20px;
    font-size:16px;
    color: #000;
    font-weight:600;
`
const CartItems = ({ item }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch=useDispatch();
    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id))
    }

    return (
        <Wrapper>
            <LeftBox>
                <img src={item.url} alt="products" style={{height:110}}/>
                <QuantityButton/>
            </LeftBox>
            <RightBox>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SellerText>
                    Seller: RetailNet
                    <Box component='span'><img src={fassured} style={{ width: 50, marginLeft: 10 }} /></Box>
                </SellerText>
                <Typography style={{margin: '20px 0'}}>
                    <Box component="span" style={{ fontWeight:600,fontSize:18 }}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#878787' }}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: '#388E3C' }}>{item.price.discount}off</Box>
                </Typography>
                <Remove onClick={()=>removeItemFromCart(item.id)}>Remove</Remove>
            </RightBox>
        </Wrapper>
    )
}

export default CartItems;