"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const authController_1 = __importDefault(require("../controllers/authController"));
const router = new koa_router_1.default();
router.post('/login', authController_1.default.login);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map