"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./src/app"));
dotenv_1.default.config();
// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const port = process.env.PORT || 5004;
app_1.default.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
