
import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import {addToCart} from "../../redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LeftContainer = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]:{
        padding: '20px 40px',
    }
}))

const Image = styled('img')(({theme})=>({
    padding: '15px',
    border: '1px solid #F0F0F0',width: '90%'
}))
const StyleButton = styled(Button)(({theme})=>({
    width: '48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]:{
        width: '46%',
    },
    [theme.breakpoints.down('md')]:{
        width: '48%',
    }
}))
const ActionItem = ({ product }) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [quantity,setQuantity]=useState(1);

    const {id} = product;
    const addItemtoCart = ()=>{
        dispatch(addToCart(id,quantity))
        navigate('/cart')
    }

    return(
            <LeftContainer>
                <Box style={{padding: '15px 20px',}}>
                    <Image src={product.detailUrl}></Image>
                </Box>
                <StyleButton variant="contained" style={{marginRight: 10,background: '#FF9F00'}} onClick={()=>addItemtoCart()}><ShoppingCartIcon/>Add To Cart</StyleButton>
                <StyleButton variant="contained" style={{background: '#FB541B'}}><FlashOnIcon/>Buy Now</StyleButton>
            </LeftContainer>
        )
}

export default ActionItem;