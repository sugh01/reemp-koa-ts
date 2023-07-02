"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.login = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
//import Router from 'koa-router';
//const router = new Router();
const getUsers = () => {
    const dbPath = (0, path_1.resolve)(__dirname, '../../db.json');
    const dbData = (0, fs_1.readFileSync)(dbPath, 'utf-8');
    const { users } = JSON.parse(dbData);
    return users;
};
const authenticate = (id, password) => {
    const users = getUsers();
    return users.find((user) => user.id === id && user.password === password);
};
const login = async (ctx) => {
    const { id, password } = ctx.request.body;
    const user = authenticate(id, password);
    if (user) {
        ctx.status = 200;
        await ctx.render('loggedin', { id: user.id });
    }
    else {
        ctx.status = 401;
        ctx.body = { message: 'Invalid credentials' };
    }
};
exports.login = login;
const logout = async (ctx) => {
    ctx.redirect('/');
};
exports.logout = logout;
//# sourceMappingURL=authController.js.map