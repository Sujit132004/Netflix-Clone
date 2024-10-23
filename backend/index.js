//step 1 server create 
// const express=require("express");
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
databaseConnection()
dotenv.config({
    path:".env"
});

const app=express();
//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions={
    origin:"http://localhost:3000",
    credentials: true 
}
app.use(cors(corsOptions));
app.use("/api/v1/user",userRoute);
app.listen(process.env.PORT,()=>{
    console.log("Server is listening at Port:",process.env.PORT);
});


