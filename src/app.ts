import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import render from 'koa-ejs';
import path from 'path';
import logger from '../middlewares/logger';
//import authRoutes from './routes/authRoutes';
import serve from 'koa-static';
import { Context } from 'koa';
//import { User } from './models/User';
import {login, logout} from './controllers/authController';
//import mount from 'koa-mount';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(serve(path.join(__dirname, 'views')))

render(app, {
  root: path.join(__dirname, './views'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: false,
});

app.use(logger);

// Add more routes for authentication, etc.

router.get('/', async (ctx: Context) => {
    await ctx.render('index');
  });
  
router.get('/login', async (ctx) => {
await ctx.render('login');
});

router.post('/login', login);
router.get('/logout', logout);

app.use(router.routes());
app.use(router.allowedMethods());  
// app.use(authRoutes.routes());
// app.use(authRoutes.allowedMethods());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
