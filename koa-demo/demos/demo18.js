const Koa = require('koa')
const app = new Koa()

const handle = async(ctx,next)=> {
    try {
        await next()
    } catch(error) {
        ctx.response.status = error.statusCode  | error.status | 500;
        ctx.response.type = 'html'
        ctx.response.body = '<p>ERROR</p>'
        ctx.app.emit('error',error,ctx)
    }
}
const main = ctx => {
    ctx.throw(500)
}
app.on('error',function(err){
    console.log(err);
    console.log('logger error',err.message);
})
app.use(handle)
app.use(main)
app.listen(3000)
