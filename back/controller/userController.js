import User from "../database/userSchema.js";


export const userSignup=async (req,res)=>{
    try{
        const exist = await User.findOne({username:req.body.username});   
        if(exist){
            return res.status(401).json({message: 'Username already Exist'})
        }
            
        const olduser=req.body;
        const newUser = new User(olduser);
        await newUser.save();

        res.status(200).json({message: olduser});
    }catch(error){
        res.status(500).json({message: error.message})
        console.log(error.message)
    }
}


export const userLogin=async (req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username,password:req.body.password});
        if(user){
            return res.status(200).json({data:user})
        }else{
            return res.status(401).json('Invalid Login')
        }
    }catch(error){
        res.status(500).json({message: error.message})
    }
}