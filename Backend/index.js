import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./router/book.router.js"
import userRoute from "./router/user.router.js"
import cors from "cors"
const app = express()

 app.use(cors());
 app.use(express.json());

dotenv.config();
const port = process.env.PORT || 4000;
const URI = process.env.mongoDBURI;

// connecting to mongoDB

try {
    mongoose.connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    });
    console.log("connected to mongo");
} catch (error) {
    console.log("error: ",error);
}

//defining routes
app.use("/books",bookRoute);
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})