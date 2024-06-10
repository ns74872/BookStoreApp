 import express from "express"
 const app = express();

 app.get("/",(res,req)=>{
    res.get("Hello");
 });

 app.listen(1000,()=>{
    console.log("server started at port 1000");
 });