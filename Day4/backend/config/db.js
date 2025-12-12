const mongoose=require('mongoose');
const uri = process.env.MONGO_URL;
const connection = async ()=>{
    try{
         await mongoose.connect(uri);
         console.log("DataBase connected Successfully")
    }catch(err){
        console.log("Error while connecting to DataBase",err);  
    }
}
module.exports=connection;