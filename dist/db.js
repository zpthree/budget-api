"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("useCreateIndex", true);
mongoose_1.default.set("useFindAndModify", false);
mongoose_1.default.Promise = global.Promise;
function connectDB() {
    mongoose_1.default.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}
exports.default = connectDB;
//# sourceMappingURL=db.js.map