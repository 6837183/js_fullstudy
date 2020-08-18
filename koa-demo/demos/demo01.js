 //  引入依赖
const Koa = require('koa')

const app = new Koa()  // 定义一个新的koa实例

const main = ctx => {
    ctx.response.body = "hello world"
}
app.use(main)

app.listen(3000,()=>{
    console.log('项目启动ing');
})