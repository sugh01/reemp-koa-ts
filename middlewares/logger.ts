import { Context, Next } from 'koa';

const logger = async (ctx: Context, next: Next) => {
  const start = Date.now();
  await next();
  const responseTime = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${responseTime}ms`);
};

export default logger;
