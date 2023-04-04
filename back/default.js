import { Products } from "./constants/data.js"
import Product from "./database/productSchema.js"

const DefaultData=async ()=>{
    try
    {
        // await Product.deleteMany({}); ye logical solution nahi hai tw iske liye hum schema me unique true karengey
        await Product.insertMany(products);
        console.log("Data Inserted Successfully")
    }
    catch(error)
    {
        console.log("Cannot Insert",error.message)
    }
}

export default DefaultData;