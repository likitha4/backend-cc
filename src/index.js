// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// import express from "express"
import connectDB from "./db/index.js";
import dotenv from "dotenv"
// require('dotenv').config({path: './env'})

dotenv.config({
    path: './env'
})
connectDB()
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
