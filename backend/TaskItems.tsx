import express from "express";
import mongoose from "mongoose";
const router=express.Router()

const taskSchema=new mongoose.Schema({
    task:String
})

const allTask=mongoose.model("allTask",taskSchema);

router.post("/addTask",
async(req,res)=>{
    try{
        await allTask.create({
            task:req.body.task
        })

        res.json({success:true})
    } catch(err){
        console.log("error from taskitem",err)
        res.json({success:false})
    }
})
router.post("/deleteTask",
async(req,res)=>{
    try{
        const taskCollection = await mongoose.connection.db.collection("alltasks");
        await taskCollection.deleteOne({ task: req.body.task });
    
        
        res.json({success:true})
       
    } catch(err){
        console.log("error from taskitem",err)
        res.json({success:false})
    }
})
router.post("/showTask",
async(req,res)=>{
    try{
        const taskCollection = await mongoose.connection.db.collection("alltasks");
        const data = await taskCollection.find({}).toArray();
        const desiredData=data.map((item)=>item.task)
        console.log(desiredData)
        res.send(desiredData)
       
    } catch(err){
        console.log("error from taskitem",err)
        res.json({success:false})
    }
})


module.exports=router