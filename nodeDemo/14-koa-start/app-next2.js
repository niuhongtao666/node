//路由级中间件
const Koa=require('koa');
const Router=require('koa-router');
const app=new Koa();
const router=new Router();
router.get('/news',async (ctx,next)=>{
    console.log('新闻页');
    next()
})
router.get('/news',async (ctx)=>{
    // console.log(ctx);
    ctx.body='新闻页'
})
app.use(router.routes())//router.allowedMethods()响应头设置状态,个人理解这个方法本身就是一个报错机制
app.listen(3000);