import mongoose from "mongoose";
imp
(async () => {
   try {
    mongoose.connect(`${process.env}`)
   } catch (error) {
    console.log(error)
   }
})()