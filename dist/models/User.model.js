"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "Email is required."],
    },
    password: {
        type: String,
        required: [true, "Password is required."],
    },
}, {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.default = User;
