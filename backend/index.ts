import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { mongo } from "./mongooseConnect";
import path from "path"
mongo();
const app=express()
app.use(cors());
app.use(express.json());
app.use("/api",require("./TaskItems"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/frontend/build/index"));

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"))
);

app.listen(5000,()=>{
    console.log("server Started")
})