import {Dialog,Box,styled,TextField, Typography, Button} from '@mui/material';
import { useState,useContext } from 'react';
import { authenticateSignup } from '../../service/api';
import { authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
const MainWrapper=styled(Box)`
    height:80vh;
    width:90vh;
    padding:0;
    padding-top: 0;
`
const Text = styled(Typography)`
    font-size:12px;
    color: #878787
`
const CreateAccount=styled(Typography)`
    font-size: 14px;
    color: #2874F0;
    text-align: center;
    font-weight:600;
    cursor:pointer;

`
const LeftWarpper=styled(Box)`
    background: #2874F0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width:35%;
    padding: 45px 35px;
    & > p, & > h5{
        color: #FFFFFF;
        font-weight:600;
    }
`
const RightWarpper=styled(Box)`
    display:flex;
    flex-direction: column;
    padding:25px 35px;
    flex: 1;
    overflow: auto;
    & > div, & > button, & > p{
        margin-top:14px;
    }
`
const LoginContinue=styled(Button)`
    text-transform:none;
    background: #FB641B;
    color:#FFF;
    height: 45px;
    border-radius:5px;
`
const RequestOTP=styled(Button)`
    text-transform:none;
    background: #FFF;
    color:#2874F0;
    height: 45px;
    border-radius:5px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)
`

const Error=styled(Typography)`

    font-size:10px;
    color: #ff6161;
    line-height:0;
    margin-top:100px;
    font-weight: 600;
`
const accountInitialValues={
    login:{
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        view: ' signup',
        heading: "Looks like you're new here!",
        subHeading: "Sign up with your mobile number to get started"
    }
} 
const signupInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
}

const loginInitialValues={
    username: '',
    password: '',
}

const LoginDialog = ({open,setOpen}) =>{
    
    const [account,toggleAccount]=useState(accountInitialValues.login);
    const [signup,setSingup]=useState(signupInitialValues);
    const {setAccount}=useContext(DataContext);
    const [login,setLogin]=useState(loginInitialValues);
    const [error,setError]=useState(false);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false)
    }

    const toggleSignup=()=>{
        toggleAccount(accountInitialValues.signup)
    }
    const existingUser=()=>{
        toggleAccount(accountInitialValues.login)
    }

    const onInputChange=(e)=>{
        setSingup({...signup,[e.target.name]: e.target.value});
    }

    const signupUser =async () =>{
        let response=await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value})
    }

    const loginUser=async () =>{
        let response=await authenticateLogin(login);
        if(response.status === 200)
        {
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }

    }

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth:'unset'}}}>
            
            <MainWrapper>
                <Box style={{display: 'flex',height:'100%'}}>
                <LeftWarpper>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                </LeftWarpper>
            {
                account.view === 'login' ?
                <RightWarpper>
                    <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='username' label='Enter Username'></TextField>
                    {error && <Error>Please Enter Valid Username or Password</Error>}
                    <TextField variant='standard' onChange={(e)=>onValueChange(e)} name='password' label='Enter Password'></TextField>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginContinue onClick={()=>loginUser()}>Login</LoginContinue>
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>Request OTP</RequestOTP>
                    <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                </RightWarpper>
                :
                <RightWarpper>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="firstname" label='Enter First Name'></TextField>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="lastname" label='Enter Last Name'></TextField>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="username" label='Enter Username'></TextField>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="password" label='Enter Password'></TextField>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="email" label='Enter Email'></TextField>
                    <TextField variant='standard' onChange={(e)=>onInputChange(e)} name="phone" label='Enter Mobile Number'></TextField>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginContinue onClick={()=>signupUser()}>Continue</LoginContinue>
                    <RequestOTP onClick={()=>existingUser()}>Existing User? Log in</RequestOTP>
                </RightWarpper>
            }
            </Box>
            </MainWrapper>
        </Dialog>
    )
}

export default LoginDialog;