import mongoose from "mongoose";
import { DB_NAME } from "./constants";
(async () => {
   try {
    mongoose.connect(`${process.env.MONGODB_URI}/$`)
   } catch (error) {
    console.log(error)
   }
})()