import mongoose from "mongoose";
import { DB_NAME } from "./constants";
(async () => {
   try {
    mongoose.connect(`${process.env.}`)
   } catch (error) {
    console.log(error)
   }
})()