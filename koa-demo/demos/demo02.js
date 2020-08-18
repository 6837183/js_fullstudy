 //  引入依赖
 const Koa = require('koa')

 const app = new Koa()  // 定义一个新的koa实例
 
 const main = ctx => {
   if (ctx.require.accepts('xml')) {
    ctx.response.type = 'xml'
    ctx.response.type = '<data>Hello world<data>'
   }else if(ctx.require.accepts('xml')) {
    ctx.response.type = 'html'
    ctx.response.body = '<p>Hello World</p>'
   }else if(ctx.require.accepts('json')){
    ctx.response.type = 'json'
    ctx.response.body = '{data:Hello World}'
   }else{
    ctx.response.type = 'text'
    ctx.response.body = 'Hello World'
   }
 }
 app.use(main)
 
 app.listen(3000,()=>{
     console.log('项目启动ing');
 })