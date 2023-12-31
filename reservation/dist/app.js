"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reservation_1 = __importDefault(require("./routes/reservation"));
const app = (0, express_1.default)();
const port = 3000;
app.use("/reservation", reservation_1.default);
app.use(express_1.default.static("public"));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
console.log("running now!");
