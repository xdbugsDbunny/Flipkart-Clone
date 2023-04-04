import axios from 'axios';

const URL="http://localhost:8000";
export const authenticateSignup = async (user) =>{
    try{
        return await axios.post(`${URL}/signup`,user)
    }catch(error){
        console.log('Error While Calling Signup Api',error)
    }
}
export const authenticateLogin = async (user) =>{
    try{
        return await axios.post(`${URL}/login`,user)
    }catch(error){
        console.log('Error While Calling login Api',error);
        return error.response
    }
}