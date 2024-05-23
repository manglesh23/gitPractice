require('dotenv').config();
const mongoose=require("mongoose");
const URL=process.env.DATABASE_KEY;

const connectDatabase=async()=>{
    try{
      await mongoose.connect(URL);
      console.log("Database connected From DatabaseConnection");
    }catch(e){
        console.log("failed to Connect From databaseconnection",e);
        return{
            error:true,
            details:e
        }
    }
}

module.exports={connectDatabase};