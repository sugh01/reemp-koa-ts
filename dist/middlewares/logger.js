"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = async (ctx, next) => {
    const start = Date.now();
    await next();
    const responseTime = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${responseTime}ms`);
};
exports.default = logger;
//# sourceMappingURL=logger.js.map