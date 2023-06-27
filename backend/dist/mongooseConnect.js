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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongo = void 0;
const mongoose = require("mongoose");
const mongo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose.connect("mongodb+srv://mayank20429:Mayank%4024@cluster0.n5jejyx.mongodb.net/ToDoList");
        console.log("Db Connected");
    }
    catch (error) {
        console.log("dbcnncterror", error);
    }
});
exports.mongo = mongo;
