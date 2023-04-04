import { Box,styled, Typography } from "@mui/material";
import React from "react";
import {navData} from '../../constants/data'

const Component =styled(Box)(({ theme })=>({
    display:'flex',
    margin:'55px 130px 0 130px',
    justifyContent:'space-between',
    overflow: ' overlay ',
    [theme.breakpoints.down('lg')]:{
        margin: 0,
    }
}))


const Container=styled(Box)`
    padding: 12px 8px;
    text-align:center;
`
const Text=styled(Typography)`
    font-size:16px;
    font-weight:bold;

`
const NavBar=()=>{
    return(
        <Box style={{backgroundColor:'#FFF'}}>
            <Component>
            {
                navData.map(row=>
                <Container>
                    <img src={row.url} alt="nav" style={{width: 64}} />
                    <Text>{row.text}</Text>
                </Container>                    
                    )
            }
            </Component>
        </Box>
    )
}

export default NavBar;