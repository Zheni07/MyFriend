"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const game_route_1 = __importDefault(require("./routes/game.route"));
exports.app = (0, express_1.default)();
const corsOptions = {
    origin: process.env.CORS_URL
};
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use("/api/auth", auth_route_1.default);
exports.app.use("/api/game", game_route_1.default);
exports.default = exports.app;
//# sourceMappingURL=app.js.map