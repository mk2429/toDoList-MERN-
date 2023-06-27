"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongooseConnect_1 = require("./mongooseConnect");
(0, mongooseConnect_1.mongo)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", require("./TaskItems"));
app.get("/", (req, res) => {
    res.send("hello");
});
app.listen(5000, () => {
    console.log("server Started");
});
