import styled from '@emotion/styled';
import { InputBase, List, ListItem } from '@mui/material';
import { Box, style } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Link } from 'react-router-dom';

const SearchContainer=styled(Box)`
    background:#fff;
    width:38%;
    border-radius: 2px;
    margin-left:10px;
    display: flex;
`;
const Input = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size: unset;
`;

const IconSearch=styled(Box)`
    color: Blue;
    margin-top:5px;
    display:flex;
`
const ListWrapper = styled(List)(({theme})=>({
    position: 'absolute',
    background: '#FFFFFF',
    color: '#000',
    marginTop:36,
}))


const Search=()=>{
    const [text,setText] = useState('');

    const {products} =useSelector(state => state.getProducts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText = (text) =>{
        setText(text)
    }

    return (
        <SearchContainer>
            <Input placeholder='Search for products, brands and more' onChange={(e)=>getText(e.target.value)} value={text} />
            <IconSearch>
                <SearchIcon/>
            </IconSearch>
            {
                text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text)).map(product =>(
                                <ListItem>
                                    <Link to={`./product/${product.id}`} onClick={()=>setText('')} style={{textDecoration: 'none', color:'inherit'}}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>

    )
}

export default Search;