"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const router = express_1.default.Router();
const taskSchema = new mongoose_1.default.Schema({
    task: String
});
const allTask = mongoose_1.default.model("allTask", taskSchema);
router.post("/addTask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield allTask.create({
            task: req.body.task
        });
        // const taskCollection = await mongoose.connection.db.collection("alltasks");
        // const data = await taskCollection.find({}).toArray();
        // const desiredData=data.map((item)=>item.task)
        // console.log(desiredData)
        res.json({ success: true });
    }
    catch (err) {
        console.log("error from taskitem", err);
        res.json({ success: false });
    }
}));
router.post("/deleteTask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskCollection = yield mongoose_1.default.connection.db.collection("alltasks");
        yield taskCollection.deleteOne({ task: req.body.task });
        res.json({ success: true });
    }
    catch (err) {
        console.log("error from taskitem", err);
        res.json({ success: false });
    }
}));
router.post("/showTask", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskCollection = yield mongoose_1.default.connection.db.collection("alltasks");
        const data = yield taskCollection.find({}).toArray();
        const desiredData = data.map((item) => item.task);
        console.log(desiredData);
        res.send(desiredData);
    }
    catch (err) {
        console.log("error from taskitem", err);
        res.json({ success: false });
    }
}));
module.exports = router;
