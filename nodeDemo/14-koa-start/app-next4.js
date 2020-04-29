//中间件-洋葱模型
const Koa=require('koa');
const Router=require('koa-router');
const app=new Koa();
const router=new Router();
app.use(async (ctx,next)=>{
    console.log('第1步')
    next();
    console.log('第5步');
})
app.use(async (ctx,next)=>{
    console.log('第2步')
    next();
    console.log('第4步');
})
router.get('/news',async (ctx,next)=>{
    console.log('第3步');
    ctx.body='新闻页'
})
app.use(router.routes())//router.allowedMethods()响应头设置状态,个人理解这个方法本身就是一个报错机制
app.listen(3000);