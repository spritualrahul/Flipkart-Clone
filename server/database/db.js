import mongoose from "mongoose";


export const connection =async()=>{
    const URL="mongodb://rahul:<rahul>@ac-0goq7az-shard-00-00.g9vkomq.mongodb.net:27017,ac-0goq7az-shard-00-01.g9vkomq.mongodb.net:27017,ac-0goq7az-shard-00-02.g9vkomq.mongodb.net:27017/?ssl=true&replicaSet=atlas-s6p73x-shard-0&authSource=admin&retryWrites=true&w=majority";
    try{
       await mongoose.connect(URL,{ useUnifiedTopology:true,  useNewUrlParser:true });
       console.log("Database connected successfully");

    }catch(error){
        console.log("error while connecting with the database",error.message);
    }
}

export default connection;