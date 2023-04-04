import React from "react";
import {AppBar, Toolbar,Box, Typography, IconButton, Drawer, List, styled, ListItemButton} from '@mui/material';
import Search from "./Search";
import { Link } from "react-router-dom";
import {Menu} from '@mui/icons-material'
import { useState } from "react";
import CustomButton from './CustomButton'

const StyledHeader=styled(AppBar)`
    background: #27874f0;
    height: 55px;
`
const Logo=styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration: none;
    color: inherit;
`
//css Template String ke andar likhenge (`backtick`)
const Subheading=styled(Typography)`
    font-size:10px;
    font-style:italic;
`
// Using HTML tag in styled and css Object data bna ke likhengey and Css ke properties ko camelCase style me likhengey
const Pluslogo=styled('img')({
    width:10,
    height:10,
    marginLeft:4

})

const CustomButtonWrapper = styled(Box)(({theme})=>({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none',
    }
}))

const MenuButton=styled(IconButton)(({theme})=>({
    display: 'none',
    [theme.breakpoints.down('md')]:{
        display: 'block',
    }
}))
const Header= () =>
{
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open,setOpen] =useState(false)
    const handleOpen = () =>{
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }

    const list = () =>(
        <Box style={{width:250}} onClick={handleClose}>
            <List>
                <ListItemButton>
                    <CustomButton/>
                </ListItemButton>
            </List>
        </Box>
    )
    
    return(
        <StyledHeader>
            <Toolbar style={{minHeight:55}}>
                <MenuButton color="inherit" onClick={handleOpen}>
                    <Menu />
                </MenuButton>

                <Drawer open={open} onClose={handleClose} >
                    {list()}
                </Drawer>
                
                <Logo to='/'>
                    <img src={logoURL} alt="Logo" style={{width:75}}/>
                    <Box style={{display: 'flex' }}>
                        <Subheading>
                            Explore&nbsp;
                            <Box component="span" style={{color: '#FFE500'}}>Plus</Box>
                        </Subheading>
                        <Pluslogo src={subURL} alt="Sub Logo"/>
                    </Box>
                </Logo>
                <Search></Search>
                <CustomButtonWrapper>
                    <CustomButton></CustomButton>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;