import { Context, Next } from 'koa';
declare const logger: (ctx: Context, next: Next) => Promise<void>;
export default logger;
