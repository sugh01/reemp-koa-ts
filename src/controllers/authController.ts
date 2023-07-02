import { Context } from 'koa';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { User } from '../models/User';
//import Router from 'koa-router';

//const router = new Router();
const getUsers = (): User[] => {
  const dbPath = resolve(__dirname, '../../db.json');
  const dbData = readFileSync(dbPath, 'utf-8');
  const { users } = JSON.parse(dbData);
  return users;
};

const authenticate = (id: string, password: string): User | undefined => {
  const users = getUsers();
  return users.find((user) => user.id === id && user.password === password);
};

export const login = async (ctx: Context) => {
  const { id, password } = ctx.request.body as User;
  const user = authenticate(id, password);
  if (user) {
    ctx.status = 200;
    await ctx.render('loggedin', {id: user.id});
  } else {
    ctx.status = 401;
    ctx.body = { message: 'Invalid credentials' };
  }
};

export const logout = async (ctx: Context) => {
  ctx.redirect('/');
};

