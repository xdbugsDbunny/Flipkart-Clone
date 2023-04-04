import mongoose  from "mongoose";

mongoose.set('strictQuery', true);
const Connection=async (USERNAME,PASSWORD)=>{
    try{
        await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@flipkartclone.uwg1tzu.mongodb.net/?retryWrites=true&w=majority`,{
            
            useNewUrlParser:true, // Url parse karega, old wala deprecate ho gya hai tw ye bolra hai ki new wala use karo
            useUnifiedTopology:true //Mtlb new monitoring engine and server directory ka use krna 
        });
        console.log("Database Connected Successfully",)
    }
    catch(error)
    {
        console.log("Connection Error : ",error.message);
    }
}

export default Connection;