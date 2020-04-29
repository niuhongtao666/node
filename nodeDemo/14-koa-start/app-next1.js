const Koa=require('koa');
const Router=require('koa-router');
const app=new Koa();
const router=new Router();
//应用级中间件
app.use(async (ctx,next)=>{
    console.log(new Date);
    await next()
})
router.get('/',async (ctx)=>{
    // console.log(ctx);
    ctx.body='首页'
}).get('/news',async (ctx)=>{
    // console.log(ctx);
    ctx.body='新闻页'
}).get('/articles',async (ctx)=>{
    // console.log(ctx);
    ctx.body='文章页'
})
app.use(router.routes())//router.allowedMethods()响应头设置状态,个人理解这个方法本身就是一个报错机制
app.listen(3000);