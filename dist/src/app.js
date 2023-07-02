"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const koa_ejs_1 = __importDefault(require("koa-ejs"));
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("../middlewares/logger"));
//import authRoutes from './routes/authRoutes';
const koa_static_1 = __importDefault(require("koa-static"));
//import { User } from './models/User';
const authController_1 = require("./controllers/authController");
//import mount from 'koa-mount';
const app = new koa_1.default();
const router = new koa_router_1.default();
app.use((0, koa_bodyparser_1.default)());
app.use((0, koa_static_1.default)(path_1.default.join(__dirname, 'views')));
(0, koa_ejs_1.default)(app, {
    root: path_1.default.join(__dirname, './views'),
    layout: false,
    viewExt: 'ejs',
    cache: false,
    debug: false,
});
app.use(logger_1.default);
// Add more routes for authentication, etc.
router.get('/', async (ctx) => {
    await ctx.render('index');
});
router.get('/login', async (ctx) => {
    await ctx.render('login');
});
router.post('/login', authController_1.login);
router.get('/logout', authController_1.logout);
app.use(router.routes());
app.use(router.allowedMethods());
// app.use(authRoutes.routes());
// app.use(authRoutes.allowedMethods());
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=app.js.map