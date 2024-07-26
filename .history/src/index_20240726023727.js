import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

(async () => {
   try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
        console.log("Err : ", error);
        throw error
    })

    app.listen(process.env.PORT, ()=> {
        console.log()
    })
   } catch (error) {
    console.log(error)
   }
})()