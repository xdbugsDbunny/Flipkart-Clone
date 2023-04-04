import { Typography,Box, styled, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { Fragment } from "react";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Offer = styled(Box)`
    font-size: 16px;
    verticle-align: baseline;
    & > p{
        font-size: 16px;
        margin-top: 10px;
    }
`
const OfferIcon = styled(LocalOfferIcon)`
    margin-right:10px;
    color: #00CC00;
    font-size: 17px;
`
const Row = styled(TableRow)`
    font-size:14px;
    vertical-align: baseline;
    & > td{
        font-size:14px;
        margin-top:10px;
        border: none;
    }
`

const ProductDetails = ({product}) =>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const date= new Date(new Date().getTime()+(5*24*60*60*1000))
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    return (
        <Fragment>
            <Typography style={{fontWeight: 600, fontSize: '18px'}}>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: '#878787',fontSize:14}}>
                10 Ratings & 2 Reviews
                <Box component="span"><img src={fassured} style={{width:77, marginLeft:20}}/></Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: '#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component="span" style={{color: '#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available Offers</Typography>
            <Offer>
                <Typography>
                    <OfferIcon/>
                    Bank Offer10% off on IDBI Bank Debit and Credit Card Transactions, up to ₹500. On orders of ₹1,500 and aboveT&C
                </Typography>
                <Typography>
                    <OfferIcon/>
                    Bank Offer10% off on Yes Bank Credit Card and EMI Transactions, up to ₹1,500. On orders of ₹10,000 and aboveT&C
                </Typography>
                <Typography>
                    <OfferIcon/>
                    Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C
                </Typography>
                <Typography>
                    <OfferIcon/>
                    Buy this Product and Get Extra ₹500 Off on Bikes & ScootersT&C
                </Typography>
            </Offer>
            <Table>
                <TableBody>
                    <Row>
                        <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                        <TableCell style={{fontWeight: 600}}>Delivered by {date.toDateString()} | ₹40</TableCell>
                    </Row>
                    <Row>
                        <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                        <TableCell style={{fontWeight: 600}}>1 Year</TableCell>
                    </Row>
                    <Row>
                        <TableCell style={{color:'#878787'}}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color: '#2874F0'}}>KLPLWORLDRetail</Box>
                            <Typography>GST Invoice Available</Typography>
                            <Typography style={{fontSize:12}}>View More Sellers Starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </Row>
                    <Row>
                        <TableCell colSpan={2}>
                            <img src={adURL} style={{ width: 390}} alt="flipkartPoints"/>
                        </TableCell>
                    </Row>
                    <Row>
                        <TableCell style={{color : '#878787'}}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </Row>
                </TableBody>
            </Table>
        </Fragment>
    )
}

export default ProductDetails;