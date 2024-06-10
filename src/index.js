// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js"; 
// the commented code is another way of connecting db

// import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv"
import { app } from "./app.js";
// require('dotenv').config({path: './env'})

dotenv.config({
    path: './env'
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at PORT ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO dn connection failed",err);
})
// app=express()
// //iify
// (async()=>{
// try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//    app.on("error",(error)=>
//     {console.log("ERR:",error);
// throw error
// })
// app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on port ${process.env.PORT}`);
// })

// } catch (error) {
//     console.log("Error:",error);
//     throw error;
// }
// })
