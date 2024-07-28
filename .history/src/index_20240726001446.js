import { process_params } from "express/lib/router";
import mongoose from "mongoose";

(async () => {
   try {
    mongoose.connect(`${process.env.}`)
   } catch (error) {
    console.log(error)
   }

})()