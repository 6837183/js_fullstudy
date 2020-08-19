const Koa = require('koa')

const app = new Koa()
// var timestamp = Date.parse(new Date());
const main = ctx => {
    // console.log(ctx.require);
    ctx.response.body = `${ctx.request.url}-${ctx.request.method}-${Date.now()}`
}
app.use(main)
app.listen(3000)
