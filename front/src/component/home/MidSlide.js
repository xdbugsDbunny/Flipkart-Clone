import { Box , styled } from "@mui/material";
import Slide from "./Slides";


const Componenet=styled(Box)`
    display:flex;
`
const Left=styled(Box)(({theme})=>({
    width:'83%',
    [theme.breakpoints.down('md')]:{
        width: '100%',
    }
}))

const Right=styled(Box)(({ theme })=>({

    background: '#FFFFFF',
    padding:5,
    marginTop:10,
    marginLeft:10,
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]:{
        display: 'none'
    }
}));

const MidSilde=({products, title, timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <Componenet>
            <Left>
                <Slide products={products} title={title} timer={timer}/>
            </Left>

            <Right>
                <img src={adURL} style={{width:217}}></img>
            </Right>
        </Componenet>
    )
}

export default MidSilde;