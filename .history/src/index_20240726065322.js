// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import express from "express";  
const app = express();

dotenv.config({
    path : '/.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log(`Server is listening on port ${process.env.PORT}`);
    })   
})
.catch((error) => {
    console.log()
})


// (async () => {
//    try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     app.on("error", (error) => {
//         console.log("Err : ", error);
//         throw error
//     })

//     app.listen(process.env.PORT, ()=> {
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//    } catch (error) {
//     console.log(error)
//    }
// })()