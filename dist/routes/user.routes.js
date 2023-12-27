"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_model_1 = __importDefault(require("../models/User.model"));
const userRoute = (0, express_1.Router)();
userRoute.post("/user", (req, res, next) => {
    const { email, password } = req.body;
    User_model_1.default.create({ email: email, password: password });
    res.json("success");
    console.log(email, password);
});
exports.default = userRoute;
