const mongoose = require("mongoose");

export const mongo = async () => {
    try {
        await mongoose.connect("mongodb+srv://mayank20429:Mayank%4024@cluster0.n5jejyx.mongodb.net/ToDoList")
        console.log("Db Connected")
        
    }catch(error){
        console.log("dbcnncterror",error)
    }
}
