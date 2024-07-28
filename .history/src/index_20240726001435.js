import mongoose from "mongoose";

(async () => {
   try {
    mongoose.connect(`${pr}`)
   } catch (error) {
    console.log(error)
   }

})()