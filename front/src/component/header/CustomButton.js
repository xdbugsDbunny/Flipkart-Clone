import React from "react";
import { Box,Button, Typography, styled, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginDialog from "../login/LoginDialog";
import { useState, useContext} from "react";
import Profile from "./Profile";
import { DataContext } from "../../context/DataProvider";
import { useSelector } from "react-redux";

import {Link} from 'react-router-dom'
// Wrapper is Parent and using Css on child component
// Button is <button>, Typography is <p> tag, Box is <div> tag
const Wrapper=styled(Box)(({theme})=>({
    display:'flex',
    margin:'0 3% 0 auto',
    '& > button, & > p, & > div': {
        marginRight:'40px !important',
        fontSize:16,
        alignItems: 'center',
    },
    [theme.breakpoints.down('md')]:{
        display:'block',
    }
}))
const Container = styled(Link)(({theme})=>({
    display:'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{
        display: ' block',
    }
}))
const LoginButton=styled(Button)`
    color: #2874F0;
    background: #fff;
    text-transform:none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height:32px;
`
const CustomButton=()=>{

    const [open,setOpen]=useState(false);

    const {account,setAccount}=useContext(DataContext);

    const openDialog = () =>{
        setOpen(true);
    }

    const {cartItems}=useSelector(state=>state.cart);
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>

            }
            <Typography style={{marginTop:3, width: 135}}>Become a Seller</Typography>
            <Typography style={{marginTop:3}}>More</Typography>
            <Container to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}
export default CustomButton;