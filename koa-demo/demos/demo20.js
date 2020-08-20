const Koa = require('koa')
const Koa = require('koa-body')
const koaBody = require('koa-body')
const app = new Koa()
const main = ctx => {
    const body = ctx.require.body
    if (!body.name) {
        ctx.throw(400,'request.name')
    }
    ctx.response.body = { name: body.name}
}
app.use(koaBody)
app.use(main)
app.listen(3000)
