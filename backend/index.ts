import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { mongo } from "./mongooseConnect";

mongo();
const app=express()
app.use(cors());
app.use(express.json());
app.use("/api",require("./TaskItems"));

app.get("/",(req,res)=>{
    res.send("hello")
});
app.listen(5000,()=>{
    console.log("server Started")
})