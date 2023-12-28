"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./src/config/db");
const config_1 = __importDefault(require("./src/config"));
const user_routes_1 = __importDefault(require("./src/routes/user.routes"));
const index_routes_1 = __importDefault(require("./src/routes/index.routes"));
const error_handling_1 = __importDefault(require("./src/error-handling"));
const app = (0, express_1.default)();
(0, config_1.default)(app);
app.use("/api", user_routes_1.default);
app.use("/", index_routes_1.default);
(0, error_handling_1.default)(app);
exports.default = app;
