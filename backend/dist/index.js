"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongooseConnect_1 = require("./mongooseConnect");
const path_1 = __importDefault(require("path"));
(0, mongooseConnect_1.mongo)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", require("./TaskItems"));
app.set("view engine", "ejs");
app.set("views", path_1.default.join(__dirname, "/frontend/build/index"));
app.use(express_1.default.static(path_1.default.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => res.sendFile(path_1.default.join(__dirname, "../frontend/build/index.html")));
app.listen(5000, () => {
    console.log("server Started");
});
